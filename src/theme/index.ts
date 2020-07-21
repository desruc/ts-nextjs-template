import { createMuiTheme, Theme } from '@material-ui/core/styles';

const muiTheme: Theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#000000',
          color: '#FFFFFF'
        }
      }
    }
  }
});

export default muiTheme;
