import { describe, expect, test } from 'bun:test';
import { analyzeText, splitSentences } from '../../src/lib/textSignals';

const AI = `In today's fast-paced digital landscape, artificial intelligence plays a crucial role in shaping how businesses operate. Organizations are leveraging AI to streamline processes, enhance decision-making, and unlock new opportunities for growth. Moreover, AI-powered tools enable teams to analyze vast amounts of data with unprecedented speed and accuracy. Furthermore, the integration of machine learning into everyday workflows fosters innovation and drives efficiency. However, it is important to note that AI adoption also presents challenges, including ethical considerations and the need for robust data governance. Ultimately, companies that embrace AI thoughtfully will be well-positioned to thrive in an ever-evolving marketplace.`;

const HUMAN = `The bus was late again. I stood at the corner of 5th and Main for twenty minutes, watching my breath, wondering whether I'd make the 8:15 lecture. I didn't. Professor Okafor had already started on thermodynamics when I slid into the back row, and the only seat left was next to a guy eating cereal out of a mug. He offered me some. I said no, then regretted it, because I hadn't eaten since lunch the day before. That's the semester in a nutshell, really: late, hungry, and slightly confused about entropy.`;

const EDITED = `AI tools are useful at work, but they are not magic. Last quarter our team of six used ChatGPT to draft client reports, and it cut first-draft time from about three hours to forty minutes. The catch: every draft needed a real edit. It invented a statistic twice. It also wrote everything in the same polite, even tone, which our biggest client, a logistics firm in Leeds, actually complained about. So we changed the process. Drafts go to a human editor before anyone else sees them, and we keep the numbers out of the prompt entirely. It's slower than the demo videos suggest. It's still worth it.`;

describe('writing signal check', () => {
  test('an unedited chatbot paragraph reads as AI', () => {
    const r = analyzeText(AI);
    expect(r.verdict).toBe('ai-leaning');
    expect(r.score).toBeGreaterThanOrEqual(80);
    expect(r.phrases.map((p) => p.phrase)).toContain('moreover');
  });
  test('a personal human paragraph reads as human', () => {
    const r = analyzeText(HUMAN);
    expect(r.verdict).toBe('human-leaning');
    expect(r.score).toBeLessThan(35);
  });
  test('an AI draft edited with real detail reads as human', () => {
    expect(analyzeText(EDITED).verdict).toBe('human-leaning');
  });
  test('short text is not scored', () => {
    const r = analyzeText('This is short. Too short to judge.');
    expect(r.verdict).toBe('too-short');
    expect(r.score).toBe(0);
  });
  test('splits on sentence ends, not on decimals or initials mid-sentence', () => {
    expect(splitSentences('It costs 4.99 a month. That is cheap! Is it?')).toEqual([
      'It costs 4.99 a month.',
      'That is cheap!',
      'Is it?',
    ]);
  });
});
