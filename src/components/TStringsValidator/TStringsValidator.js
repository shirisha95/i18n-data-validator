//@flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import StringUploadForm from "../../container/StringUploadForm/StringUploadForm";
import TErrorsRow from "../TErrorsRow/TErrorsRow";
import Header from "../UI/Header/Header";
import { validateTString } from "../../store/actions/TStringsValidator";

type Props = { response: ValidateTResponse, validateTString: Function };

class TStringsValidator extends Component<Props> {
	onTranslatedValueChange = (key, editedValue) => {
		const { validateTString, response } = this.props;
		const { baseValue } = response.toJS();
		validateTString(key, baseValue, editedValue);
	};

	render() {
		const { response } = this.props;
		//ToDo: Add NoErrors Div
		return (
			<div>
				<Header title="Translations Validator" />
				<br />
				<StringUploadForm />
				<br />
				{response ? (
					<TErrorsRow
						response={response}
						onTranslatedValueChange={this.onTranslatedValueChange}
					/>
				) : (
					""
				)}
			</div>
		);
	}
}

const getResponse = state => state.tStringReducer.response;
const responseSelector = createSelector(getResponse, response => response);

const mapStateToProps = state => {
	return { response: responseSelector(state) };
};

const mapDispatchToProps = { validateTString };

export default connect(mapStateToProps, mapDispatchToProps)(TStringsValidator);
