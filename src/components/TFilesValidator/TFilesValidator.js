//@flow

import React from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { List } from "immutable";

import FileUploadForm from "../../container/FileUploadForm/FileUploadForm";
import Header from "../UI/Header/Header";
import TErrorsTable from "../TErrorsTable/TErrorsTable";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";

type Props = { responses: List<ValidateTResponse> };

const TFilesValidator = (props: Props) => {
	const { responses } = props;
	return (
		<div>
			<Header title="Translations Validator" />
			<br />
			<FileUploadForm />
			<br />
			{responses && <TErrorsTable responses={responses} />}
		</div>
	);
};

const getResponse = state => state.tFileReducer.responses;
const responseSelector = createSelector(getResponse, response => response);

const mapStateToProps = state => {
	return { responses: responseSelector(state) };
};

export default connect(mapStateToProps, null)(TFilesValidator);
