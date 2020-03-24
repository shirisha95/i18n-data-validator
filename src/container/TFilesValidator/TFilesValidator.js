import React, { Component } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import FileUploadForm from "../../components/FileUploadForm/FileUploadForm";
import Header from "../../components/UI/Header/Header";
import { validateTStrings } from "../../store/actions/TFileValidator";
import TErrorsTable from "../TErrorsTable/TErrrorsTable";

class TFilesValidator extends Component {
	state = {
		baseStringsJSON: null,
		translatedStringsJSON: null
	};

	setBaseStringsJSON = (baseStringsJSON: Object) => {
		this.setState({ baseStringsJSON });
	};

	setTranslatedStringsJSON = (translatedStringsJSON: Object) => {
		this.setState({ translatedStringsJSON });
	};

	validateTStrings = () => {
		const { translatedStringsJSON, baseStringsJSON } = this.state;
		this.props.validateTStrings(translatedStringsJSON, baseStringsJSON);
	};

	render() {
		const { errors } = this.props;
		return (
			<div>
				<Header title="Translations Validator" />
				<br />
				<FileUploadForm
					setTranslatedStringsJSON={this.setTranslatedStringsJSON}
					setBaseStringsJSON={this.setBaseStringsJSON}
					validateTStrings={this.validateTStrings}
				/>
				<br />
				{errors && <TErrorsTable errors={errors} />}
			</div>
		);
	}
}
const getErrors = state => state.tFileReducer.tErrors;
const errorsSelector = createSelector(getErrors, errors => errors);

const mapStateToProps = state => {
	return {
		errors: errorsSelector(state)
	};
};

const mapDispatchToProps = { validateTStrings };

export default connect(mapStateToProps, mapDispatchToProps)(TFilesValidator);
