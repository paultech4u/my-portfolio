import React from "react";
import MediaCard from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  makeStyles,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";
// import buk from "../../image/buk.png";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: theme.spacing(42),
    height: theme.spacing(40),
    borderRadius: "20px"
  },
  header: {
    marginTop: "10px",
    marginBottom: "10px",
    color: theme.palette.text.primary
  },
  edu_details: {
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: "30px 10px 10px 10px"
  },
  sch_name: {
    paddingBottom: "20px"
  },
  date: {
    color: "orange"
  },
  media: {
    height: 140,
    backgroundColor: "orange"
  }
}));

const SchoolCard = () => {
  const styles = useStyles();
  return (
    <Grid item sm={12} style={{paddingLeft: "5px"}}>
      <MediaCard
        elevation={4}
        component='div'
        className={styles.root}
        classname={styles.media}
        text="visit"
        >
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

export default function Education(props) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemIcon style={{ minWidth: "25px" }}>
            <FontAwesomeIcon icon='book' size='lg' />
          </ListItemIcon>
          <Typography variant='h1' className={styles.header}>
            EDUCATION
          </Typography>
        </ListItem>
      </List>
      <SchoolCard />
      <SchoolCard />
      <SchoolCard />
      <SchoolCard />
    </React.Fragment>
  );
}
