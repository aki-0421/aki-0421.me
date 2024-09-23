import 'yakuhanjp';
import '@fontsource/noto-sans-jp/400.css';
import '@fontsource/noto-sans-jp/500.css';
import '@fontsource/noto-sans-jp/700.css';

const fonts = [
  'YakuHanJP',
  'Noto Sans JP',
  'YuGothic',
  'Yu Gothic Medium',
  'Yu Gothic',
  'sans-serif',
];

const typography = {
  fonts: {
    body: fonts.join(','),
    heading: fonts.join(','),
    mono: fonts.join(','),
  },
};

export default typography;
