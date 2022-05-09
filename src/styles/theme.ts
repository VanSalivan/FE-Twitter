// @ts-nocheck

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 500,
      md: 986,
      lg: 1270,
      xl: 1500,
    },
  },
  palette: {
    primary: {
      main: 'rgb(29, 161, 242)',
      dark: 'rgb(26, 145, 218)',
      contrastText: '#fff',
    },
    secondary: {
      main: 'rgb(26, 145, 218)',
    },
    error: {
      main: '#ff0000',
    },
    background: {
      default: '#fff',
    },
  },
  components: {
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Ubuntu',
        'Helvetica Neue',
        'sans-serif',
        'Roboto',
        'system-ui',
      ],
    },
    MuiTypography: {
      styleOverrides: {
        h6: {
          fontWeight: 700,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          textTransform: 'none',
          fontSize: 16,
          height: 40,
          fontWeight: 700,
          marginTop: '12px',
        },
        textPrimary: {
          paddingLeft: 20,
          paddingRight: 20,
        },
        outlinedPrimary: {
          borderColor: 'rgb(29, 161, 243)',
        },
      },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px',
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px',
        },
      },
      input: {
        backgroundColor: 'rgb(245, 248, 250)',
      },
    },
    MuiDialog: {
      paper: {
        borderRadius: 15,
      },
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8,
      },
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rgb(204, 214, 221)',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: 800,
        },
        '& button': {
          padding: 8,
          marginRight: 20,
        },
      },
    },
  },
});
