//@flow

import React, { Component } from "react";
import { connect } from "react-redux";

import FileDropzone from "../../components/UI/FileDropzone/FileDropzone";
import Button from "../../components/UI/Button/Button";
import classes from "./FileUploadForm.css";
import JSONParser from "../../utils/JSONParser";
import { validateTStrings } from "../../store/actions/TFileValidator";

type Props = {
	validateTStrings: Function
};

type FileDetails = {
	name: string,
	parsedJSON: Object,
	error: string
};

const defaultFileDetails = {
	name: "",
	parsedJSON: null,
	error: ""
};

type State = {
	baseFileDetails: FileDetails,
	translatedFileDetails: FileDetails
};
const acceptedFileFormats = ".json";

class FileUploadForm extends Component<Props, State> {
	state: State = {
		baseFileDetails: defaultFileDetails,
		translatedFileDetails: defaultFileDetails
	};

	onBaseFileDrop = (files: Array<File>) => {
		this.onFileDrop("baseFileDetails", files);
	};

	onTranslatedFileDrop = (files: Array<File>) => {
		this.onFileDrop("translatedFileDetails", files);
	};

	onFileDrop = (key, files: Array<File>) => {
		let reader = new FileReader();
		const file = files[0];
		reader.readAsText(file);

		reader.onload = () => {
			const { result } = reader;
			const parserResponse = JSONParser.parseJSONData(result);
			const { data, error } = parserResponse;
			const fileDetails = { parsedJSON: data, error, name: file.name };
			this.setState({ [key]: fileDetails });
		};
	};

	validateTStrings = () => {
		const { baseFileDetails, translatedFileDetails } = this.state;
		this.props.validateTStrings(
			translatedFileDetails.parsedJSON,
			baseFileDetails.parsedJSON
		);
	};

	render() {
		const { baseFileDetails, translatedFileDetails } = this.state;
		const translatedStringsJSON = translatedFileDetails.parsedJSON;
		const baseStringsJSON = baseFileDetails.parsedJSON;
		console.log(acceptedFileFormats);
		return (
			<div className={classes.FileUploadForm}>
				<div className={classes.FilesContainer}>
					<div className={classes.FileContainer}>
						<FileDropzone
							onDrop={this.onTranslatedFileDrop}
							text="Add Translations File"
							accept={acceptedFileFormats}
							fileDetails={translatedFileDetails}
						/>
					</div>
					<div className={classes.FileContainer}>
						<FileDropzone
							onDrop={this.onBaseFileDrop}
							text="Add Base File"
							accept={acceptedFileFormats}
							fileDetails={baseFileDetails}
						/>
					</div>
				</div>
				{translatedStringsJSON && baseStringsJSON && (
					<div className={classes.ValidateButton}>
						<Button onClick={this.validateTStrings}>
							Validate
						</Button>
					</div>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = { validateTStrings };

export default connect(null, mapDispatchToProps)(FileUploadForm);
