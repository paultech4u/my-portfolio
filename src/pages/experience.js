import React from "react";
import MediaCard from "../components/dataCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  makeStyles,
  ListItem,
  List,
  ListItemIcon,
  Grid,
  Typography,
  BottomNavigation,
  BottomNavigationAction,
  Paper
} from "@material-ui/core";
import buk from "../image/flexi.jpg";

const useStyles = makeStyles((theme) => ({
  experience: {
    margin: theme.spacing(1),
    width: theme.spacing(42),
    height: theme.spacing(62),
    borderRadius: "20px"
  },
  exp_list: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    width: '100%',
    msOverflowStyle: "none",
    paddingBottom: theme.spacing(5),
    "&::-webkit-scrollbar": {
      display: "none"
    }
  },
  footer: {
    width: "100%",
    backgroundColor: theme.palette.primary.dark,
    position: "relative",
    bottom: 105,
    [theme.breakpoints.up("lg")]: {
      bottom: 50,
    }
  },
  skill_header: {
    marginTop: theme.spacing(2),
    padding: "10px 10px 20px 0"
  },
  skills: {
    height: theme.spacing(40),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary
  },
  workflow: {
    height: theme.spacing(40),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    color: theme.palette.text.primary
  },
  media: {
    height: 160
  }
}));

const programming = [
  { name: "html5", color: "red" },
  { name: "js", color: "yellow" },
  { name: "css3", color: "blue" },
  { name: "react", color: "darkblue" },
  { name: "python", color: "lightblue" }
];

const tools = [
  { name: "git-alt", color: "red" },
  { name: "github", color: "black" },
  { name: "npm", color: "red" },
  { name: "yarn", color: "lightblue" },
  { name: "bootstrap", color: "blue" }
];

function ExperienceCard() {
  const styles = useStyles();
  return (
    <Grid item xs={12} sm={6} style={{ paddingLeft: "5px" }}>
      <MediaCard
        className={styles.experience}
        classes={styles.media}
        text='Preview'
        size='small'
        image={buk}>
        <Typography variant='h1'>FlexiSAF Edusoft Limited</Typography>
        <Typography variant='caption'>Web Developer Intren</Typography>
        <Typography variant='body1'>
          As an Intren, i worked with senior developer and teams in building
          scalable software for clients which as been deployed online, I have
          build enough confidence working on a real project and teams.
        </Typography>
        <Typography variant='caption' color='primary'>
          May 2020 - Present
        </Typography>
      </MediaCard>
    </Grid>
  );
}

export default function Experience({id}) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <List>
          <ListItem>
            <ListItemIcon style={{ minWidth: "25px" }}>
              <FontAwesomeIcon icon='book-reader' size='lg' />
            </ListItemIcon>
            <Typography
              variant='h1'
              color='textPrimary'>
              EXPERIENCE
            </Typography>
          </ListItem>
        </List>
      </Grid>
      <div className={styles.exp_list}>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
      <Grid item xs={12} sm={6} className={styles.skills}>
        <Typography variant='h1' className={styles.skill_header}>
          Skills
        </Typography>
        <Paper style={{ marginBottom: "20px" }}>
          <List>
            <ListItem>
              {programming.map(({ name, color }) => (
                <ListItemIcon key={`${name}${color}`}>
                  <FontAwesomeIcon
                    size='3x'
                    color={color}
                    icon={{ prefix: "fab", iconName: name }}
                  />
                </ListItemIcon>
              ))}
            </ListItem>
          </List>
        </Paper>
        <Paper elevation={4} style={{ marginBottom: "20px" }}>
          <List>
            <ListItem>
              {tools.map(({ name, color }) => (
                <ListItemIcon key={`${name}${color}`}>
                  <FontAwesomeIcon
                    size='3x'
                    color={color}
                    icon={{ prefix: "fab", iconName: name }}
                  />
                </ListItemIcon>
              ))}
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.workflow}>
        <Typography variant='h1' className={styles.skill_header}>
          Workflow
        </Typography>
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
