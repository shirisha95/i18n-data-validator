//@flow

import React, { type Node } from "react";

import classes from "./Button.css";

type Props = {
	disabled?: Boolean,
	onClick: Function,
	children: Node
};

const Button = (props: Props) => (
	<button
		disabled={props.disabled}
		className={classes.Button}
		onClick={props.onClick}
	>
		{props.children}
	</button>
);

export default Button;
