export const bloomTokens = {
  colors: {
    brand: { default: '#ec008c', hover: '#d90082', tap: '#ab0067', light: '#fff2f9', dark: '#560033', disabled: '#9d9da0' },
    neutral: {
      primary: '#31313a', secondary: '#69696f', disabled: '#c9c9cc',
      bgPrimary: '#ffffff', bgSecondary: '#f5f5f6', bgTertiary: '#ebebec',
      borderPrimary: '#e0e0e3', borderSecondary: '#69696f',
    },
    success: { default: '#0f9f40', light: '#e6f7ec' },
    error: { default: '#dd1f29', light: '#ffecec' },
    warning: { default: '#f5a623', light: '#fff8ec' },
    info: { default: '#0c4df0', light: '#edf2ff' },
  },
  radius: { sm: '4px', card: '8px', full: '9999px' },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px' },
  fontSize: {
    micro: '10px', tiny: '11px', small: '13px', body: '14px', subtitle: '16px', heading: '18px',
  },
} as const
