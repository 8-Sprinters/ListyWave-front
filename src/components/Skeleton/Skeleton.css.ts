import { style, keyframes, createVar } from '@vanilla-extract/css';

const skeletonAnimation = keyframes({
  '0%': { opacity: '0.2' },
  '50%': { opacity: '0.5' },
  '100%': { opacity: '0.2' },
});

export const width = createVar();
export const height = createVar();
export const borderRadius = createVar();

export const skeleton = style({
  width: width,
  height: height,
  borderRadius: borderRadius,
  backgroundColor: '#a5a5a5',
  animation: `${skeletonAnimation} 1.8s infinite linear`,
});
