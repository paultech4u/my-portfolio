import React from "react";
import MediaCard from "../components/dataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  makeStyles,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import flexi from "../image/flexi.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    width: theme.spacing(42),
    height: theme.spacing(62),
    borderRadius: "20px",
  },
  exp_list: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    width: "100%",
    msOverflowStyle: "none",
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(3),
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
  header: {
    marginTop: "10px",
    marginBottom: "10px",
    paddingLeft: theme.spacing(2),
  },
  skill_header: {
    marginTop: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  skills: {
    color: theme.palette.text.primary,
    display: "flex",
    height: theme.spacing(30),
    maxWidth: theme.spacing(15),
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.spacing(50),
    },
  },
  workflow: {
    height: theme.spacing(40),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary,
  },
  media: {
    height: 160,
  },
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    position: "relative",
    bottom: 0,
    [theme.breakpoints.up("lg")]: {
      bottom: 0,
    },
  },
}));

const tools = ["Webpack", "NPM", "yarn", "Git", "Firebase"];
const frameworks = ["React", "Material-UI", "Booststrap", "Django", "NodeJS"];
const languages = ["JavaScript(ES6)", "HTML5/CSS", "Python"];

const text = `As an Intren, i worked with senior developer and teams in building
scalable software for clients which as been deployed online, I have
build enough confidence working on a real project and teams.`;

function ExperienceCard() {
  const styles = useStyles();
  return (
    <Grid item xs={12}>
      <MediaCard
        className={styles.root}
        classes={styles.media}
        text='Preview'
        link='http://flexisaf.com/'
        size='small'
        image={flexi}>
        <Typography variant='h1'>FlexiSAF Edusoft Limited</Typography>
        <Typography variant='caption'>Software Developer / Intren</Typography>
        <Typography variant='body1'>{text}</Typography>
        <Typography variant='caption' color='primary'>
          May 2020 - Present
        </Typography>
      </MediaCard>
    </Grid>
  );
}

export default function Experience({ id }) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <List className={styles.header}>
          <ListItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <FontAwesomeIcon icon='book-reader' size='lg' />
            </ListItemIcon>
            <Typography variant='h1' color='textPrimary'>
              EXPERIENCE
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <div className={styles.exp_list}>
        <ExperienceCard />
      </div>
      <Grid item xs={12} sm={6}>
        <Typography variant='h1' className={styles.skill_header}>
          Tools & Technologies
        </Typography>
        <List className={styles.skills}>
          <ListItem
            style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant='h2'>LANGUAGES</Typography>
            {languages.map((text, id) => (
              <ListItemText key={id} primary={text} style={{ flex: "0 0 0" }} />
            ))}
          </ListItem>
          <ListItem
            style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant='h2'>FRAMEWORKS</Typography>
            {frameworks.map((text, id) => (
              <ListItemText key={id} primary={text} style={{ flex: "0 0 0" }} />
            ))}
          </ListItem>
          <ListItem
            style={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography variant='h2'>TOOLS</Typography>
            {tools.map((text, id) => (
              <ListItemText key={id} primary={text} style={{ flex: "0 0 0" }} />
            ))}
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.workflow}>
        <Typography variant='h1' className={styles.skill_header}>
          Award
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon="trophy"/>
            </ListItemIcon>
            <Typography variant='subtitle1'>
              Cisco Networking Academy certificate/Introduction to Cybersecurity
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12}>
        <BottomNavigation className={styles.footer}>
          <BottomNavigationAction
            icon={<FontAwesomeIcon size='lg' icon={["fab", "instagram"]} />}
          />
          <BottomNavigationAction
            icon={<FontAwesomeIcon size='lg' icon={["fab", "facebook"]} />}
          />
          <BottomNavigationAction
            icon={<FontAwesomeIcon size='lg' icon={["fab", "twitter"]} />}
          />
          <BottomNavigationAction
            icon={<FontAwesomeIcon size='lg' icon={["fab", "linkedin"]} />}
          />
        </BottomNavigation>
      </Grid>
    </React.Fragment>
  );
}
