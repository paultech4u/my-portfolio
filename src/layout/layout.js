import React from "react";
import { Grid, Paper, Typography, Backdrop } from "@material-ui/core";
import Profile from "../pages/profile";
import Education from "../pages/education";
import Experience from "../pages/experience";
import Rate from "../components/rating";
import ModeSwitch from "../components/themeSwitch";
import { useRating } from "../components/hooks/useRating";
import { useLayout } from "../styles/index";


function AppContainer(props) {
  const { toggle, theme } = props;
  const [open, handleRating] = useRating();

  const styles = useLayout();

  return (
    <React.Fragment>
      <div className={styles.layout}>
        <div className={styles.switch_wrapper}>
          <ModeSwitch theme={theme} toggleTheme={toggle} />
        </div>
        <Grid container>
          <Profile id='profile' />
        </Grid>
        <Grid container>
          <Education id='education' />
        </Grid>
        <Grid container>
          <Experience id='experience' />
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
