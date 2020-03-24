import React, { Component } from "react";

import DropZone from "../DropZone/DropZone";
import Button from "../UI/Button/Button";
import classes from "./FileUploadForm.css";
import JSONParser from "../../utils/JSONParser";

class FileUploadForm extends Component {
	onBaseFileDrop = (files: Array<File>) => {
		let reader = new FileReader();
		reader.readAsText(files[0]);
		const { setBaseStringsJSON } = this.props;
		reader.onload = function() {
			var { result } = reader;
			var parserResponse = JSONParser.parseJSONData(result);
			setBaseStringsJSON(parserResponse.data);
		};
	};

	onTranslatedFileDrop = (files: Array<File>) => {
		let reader = new FileReader();
		reader.readAsText(files[0]);
		const { setTranslatedStringsJSON } = this.props;
		reader.onload = function() {
			var { result } = reader;
			var parserResponse = JSONParser.parseJSONData(result);
			setTranslatedStringsJSON(parserResponse.data);
		};
	};

	render() {
		const { validateTStrings } = this.props;
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
					<Button onClick={validateTStrings}> Validate </Button>
				</div>
			</div>
		);
	}
}

export default FileUploadForm;
