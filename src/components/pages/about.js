import React from "react";
import brandIcons from "../brandIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  makeStyles,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Grid,
  Avatar,
  Typography
} from "@material-ui/core";

import {
  LocationOnOutlined
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none"
    }
  },
  about: {
    marginTop: "100px"
  },
  mail: {
    borderBottom: `2px solid orange`,
    "&:hover": {
      transition: "ease-out .7s",
      backgroundColor: "orange"
    }
  },
  icon_link: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  intro: {
    display: "flex",
    flexDirection: "column",
    paddingTop: "10px"
  },
  intro_tag: {
    padding: "5px",
    [theme.breakpoints.up("lg")]: {
      fontSize: "2em",
      fontWeight: "300",
      boxSizing: "border-box"
    }
  },
  intro_tagline: {
    padding: "20px",
    boxSizing: "border-box",
    [theme.breakpoints.up("lg")]: {
      maxWidth: "700px",
      display: "block",
      paddingLeft: "50px",
      paddingRight: "50px"
    }
  },
  caption: {
    fontSize: "1.3rem",
    textAlign: "center",
    [theme.breakpoints.up("lg")]: {
      marginTop: "0",
      fontSize: "4rem"
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.25rem"
    }
  },
  intro_name: {
    fontSize: "1.5rem",
    textAlign: "center",
    color: theme.palette.text.primary
  },
  intro_label: {
    fontSize: "1.0rem",
    textAlign: "center",
    fontStyle: "italic"
  },
  large_avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    left: "100px",
    marginTop: "20px",
    [theme.breakpoints.up("lg")]: {
      marginTop: "20px",
      width: theme.spacing(30),
      height: theme.spacing(30)
    }
  },
  detail_list: {
    paddingRight: "30px",
    paddingLeft: "30px"
  },
  avatar: {
    order: 1
  },
  about_me: {
    order: 3
  },
  details: {
    order: 2
  }
}));

const text = `I am a software developer, who is based in
  Nigeria. Experienced in software development and method,
  I love contributing to open source project
  and community you can find my activities in here.`;

export default function About() {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6} className={styles.about_me}>
        <div className={styles.intro_tagline}>
          <List>
            <ListItem style={{paddingLeft: "0"}}>
              <ListItemIcon style={{ minWidth: "25px" }}>
                <FontAwesomeIcon icon='user-circle' size='lg' />
              </ListItemIcon>
              <Typography variant='h1'>About Me</Typography>
            </ListItem>
          </List>
          {/* <Typography variant='h1' className={styles.caption}>
            Passionate Software Developer
          </Typography> */}
          <Typography variant='body2' className={styles.intro_tag}>
            {text}
          </Typography>
        </div>
      </Grid>
      <Grid item xs className={styles.details}>
        <div className={styles.intro}>
          <Typography variant='subtitle1' className={styles.intro_name}>
            Paulsimon Edache
          </Typography>
          <Typography variant='subtitle2' className={styles.intro_label}>
            Software Developer
          </Typography>
          <List className={styles.detail_list}>
            <ListItem>
              <ListItemIcon>
                {/* <MailOutline /> */}
                <FontAwesomeIcon icon="inbox"/>
              </ListItemIcon>
              <a className={styles.mail} href='mailto:speak2donsimon@gmail.com'>
                <ListItemText secondary='speak2donsimon@gmail.com' />
              </a>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                {/* <PhoneOutlined /> */}
                <FontAwesomeIcon icon="phone"/>
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
            <ListItem style={{ paddingLeft: "20px", paddingTop: "20px" }}>
              {brandIcons.map((icon, id) => (
                <ListItemIcon key={id}>{icon}</ListItemIcon>
              ))}
            </ListItem>
          </List>
        </div>
      </Grid>
      <Grid item xs className={styles.avatar}>
        <Avatar className={styles.large_avatar} />
      </Grid>
    </React.Fragment>
  );
}
