import type { CSSProperties } from 'react';

export const Star = ({ className, style }: { className?: string; style?: CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <path d="M24 3l6 14 15 1-11 10 4 15-14-8-14 8 4-15L3 18l15-1z" fill="#FFD66B" stroke="#101014" strokeWidth={3} strokeLinejoin="round" />
  </svg>
);
