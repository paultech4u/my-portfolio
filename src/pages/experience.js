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

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(50),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  experience: {
    margin: theme.spacing(1),
    width: theme.spacing(42),
    height: theme.spacing(60),
    borderRadius: "20px"
  },
  footer: {
    width: 500,
    backgroundColor: theme.palette.primary.dark,
    position: "fixed",
    bottom: 0
  },
  skill_header: {
    marginTop: theme.spacing(2),
    padding: "10px 10px 20px 0",
  },
  skill: {
    color: theme.palette.text.primary
  },
  media: {
    height: 140,
    backgroundColor: "orange"
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
        src="./"
        >
        <Typography variant='h1'>FlexiSaf Edusoft Limited</Typography>
        <Typography variant='caption'>Web Developer Intren</Typography>
        <Typography variant='body1'>
          As an Intren, i worked with senior developer and teams in building
          scalable software for clients which as been deployed online, I have 
          build enough confidence working on a real project and teams. 
        </Typography>
        <Typography variant='caption' color="primary">May 2020 - Present</Typography>
      </MediaCard>
    </Grid>
  );
}

export default function Experience(props) {
  const styles = useStyles();
  return (
    <React.Fragment>
      <List>
        <ListItem>
          <ListItemIcon style={{ minWidth: "25px" }}>
            <FontAwesomeIcon icon='book' size='lg' />
          </ListItemIcon>
          <Typography variant='h1' color="textPrimary" className={styles.header}>
            EXPERIENCE
          </Typography>
        </ListItem>
      </List>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <Grid item xs={12} sm={6} className={styles.root}>
        <div className={styles.skill}>
          <Typography variant='h1' className={styles.skill_header}>
            Skills
          </Typography>
          <Paper elevation={4} style={{ marginBottom: "20px" }}>
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
        </div>
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
