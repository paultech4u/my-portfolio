import React, {useState, useEffect} from "react"

import About from "../pages/about";
import Education from "../pages/education";
import Experience from "../pages/experience";

import NavBar from "../components/navbar";
import Rate from "../components/rating";

import { makeStyles, Divider, Fab, Grid, Zoom } from "@material-ui/core";
import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import Backdrop from '@material-ui/core/Backdrop';


const useStyles = makeStyles((theme) => ({
    "@global": {
      body: {
        margin: "0",
        overflow: "hidden",
        width: "100%",
      }
    },
    fab: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2)
    },
    layout: {
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden",
    //   paddingTop: "48px",
      backgroundColor: theme.palette.background.default
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));
  

function AppContainer(props) {
    const { toggle, theme } = props;
    const styles = useStyles();
    const [ open, setOpen ] = useState(false)
   
    useEffect(() => {
     const timeout = setTimeout(() => {
        setOpen(o => !o);
      }, 10000)
      return () => {
        clearTimeout(timeout)
      }

    }, [])
    return (
      <div className={styles.layout}>
        <NavBar theme={theme} toggle={toggle} />
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
        <Backdrop className={styles.backdrop} open={open}>
            <Rate rate={() => setTimeout(() => {
               setOpen(!open)
            }, 2000)}/>
        </Backdrop>
        <Zoom>
          <Fab color='primary'>
            <UpIcon />
          </Fab>
        </Zoom>
      </div>
    );
  }


  export default AppContainer;