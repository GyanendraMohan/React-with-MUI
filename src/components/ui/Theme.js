import { createTheme } from "@mui/material/styles";

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
});
