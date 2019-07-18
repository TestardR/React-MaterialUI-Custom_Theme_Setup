import { createMuiTheme } from "@material-ui/core/styles";
import { green, amber, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[400],
      dark: green[900],
      light: green[200]
    },
    secondary: {
      main: amber[400],
      dark: amber[900],
      light: amber[200]
    },
    error: {
      main: red[900]
    }
  }
});

export default theme;
