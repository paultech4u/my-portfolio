import React from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  CardActions
} from "@material-ui/core";

function MediaCard({ children, image, src, classname, text, size, ...others }) {
  return (
    <Card {...others}>
      <CardActionArea>
        <CardMedia image={image} src={src} className={classname} />
        <CardContent>{children}</CardContent>
      </CardActionArea>
      <CardActions>
        <Button size={size}>{text}</Button>
      </CardActions>
    </Card>
  );
}

export default MediaCard;
