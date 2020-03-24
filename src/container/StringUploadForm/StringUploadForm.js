//@flow

import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import Button from "../../components/UI/Button/Button";
import Input from "../Input/Input";
import Label from "../../components/UI/Label/Label";
import classes from "./StringUploadForm.css";
import { validateTString } from "../../store/actions/TStringsValidator";

type Props = {
	validateTString: Function,
	reset: boolean
};

type State = {
	tKey: string,
	translatedValue: string,
	baseValue: string,
	validate: {
		required: boolean
	}
};

const initialState: State = {
	tKey: "",
	translatedValue: "",
	baseValue: "",
	validate: {
		required: false
	}
};

class StringUploadForm extends Component<Props, State> {
	state = initialState;

	onTKeyChange = (tKey: string) => {
		this.setState({ tKey });
	};

	onTranslatedValueChange = (translatedValue: string) => {
		this.setState({ translatedValue });
	};

	onBaseValueChange = (baseValue: string) => {
		this.setState({ baseValue });
	};

	validateTString = () => {
		const { tKey, baseValue, translatedValue } = this.state;

		if (
			_.isEmpty(tKey) ||
			_.isEmpty(baseValue) ||
			_.isEmpty(translatedValue)
		) {
			const validate = { required: true };
			this.setState({ validate });
			return;
		}
		this.props.validateTString(tKey, baseValue, translatedValue);
	};

	render() {
		const { validate } = this.state;
		return (
			<div className={classes.StringUploadForm}>
				<Label value="Enter Key" />
				<Input
					id="tKey"
					type="text"
					onChange={this.onTKeyChange}
					validate={validate}
				/>
				<Label value="Enter Translated Value" />
				<Input
					id="translatedValue"
					type="text"
					onChange={this.onTranslatedValueChange}
					required
					validate={validate}
				/>
				<Label value="Enter Base Value" />
				<Input
					id="baseValue"
					type="text"
					onChange={this.onBaseValueChange}
					required
					validate={validate}
				/>
				<div className={classes.ValidateButton}>
					<Button onClick={this.validateTString}> Validate </Button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = { validateTString };

export default connect(null, mapDispatchToProps)(StringUploadForm);
