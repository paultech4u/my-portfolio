import React, { useState } from "react";
import NavBar from "./components/navbar";
import About from "./components/pages/about";
import Education from "./components/pages/education";
import Experience from "./components/pages/experience";

import "./App.css";

import { makeStyles, Divider, Fab, Grid, Zoom } from "@material-ui/core";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { AppThemeProvider } from "./theme";

// =============================================================================
// FontAwesomeIcons library
// =============================================================================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faBook,
  faPhone,
  faInbox
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, fas, faUserCircle, faBook, faPhone, faInbox);

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: "50px 0 0 0",
      overflow: "hidden",
      width: "100%"
    }
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  app: {
    height: "100vh",
    overflow: "auto",
    paddingTop: "48px !important",
    backgroundColor: theme.palette.background.default
  }
}));

function App(props) {
  const [state, setState] = useState({
    change: false,
    dark: "light",
    light: "dark"
  });
  const toggle = () => {
    if (state.change === false) {
      setState({
        change: true,
        light: "dark"
      });
    } else {
      setState({
        change: false,
        dark: "light"
      });
    }
  };
  const mode = state.change === false ? state.dark : state.light;
  return (
    <AppThemeProvider mode={mode}>
      <AppContainer toggle={toggle} />
    </AppThemeProvider>
  );
}

function AppContainer(props) {
  const { toggle } = props;
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <NavBar toggle={toggle} />
      <Grid container>
        <About />
      </Grid>
      <Divider />
      <Grid container>
        <Education />
      </Grid>
      <Divider />
      <Grid container>
        <Experience />
      </Grid>
      <Zoom>
        <Fab color='primary'>
          <UpIcon />
        </Fab>
      </Zoom>
    </div>
  );
}

export default App;
