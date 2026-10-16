import { describe, expect, test } from 'bun:test';
import { parsePreferences } from './consent';

describe('optional tracking permissions', () => {
  test('no choice grants no marketing tracking', () => {
    expect(parsePreferences(null).marketing).toBe(false);
  });
  test('analytics permission is not marketing permission', () => {
    expect(parsePreferences('{"analytics":true,"marketing":false}').marketing).toBe(false);
  });
  test('only explicit marketing acceptance enables advertising', () => {
    expect(parsePreferences('{"marketing":true}').marketing).toBe(true);
    expect(parsePreferences('{"marketing":"true"}').marketing).toBe(false);
  });
  test('withdrawal blocks both categories', () => {
    expect(parsePreferences('{"analytics":false,"marketing":false}')).toEqual({ essential: true, analytics: false, marketing: false, functional: false });
  });
  test('corrupt storage does not grant consent', () => {
    expect(parsePreferences('{broken').analytics).toBe(false);
    expect(parsePreferences('{broken').marketing).toBe(false);
  });
});