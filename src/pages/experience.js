import React from "react";
import MediaCard from "../components/card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
import { useExperience } from "../styles/index";
import { intrenText } from "../components/dummyTexts"



const tools = ["Webpack", "NPM", "yarn", "Git", "Firebase"];
const frameworks = ["React", "Material-UI", "Booststrap", "Django", "NodeJS"];
const languages = ["JavaScript(ES6)", "HTML5/CSS", "Python"];


const Tools = ({ tools, label, color, variant, ...others }) => {
  return (
    <ListItem
      style={{ flexDirection: "column", alignItems: "flex-start" }}
      {...others}>
      <Typography variant={variant} color={color}>
        {label}
      </Typography>
      {tools.map((text, id) => (
        <ListItemText key={id} primary={text} style={{ flex: "0 0 0" }} />
      ))}
    </ListItem>
  );
};

const ExperienceCard = () =>  {
  const styles = useExperience();
  return (
    <MediaCard
      className={styles.root}
      classes={styles.media}
      text='Preview'
      link='http://flexisaf.com/'
      size='small'
      image={flexi}>
      <Typography variant='h1'>FlexiSAF Edusoft Limited</Typography>
      <Typography variant='caption'>Software Developer / Intren</Typography>
      <Typography variant='body1'>{intrenText}</Typography>
      <Typography variant='caption' color='primary'>
        May 2020 - Present
      </Typography>
    </MediaCard>
  );
}

export default function Experience(props) {
  const styles = useExperience();
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
      <Grid item xs={12}>
        <div className={styles.exp_list}>
          <ExperienceCard />
        </div>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant='h1' className={styles.skill_header}>
          Tools & Technologies
        </Typography>
        <List className={styles.skills}>
          <Tools tools={languages} label='LANGUAGES' variant='h2' />
          <Tools tools={frameworks} label='FRAMEWORKS' variant='h2' />
          <Tools tools={tools} label='TOOLS' variant='h2' />
        </List>
      </Grid>
      <Grid item xs={12} sm={6} className={styles.workflow}>
        <Typography variant='h1' className={styles.skill_header}>
          Award
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FontAwesomeIcon icon='trophy' />
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
