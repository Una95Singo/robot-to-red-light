// Progress lives entirely in the visitor's browser. There is no account and no
// server: clearing site data is the reset button.

export type Attempt = {
  ts: number;
  mode: string;
  score: number;
  total: number;
  signRight: number;
  signTotal: number;
  passed: boolean;
};

export type Progress = {
  /** bridge id -> internalised */
  mastered: Record<string, true>;
  attempts: Attempt[];
  /** category -> { r: right, t: total } across every quiz answered */
  cat: Record<string, { r: number; t: number }>;
  /** target test date as YYYY-MM-DD, or null until the visitor picks one */
  target: string | null;
};

const KEY = 'robot-to-redlight-v1';

export const blank = (): Progress => ({ mastered: {}, attempts: [], cat: {}, target: null });

export function loadProgress(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) return { ...blank(), ...(JSON.parse(raw) as Partial<Progress>) };
  } catch {
    // first visit, private mode, or storage disabled — start clean
  }
  return blank();
}

export function saveProgress(p: Progress): void {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(p));
  } catch (e) {
    console.error('save failed', e);
  }
}
