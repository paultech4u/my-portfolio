import React from "react";
import MediaCard from "../components/dataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: theme.spacing(35),
    height: theme.spacing(35),
    borderRadius: "20px",
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(1),
      width: theme.spacing(42),
      height: theme.spacing(40),
      borderRadius: "20px",
    },
  },
  header: {
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: theme.spacing(4),
  },
  edu_list: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    width: "100%",
    msOverflowStyle: "none",
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up("lg")]: {
      display: "flex",
      flexDirection: "row",
      overflowX: "scroll",
      width: "100%",
      msOverflowStyle: "none",
      paddingBottom: theme.spacing(10),
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  sch_name: {
    paddingBottom: "20px",
  },
  date: {
    color: "orange",
  },
  media: {
    height: 100,
    backgroundColor: "orange",
    [theme.breakpoints.up("lg")]: {
      height: 140,
    },
  },
}));

const SchoolCard = () => {
  const styles = useStyles();
  return (
    <Grid item sm={12}>
      <MediaCard
        elevation={3}
        component='div'
        className={styles.root}
        classes={styles.media}
        text='visit'
        src='./'>
        <Typography variant='h2'>BAYERO UNIVERSITY KANO, NIGERIA</Typography>
        <Typography variant='caption' className={styles.sch_name}>
          BACHELOR OF SCIENCE
        </Typography>
        <Typography variant='subtitle2'>Information Technology</Typography>
        <div className={styles.date}>
          <Typography variant='caption'>December 2017 - Present</Typography>
        </div>
      </MediaCard>
    </Grid>
  );
};

export default function Education({id}) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <List>
          <ListItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <FontAwesomeIcon icon='book' size='lg' />
            </ListItemIcon>
            <Typography variant='h1' color='textPrimary'>
              EDUCATION
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <div className={styles.edu_list}>
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
        <SchoolCard />
      </div>
    </React.Fragment>
  );
}
