import React from "react";
import brandIcons from "../components/brandIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Grid,
  Avatar,
  Typography,
} from "@material-ui/core";

import { LocationOnOutlined } from "@material-ui/icons";
import paul from "../image/image.jpg";
import { introText } from "../components/dummyTexts";
import { useProfile } from "../styles/index";

function About(props) {
  const styles = useProfile();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} className={styles.about_me}>
        <div className={styles.intro_tagline} elevation={0}>
          <List>
            <ListItem style={{ paddingLeft: "0" }}>
              <Typography variant='h1' align='center'>
                Hello!
              </Typography>
            </ListItem>
          </List>
          <Typography variant='body2' className={styles.intro_tag}>
            {introText}
          </Typography>
        </div>
      </Grid>
      <Grid item xs className={styles.details}>
        <div className={styles.intro}>
          <Typography variant='subtitle1' className={styles.intro_name}>
            Paulsimon Ogwuche Edache
          </Typography>
          <Typography
            variant='subtitle2'
            align='center'
            className={styles.intro_label}>
            Software Developer
          </Typography>
          <List className={styles.detail_list}>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon='inbox' />
              </ListItemIcon>
              <a className={styles.mail} href='mailto:speak2donsimon@gmail.com'>
                <ListItemText secondary='speak2donsimon@gmail.com' />
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FontAwesomeIcon icon='phone' />
              </ListItemIcon>
              <ListItemText secondary='+234805412415' />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LocationOnOutlined />
              </ListItemIcon>
              <a href='./location'>
                <ListItemText secondary='Abuja, Nigeria' />
              </a>
            </ListItem>
            <ListItem style={{ marginTop: 16 }}>
              {brandIcons.map((icon, id) => (
                <ListItemIcon key={id}>{icon}</ListItemIcon>
              ))}
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs className={styles.avatar}>
        <Avatar src={paul} className={styles.large_avatar} />
      </Grid>
    </React.Fragment>
  );
}

export default About;
