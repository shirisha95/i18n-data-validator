import React from "react";

import classes from "./Button.css";

const Button = props => (
	<button
		disabled={props.disabled}
		className={classes.Button}
		onClick={props.onClick}
	>
		{props.children}
	</button>
);

export default Button;
