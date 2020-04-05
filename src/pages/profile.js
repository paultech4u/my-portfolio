import React from "react";
import brandIcons from "../components/brandIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  makeStyles,
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

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  mail: {
    borderBottom: `2px solid orange`,
    "&:hover": {
      transition: "ease-out .2s",
      backgroundColor: "orange",
    },
  },
  icon_link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "20px",
  },
  intro_tag: {
    padding: "5px",
    fontSize: "1.2rem",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2em",
      fontWeight: "300",
      boxSizing: "border-box",
    },
  },
  intro_tagline: {
    padding: "20px",
    boxSizing: "border-box",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "700px",
      display: "block",
      paddingLeft: "50px",
      paddingRight: "50px",
    },
  },
  caption: {
    fontSize: "1.3rem",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      marginTop: "0",
      fontSize: "4rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.25rem",
    },
  },
  intro_name: {
    fontSize: "1.5rem",
    textAlign: "center",
    color: theme.palette.text.primary,
  },
  intro_label: {
    fontSize: "1.0rem",
    fontStyle: "italic",
    color: theme.palette.text.primary,
  },
  large_avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    position: "relative",
    left: "100px",
    top: "50px",
    [theme.breakpoints.up("lg")]: {
      marginTop: "20px",
      left: "0",
      width: theme.spacing(30),
      height: theme.spacing(30),
    },
  },
  detail_list: {
    paddingRight: "30px",
  },
  avatar: {
    order: 2,
    [theme.breakpoints.up("lg")]: {
      order: 3,
    },
  },
  about_me: {
    order: 1,
    color: theme.palette.text.primary,
  },
  details: {
    order: 3,
    marginTop: "40px",
  },
}));

const text = `I am a software developer, who has solid 
  understanding in software development and love to build stuff,
  I love contributing to open source project
  and to make impacts.`;

export default function About({ id }) {
  const styles = useStyles();
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
            {text}
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
