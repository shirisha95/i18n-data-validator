import React from "react";

import Editor from "../../container/Editor/Editor";
import classes from "./TErrorsRow.css";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";

type Props = {
	response: ValidateTResponse
};
const TErrors = (props: Props) => {
	const response = props.response.toJS();
	const { baseValue, key, translatedValue, markers } = response;
	return (
		<div className={classes.TErrorsRow}>
			{key && <div className={classes.Key}>{key}</div>}
			<div className={classes.TErrorsEditor}>
				<Editor value={translatedValue} markers={markers} />
				<Editor value={baseValue} readOnly />
			</div>
		</div>
	);
};

export default TErrors;
