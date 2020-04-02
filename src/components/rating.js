import React from "react";

import { Rating } from "@material-ui/lab"


function Rate({rate}) {
  return (
    <Rating
      name='customized-icons'
      size="large"
      onChange={rate}
      style={{left: "60px", top: "40px"}}
    />
  );
}

export default Rate;
