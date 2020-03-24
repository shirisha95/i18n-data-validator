//@flow
import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import StringUploadForm from "../../components/StringUploadForm/StringUploadForm";
import TErrors from "../../components/TErrorsRow/TErrorsRow";
import Header from "../../components/UI/Header/Header";

type Props = { response: ValidateTResponse };

const TStringsValidator = (props: Props) => {
	const { response } = props;
	//ToDo: Add NoErrors Div
	return (
		<div>
			<Header title="Translations Validator" />
			<br />
			<StringUploadForm />
			<br />
			{response ? <TErrors response={response} /> : ""}
		</div>
	);
};

const getResponse = state => state.tStringReducer.response;
const responseSelector = createSelector(getResponse, response => response);

const mapStateToProps = state => {
	console.log(state);
	return { response: responseSelector(state) };
};

export default connect(mapStateToProps, null)(TStringsValidator);
