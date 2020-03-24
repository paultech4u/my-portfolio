import React, { useState } from "react";
import { makeStyles, Container, Divider } from "@material-ui/core";
import NavBar from "./components/navbar";
import About from "./components/pages/about";
import Education from "./components/pages/about";
import Experience from "./components/pages/about";

import "./App.css";

// =============================================================================
// FontAwesomeIcons
// =============================================================================
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const useStyles = makeStyles(() => ({
  dark: {
    background: "#242433",
    color: "white"
  }
}));

function App(props) {
  const [state, setState] = useState(false);
  const style = useStyles();
  const body = document.querySelector("body");
  // const d = new Date();
  // const hour = d.getHours();
  // const night = hour >= 19 || hour <= 7;
  const classes =
    state === false
      ? body.classList.remove(`${style.dark}`)
      : body.classList.add(`${style.dark}`);
  const toggle = () => {
    if (state === false) {
      setState(true);
    } else {
      setState(false);
    }
  };
  // const Layout = {
  //   maxWidth: "100%",
  //   maxHeight: "100vh",
  //   Height: "100%"
  // };
  return (
    <Container maxWidth={"lg"} className='App'>
      <NavBar dark={classes} toggle={toggle} />
      <About />
      <Divider/>
      <Education />
      <Divider/>
      <Experience />
    </Container>
  );
}

export default App;
