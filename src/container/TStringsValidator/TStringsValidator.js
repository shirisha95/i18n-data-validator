//@flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import TErrorsRow from "../../components/TErrorsRow/TErrorsRow";
import Header from "../../components/UI/Header/Header";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import { validateTString } from "../../store/actions/TStringsValidator";
import StringUploadForm from "../StringUploadForm/StringUploadForm";

type Props = { response: ValidateTResponse, validateTString: Function };

class TStringsValidator extends Component<Props> {
	onTranslatedValueChange = (key, editedValue) => {
		const { validateTString, response } = this.props;
		const { baseValue } = response.toJS();
		validateTString(key, baseValue, editedValue);
	};

	render() {
		const { response } = this.props;
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
