import { createTheme } from "@material-ui/core";

const gpBlue = "#0B72B9";
const gpOrange = "#FFBA60";

export default createTheme({
  palette: {
    common: {
      blue: `${gpBlue}`,
      orange: `${gpOrange}`,
    },
    primary: {
      main: `${gpBlue}`,
    },
    secondary: {
      main: `${gpOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1em",
      textTransform: "none",
      color: "white",
    },
  },
});
