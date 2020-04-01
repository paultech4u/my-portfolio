import React from "react";

import About from "../pages/about";
import Education from "../pages/education";
import Experience from "../pages/experience";

import Appbar from "../components/appbar";
import Rate from "../components/rating";
import { useRating } from "../components/useRating";

import {
  makeStyles,
  Divider,
  // Fab,
  Grid,
  // Zoom,
  Paper,
  Typography,
  Snackbar,
  Backdrop 
} from "@material-ui/core";
// import UpIcon from "@material-ui/icons/KeyboardArrowUp";
import MuiAlert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: "0",
      height: "100%",
      overflow: "hidden",
      width: "100%"
    }
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  },
  layout: {
    height: "100vh",
    overflow: "auto",
    // overflowX: "hidden",
    //   paddingTop: "48px",
    backgroundColor: theme.palette.background.default
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function Alert(props){
  return <MuiAlert elevation={6} variant="filled" {...props}/>
}

function AppContainer(props) {
  const { toggle, theme } = props;
  const [open, handleRating] = useRating();
  const styles = useStyles();


  function scroll(params) {
    console.log(params.target.scrollTop)
  }
 
  return (
    <>
    <Appbar theme={theme} toggle={toggle} />
    <div className={styles.layout}  onScroll={scroll}>
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
        <Paper elevation={3}>
          <Typography variant='h1'>Rate Me</Typography>
          <Rate rate={handleRating} />
        </Paper>
        <Snackbar open={open} autoHideDuration={6000}>
          <Alert>Thanks for Rating!</Alert>
        </Snackbar>
      </Backdrop>
      {/* <Zoom>
        <Fab color='primary'>
          <UpIcon />
        </Fab>
      </Zoom> */}
    </div>
    </>
  );
}

export default AppContainer;
