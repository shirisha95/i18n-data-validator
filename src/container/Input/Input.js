//@flow

import React, { Component } from "react";
import _ from "lodash";

import classes from "./Input.css";
import classnames from "classnames";

type Props = {
	validate: {
		required?: boolean
	},
	id: string,
	type: string,
	onChange: Function
};

type State = {
	value: string,
	touched: boolean
};

class Input extends Component<Props, State> {
	state: State = { value: "", touched: false };
	onChange = (event: SyntheticEvent<*>) => {
		const value = event.target.value;
		this.setState({ value, touched: true });
		return this.props.onChange(value);
	};

	render() {
		const { id, type, validate } = this.props;
		const { value } = this.state;
		const isError = validate.required && _.isEmpty(value);
		return (
			<input
				className={classnames(classes.Input, {
					[classes.Error]: isError
				})}
				id={id}
				type={type}
				value={value}
				onChange={this.onChange}
			/>
		);
	}
}

export default Input;
