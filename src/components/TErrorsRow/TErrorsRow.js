//@flow

import React, { Component } from "react";
import { connect } from "react-redux";

import Editor from "../../container/Editor/Editor";
import classes from "./TErrorsRow.css";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import { validateTString } from "../../store/actions/TStringsValidator";

type Props = {
	response: ValidateTResponse,
	validateTString: Function
};

class TErrorsRow extends Component<Props> {
	onTranslatedValueChange = editedValue => {
		const { validateTString, response } = this.props;
		const { baseValue, key } = response.toJS();
		validateTString(key, baseValue, editedValue);
	};

	render() {
		const response = this.props.response.toJS();
		const { baseValue, key, translatedValue, markers } = response;
		return (
			<div className={classes.TErrorsRow}>
				{key && <div className={classes.Key}>{key}</div>}
				<div className={classes.TErrorsEditor}>
					<Editor
						value={translatedValue}
						markers={markers}
						onValueChange={this.onTranslatedValueChange}
					/>
					<Editor value={baseValue} readOnly />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = { validateTString };

export default connect(null, mapDispatchToProps)(TErrorsRow);
