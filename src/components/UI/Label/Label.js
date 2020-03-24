import React from "react";

import classes from "./Label.css";

const Label = props => <label className={classes.Label}>{props.value}</label>;

export default Label;
