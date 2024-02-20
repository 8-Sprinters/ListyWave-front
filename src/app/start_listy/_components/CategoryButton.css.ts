import { style, styleVariants, ComplexStyleRule } from '@vanilla-extract/css';
import { headlineSmall, titleMedium } from '@/styles/font.css';
import { vars } from '@/styles/theme.css';

export const container = style({
  width: '80%',
  display: 'grid',
  gridTemplateAreas: `
    "culture life life"
    "movie movie music"
    "place book book"
    "animal animal etc"
  `,
  gap: '1rem',
});

export const title = style([headlineSmall]); // titleLarge랑 고민

const category = style([
  titleMedium,
  {
    padding: '0.8rem 1.2rem',
    height: '40px',

    border: `1px solid ${vars.color.lightblue}`,
    borderRadius: '1rem',
  },
]);

interface ColorVariantsType {
  [key: string]: ComplexStyleRule;
}

export const variants = styleVariants<ColorVariantsType>({
  lifeButton: [
    category,
    {
      gridArea: 'life',
      backgroundColor: vars.color.skyblue,
    },
  ],
  placeButton: [
    category,
    {
      gridArea: 'place',
      backgroundColor: '#FFDCB2', // orange
    },
  ],
  musicButton: [
    category,
    {
      gridArea: 'music',
      backgroundColor: vars.color.yellow,
    },
  ],
  movie_dramaButton: [
    category,
    {
      gridArea: 'movie',
      backgroundColor: '#D0FF89', // green
    },
  ],
  cultureButton: [
    category,
    {
      gridArea: 'culture',
      backgroundColor: '#E6C6FF', // purple
    },
  ],
  bookButton: [
    category,
    {
      gridArea: 'book',
      backgroundColor: '#E6C6FF', // purple,
    },
  ],
  animal_plantButton: [
    category,
    {
      gridArea: 'animal',
      backgroundColor: vars.color.skyblue,
    },
  ],
  etcButton: [
    category,
    {
      gridArea: 'etc',
      backgroundColor: '#FFDCB2', // orange
    },
  ],
});
