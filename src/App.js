import React, { useState } from "react";
import NavBar from "./components/navbar";
import About from "./components/pages/about";
import Education from "./components/pages/education";
import Experience from "./components/pages/experience";

import "./App.css";

import { makeStyles, Container, Divider, Fab } from "@material-ui/core";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import { green } from "@material-ui/core/colors";

// =============================================================================
// FontAwesomeIcons
// =============================================================================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      overflow: "hidden",
      background: "#eff3f6",
      color: "black",
      height: "100vh",
      margin: '0%'
    }
  },
  dark: {
    background: "#242433",
    color: "white"
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  fabIcon: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600]
    }
  },
  test: {
    height: "100vh",
    overflow: "auto"
  }
}));

function App(props) {
  const styles = useStyles();
  const [state, setState] = useState(false);
  const [scrollButton, setScrollbutton] = useState({
    display: "block",
    isvisible: false
  });
  const body = document.querySelector("body");
  const classes =
    state === false
      ? body.classList.remove(`${styles.dark}`)
      : body.classList.add(`${styles.dark}`);
  const toggle = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };

  function onScroll(params) {
    console.log(params.target.scrollTop);
  }

  return (
    <div className={styles.test} onScroll={onScroll}>
      <NavBar dark={classes} toggle={toggle} />
      <About />
      <Divider />
      <Education />
      <Divider />
      <Experience />
      <Fab className={styles.fab}>
        <UpIcon />
      </Fab>
    </div>
  );
}

export default App;
