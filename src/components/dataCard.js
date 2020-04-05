import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  CardActions
} from "@material-ui/core";

function MediaCard({ children, image, src, classes, text, size,link, ...others }) {
  return (
    <Card {...others} elevation={10}>
      <CardActionArea>
        <CardMedia image={image} src={src} className={classes} />
        <CardContent>{children}</CardContent>
      </CardActionArea>
      <CardActions>
        <Button size={size} href={link}>{text}</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
