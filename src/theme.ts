import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#BF3100',
    },
    secondary: {
      main: '#8EA604',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
