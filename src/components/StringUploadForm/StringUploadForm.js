import React from "react";

import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Label from "../UI/Label/Label";
import classes from "./StringUploadForm.css";

const StringUploadForm = props => {
	const {
		onBaseValueChange,
		validateTString,
		onTranslatedValueChange
	} = props;
	return (
		<div className={classes.StringUploadForm}>
			<Label value="Enter Translated Value" />
			<Input
				className={classes.TranslatedValue}
				id="translatedValue"
				type="text"
				onChange={onTranslatedValueChange}
				required
			/>
			<Label value="Enter Base Value" />
			<Input
				className={classes.BaseValue}
				id="baseValue"
				type="text"
				onChange={onBaseValueChange}
				required
			/>
			<div className={classes.ValidateButton}>
				<Button onClick={validateTString}> Validate </Button>
			</div>
		</div>
	);
};

export default StringUploadForm;
