import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label";
import classes from "./StringUploadForm.css";
import { validateTString } from "../../store/actions/TStringsValidator";

type Props = {
	validateTString: Function
};

type State = {
	tKey: string,
	translatedValue: string,
	baseValue: string
};

class StringUploadForm extends Component<Props, State> {
	state: State = {
		tKey: "",
		translatedValue: "",
		baseValue: ""
	};

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
		this.props.validateTString(tKey, baseValue, translatedValue);
	};

	render() {
		return (
			<div className={classes.StringUploadForm}>
				<Label value="Enter Key" />
				<Input
					id="tKey"
					type="text"
					onChange={this.onTKeyChange}
					required
				/>
				<Label value="Enter Translated Value" />
				<Input
					id="translatedValue"
					type="text"
					onChange={this.onTranslatedValueChange}
					required
				/>
				<Label value="Enter Base Value" />
				<Input
					id="baseValue"
					type="text"
					onChange={this.onBaseValueChange}
					required
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
