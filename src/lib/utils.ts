import type { CSSProperties } from 'react';

export const dashedLine: CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(90deg, #f59e0b 0px, #f59e0b 28px, transparent 28px, transparent 48px)',
};

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
