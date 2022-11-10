import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from "../../assets/logo.svg";
import { makeStyles, createStyles } from "@mui/styles";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,

//   window: PropTypes.func,
// };

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbarMargin: {
      ...theme.mixins.toolbar,
    },
    logo: {
      height: "8em",
    },
  })
);

export default function Header(props) {
  const classes = useStyles();
  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <img alt="company logo" src={logo} className={classes.logo} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
