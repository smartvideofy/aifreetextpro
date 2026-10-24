import { describe, expect, test } from 'bun:test';
import { cleanText, scanText } from '../../src/lib/invisibleChars';

describe('invisible character cleaner', () => {
  test('finds and removes zero-width characters', () => {
    const text = 'Hello​ world‍, this﻿ is text.';
    expect(scanText(text).length).toBe(3);
    const r = cleanText(text);
    expect(r.text).toBe('Hello world, this is text.');
    expect(r.removed).toBe(3);
  });
  test('turns unusual spaces into normal spaces', () => {
    expect(cleanText('It costs 4.99 a month.').text).toBe('It costs 4.99 a month.');
  });
  test('removes Unicode tag characters hidden in text', () => {
    const hidden = String.fromCodePoint(0xe0041, 0xe0042);
    const r = cleanText(`Plain${hidden} text.`);
    expect(r.text).toBe('Plain text.');
    expect(r.findings[0].kind).toBe('tag');
  });
  test('leaves clean text alone', () => {
    const text = 'Nothing hidden here — just “quotes”.';
    expect(scanText(text).length).toBe(0);
    expect(cleanText(text).text).toBe(text);
  });
  test('optionally replaces em dashes and curly quotes', () => {
    const r = cleanText('It works — mostly. “Yes,” she said, it’s fine.', { dashes: true, quotes: true });
    expect(r.text).toBe('It works, mostly. "Yes," she said, it\'s fine.');
    expect(r.dashes).toBe(1);
    expect(r.quotes).toBe(3);
  });
});
