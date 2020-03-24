import React, { Component } from "react";

import classes from "./Input.css";

class Input extends Component {
	state = { value: null, error: "" };
	onChange = event => {
		const value = event.target.value;
		this.setState({ value, error: "" });
		return this.props.onChange(value);
	};
	render() {
		const { id, type, value, required } = this.props;
		return (
			<input
				required={required}
				className={classes.Input}
				id={id}
				type={type}
				value={value}
				onChange={this.onChange}
			/>
		);
	}
}

export default Input;
