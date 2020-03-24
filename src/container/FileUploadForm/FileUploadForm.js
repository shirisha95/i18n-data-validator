//@flow

import React, { Component } from "react";
import { connect } from "react-redux";

import DropZone from "../DropZone/DropZone";
import Button from "../../components/UI/Button/Button";
import classes from "./FileUploadForm.css";
import JSONParser from "../../utils/JSONParser";
import { validateTStrings } from "../../store/actions/TFileValidator";

type Props = {
	validateTStrings: Function
};

type State = {
	baseStringsJSON: Object,
	translatedStringsJSON: Object
};

class FileUploadForm extends Component<Props, State> {
	state: State = {
		baseStringsJSON: null,
		translatedStringsJSON: null
	};

	validateTStrings = () => {
		const { translatedStringsJSON, baseStringsJSON } = this.state;
		this.props.validateTStrings(translatedStringsJSON, baseStringsJSON);
	};

	onBaseFileDrop = (files: Array<File>) => {
		let reader = new FileReader();
		reader.readAsText(files[0]);
		reader.onload = () => {
			var { result } = reader;
			var parserResponse = JSONParser.parseJSONData(result);
			this.setState({ baseStringsJSON: parserResponse.data });
		};
	};

	onTranslatedFileDrop = (files: Array<File>) => {
		let reader = new FileReader();
		reader.readAsText(files[0]);
		reader.onload = () => {
			var { result } = reader;
			var parserResponse = JSONParser.parseJSONData(result);
			this.setState({ translatedStringsJSON: parserResponse.data });
		};
	};

	render() {
		return (
			<div className={classes.FileUploadForm}>
				<div className={classes.FilesContainer}>
					<div className={classes.FileContainer}>
						<DropZone
							onDrop={this.onTranslatedFileDrop}
							multiple={false}
							text="Add Translations File"
							accept=".json"
						/>
					</div>
					<div className={classes.FileContainer}>
						<DropZone
							onDrop={this.onBaseFileDrop}
							multiple={false}
							text="Add Base File"
							accept=".json"
						/>
					</div>
				</div>
				<div className={classes.ValidateButton}>
					<Button onClick={this.validateTStrings}> Validate </Button>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = { validateTStrings };

export default connect(null, mapDispatchToProps)(FileUploadForm);
