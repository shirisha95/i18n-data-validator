import React from "react";

import classnames from "classnames";
import MonacoEditor from "../../container/MonacoEditor/MonacoEditor";
import classes from "./TErrorsRow.css";

const TErrors = props => {
	const { baseValue, keyValue, translatedValue, errors } = props;
	const markers = errors.errors;
	return (
		<div className={classes.TErrorsRow}>
			{keyValue && <div className={classes.Key}>{keyValue}</div>}
			<div
				className={classnames(
					keyValue ? "" : classes.TFullWidthEditor,
					classes.TErrorEditor
				)}
			>
				<MonacoEditor value={translatedValue} errors={markers} />
				<MonacoEditor value={baseValue} readOnly />
			</div>
		</div>
	);
};

export default TErrors;
