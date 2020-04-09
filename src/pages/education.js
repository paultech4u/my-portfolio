import React from "react";
import MediaCard from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemIcon,
} from "@material-ui/core";

import { useEducation } from "../styles/index";

const SchoolCard = () => {
  const styles = useEducation();
  return (
    <Grid item sm={12}>
      <MediaCard
        elevation={3}
        component='div'
        className={styles.root}
        classes={styles.media}
        text='visit'
        link='http://buk.edu.ng/'
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

export default function Education(props) {
  const styles = useEducation();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <List className={styles.header}>
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
