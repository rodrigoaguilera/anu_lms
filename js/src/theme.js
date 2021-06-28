import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import withStyles from '@material-ui/core/styles/withStyles';

// Create a default theme with colors defined, so that
// in the actual theme we could reference to the existing
// colors and also breakpoints.
// See https://material-ui.com/customization/default-theme
// to find out about all options.
const defaultTheme = createMuiTheme({
  typography: {
    fontFamily: '"Public Sans", sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  palette: {
    common: {
      black: '#000000',
      white: '#ffffff',
    },
    // Note that it is assumed that the only color that is planned to be
    // overwritten is the primary. All other colors used in ANU are likely
    // to stay as is regardless of the project.
    primary: {
      main: '#004bbd',
      contrastText: '#ffffff',
    },
    grey: {
      100: '#fafafa',
      200: '#f6f7f8',
      300: '#cfd8dc',
      400: '#445963',
    },
    accent1: {
      main: '#f5de95',
      contrastText: '#000000',
    },
    accent2: {
      main: '#00796b',
      contrastText: '#ffffff',
    },
    success: {
      main: '#00796b',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#f5de95',
      contrastText: '#000000',
    },
    error: {
      main: '#9f2621',
      contrastText: '#ffffff',
    },
  },
});

const theme = createMuiTheme({
  ...defaultTheme,
  typography: {
    h1: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '3.75rem',
      lineHeight: 1.125,
      letterSpacing: 'normal',
    },
    h2: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightMedium,
      fontSize: '2.625rem',
      lineHeight: 1.25,
      letterSpacing: 'normal',
    },
    h3: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '2.375rem',
      lineHeight: 1.375,
      letterSpacing: 'normal',
    },
    h4: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightRegular,
      fontSize: '1.5rem',
      lineHeight: 1.75,
      letterSpacing: 'normal',
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '2.125rem',
        lineHeight: 1.5,
      },
    },
    h5: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '1.25rem',
      lineHeight: 1.25,
      letterSpacing: 'normal',
      [defaultTheme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
    },
    h6: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightMedium,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    subtitle1: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '1.25rem',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    subtitle2: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '1rem',
      lineHeight: 1.25,
      letterSpacing: 'normal',
    },
    body1: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightRegular,
      fontSize: '1.125rem',
      lineHeight: 1.75,
      letterSpacing: 'normal',
    },
    body2: {
      color: defaultTheme.palette.common.black,
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightRegular,
      fontSize: '1rem',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    overline: {
      color: defaultTheme.palette.grey[400],
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
    },
    caption: {
      color: defaultTheme.palette.grey[400],
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightRegular,
      fontSize: '0.875rem',
      lineHeight: 1.5,
      letterSpacing: 'normal',
    },
    button: {
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '1rem',
      lineHeight: 1.25,
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    label1: {
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightMedium,
      fontSize: '1rem',
      lineHeight: 1.25,
      letterSpacing: 0,
      textTransform: 'uppercase',
    },
    label2: {
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightMedium,
      fontSize: '0.875rem',
      lineHeight: 1.25,
      letterSpacing: 0,
      textTransform: 'uppercase',
    },
    link: {
      color: defaultTheme.palette.primary.main,
      cursor: 'pointer',
      fontFamily: defaultTheme.typography.fontFamily,
      fontWeight: defaultTheme.typography.fontWeightBold,
      fontSize: '1rem',
      lineHeight: 1.25,
      letterSpacing: 0,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontFamily: defaultTheme.typography.fontFamily,
        fontSize: '1rem',
        paddingLeft: defaultTheme.spacing(4),
        paddingRight: defaultTheme.spacing(4),
        paddingTop: defaultTheme.spacing(1.5),
        paddingBottom: defaultTheme.spacing(1.5),
        [defaultTheme.breakpoints.down('sm')]: {
          width: '100%',
          borderRadius: 0,
        },
      },
    },
    MuiChip: {
      root: {
        fontFamily: defaultTheme.typography.fontFamily,
        fontSize: '1rem',
        height: '36px',
        letterSpacing: 0,
      },
    },
    MuiFormControlLabel: {
      root: {
        width: 'max-content',
      },
    },
    MuiListItem: {
      root: {
        paddingTop: 2,
        paddingBottom: 2,
      },
    },
  },
});

// Handle some global css overrides which exist
// outside of MUI components.
const GlobalCss = withStyles({
  '@global': {
    a: {
      color: theme.palette.primary.main,
      textDecoration: 'underline',
      '&:hover': {
        textDecoration: 'none',
      },
    },
  },
})(() => null);

export { theme, GlobalCss };
