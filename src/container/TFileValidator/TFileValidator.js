//@flow

import { List } from "immutable";
import React, { Component } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import TErrorsTable from "../../components/TErrorsTable/TErrorsTable";
import Header from "../../components/UI/Header/Header";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import { updateMarkers } from "../../store/actions/TFileValidator";
import FileUploadForm from "../FileUploadForm/FileUploadForm";
import classes from "./TFileValidator.css";

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
				{responses &&
					(responses.size !== 0 ? (
						<TErrorsTable
							responses={responses}
							onTranslatedValueChange={updateMarkers}
						/>
					) : (
						<div className={classes.NoErrorsDiv}>
							No Errors Present{" "}
						</div>
					))}
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
