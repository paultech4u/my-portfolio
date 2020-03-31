import React from "react";
import PropTypes from "prop-types"
import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied
} from "@material-ui/icons";

import { Rating } from "@material-ui/lab"

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfied />,
    label: "Very Dissatisfied"
  },
  2: {
    icon: <SentimentDissatisfied />,
    label: "Dissatisfied"
  },
  3: {
    icon: <SentimentSatisfied />,
    label: "Neutral"
  },
  4: {
    icon: <SentimentSatisfiedAlt />,
    label: "Satisfied"
  },
  5: {
    icon: <SentimentVerySatisfied />,
    label: "Very Satisfied"
  }
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired
};

function Rate({rate}) {
  return (
    <Rating
      name='customized-icons'
      defaultValue={2}
      getLabelText={(value) => customIcons[value].label}
      IconContainerComponent={IconContainer}
      size="large"
      onChange={rate}
    />
  );
}

export default Rate;
