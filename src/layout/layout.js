import React from "react";

import Profile from "../pages/profile";
import Education from "../pages/education";
import Experience from "../pages/experience";

// import Appbar from "../components/appbar";
import ModeSwitch from "../components/themeSwitch"
import Rate from "../components/rating";
import { useRating } from "../components/useRating";

import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  Backdrop
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      margin: "0",
      height: "100%",
      overflow: "hidden",
      width: "100%"
    }
  },
  switch_wrapper: {
    display: "flex",
    alignItems: "flex-end",
    paddingRight: "10px",
    paddingTop: theme.spacing(2),
    justifyContent: "flex-end"
  },
  layout: {
    height: "100vh",
    overflowY: "auto",
    overflowX: "hidden",
    backgroundColor: theme.palette.background.default
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  },
  rating: {
    width: theme.spacing(34),
    height: theme.spacing(20)
  }
}));

function AppContainer(props) {
  const { toggle, theme } = props;
  const [open, handleRating] = useRating();

  const styles = useStyles();

  return (
    <React.Fragment>
      {/* <Appbar theme={theme} toggle={toggle} /> */}
      <div className={styles.layout}>
      <div className={styles.switch_wrapper}>
        <ModeSwitch theme={theme} toggleTheme={toggle} />
      </div>
        <Grid container>
          <Profile id="profile"/>
        </Grid>
        <Grid container>
          <Education id="education"/>
        </Grid>
        <Grid container>
          <Experience id="experience"/>
        </Grid>
        <Backdrop className={styles.backdrop} open={open.openRate}>
          <Paper elevation={3} className={styles.rating}>
            <Typography
              variant='h1'
              align='center'
              style={{ marginTop: "20px" }}>
              Rate Me
            </Typography>
            <Rate rate={handleRating} />
          </Paper>
        </Backdrop>
      </div>
    </React.Fragment>
  );
}

export default AppContainer;
