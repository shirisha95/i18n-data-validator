//@flow

import React, { Component } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";
import { List } from "immutable";

import FileUploadForm from "../../container/FileUploadForm/FileUploadForm";
import Header from "../UI/Header/Header";
import TErrorsTable from "../TErrorsTable/TErrorsTable";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import { updateMarkers } from "../../store/actions/TFileValidator";

type Props = { responses: List<ValidateTResponse>, updateMarkers: Function };

class TFileValidator extends Component<Props> {
	render() {
		const { responses, updateMarkers } = this.props;
		return (
			<div>
				<Header title="Translations Validator" />
				<br />
				<FileUploadForm />
				<br />
				{responses && (
					<TErrorsTable
						responses={responses}
						onTranslatedValueChange={updateMarkers}
					/>
				)}
			</div>
		);
	}
}

const getResponse = state => state.tFileReducer.responses;
const responseSelector = createSelector(getResponse, response => response);

const mapStateToProps = state => {
	return { responses: responseSelector(state) };
};

const mapDispatchToProps = { updateMarkers };

export default connect(mapStateToProps, mapDispatchToProps)(TFileValidator);
