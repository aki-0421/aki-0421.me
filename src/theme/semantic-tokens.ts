const semanticTokens = {
  colors: {
    'body.bg': {
      _light: 'hsl(0 0% 100%)',
      _dark: 'hsl(0 0% 7%)',
    },
    'component.bg': {
      _light: 'hsl(0 0% 100%)',
      _dark: 'hsl(0 0% 10%)',
    },
    'component.hover': {
      _light: 'hsl(0 0% 95%)',
      _dark: 'hsl(0 0% 15%)',
    },
    'font.text': {
      _light: 'hsl(0 0% 35%)',
      _dark: 'hsl(0 0% 85%)',
    },
    'font.heading': {
      _light: 'hsl(0 0% 45%)',
      _dark: 'hsl(0 0% 75%)',
    },
    border: {
      _light: 'hsl(0 0% 92%)',
      _dark: 'hsl(0 0% 20%)',
    },
    'border.hover': {
      _light: 'hsl(360 100% 85%)',
      _dark: 'hsl(360 90% 85%)',
    },
    'accent.pink': {
      _light: 'hsl(360 100% 85%)',
      _dark: 'hsl(360 90% 85%)',
    },
  },
  shadows: {
    'border.hover': {
      _light: '0 0 0 1px hsl(360 100% 85%)',
      _dark: '0 0 0 1px hsl(360 90% 85%)',
    },
  },
};

export default semanticTokens;
