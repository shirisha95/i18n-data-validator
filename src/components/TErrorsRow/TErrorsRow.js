//@flow

import React from "react";

import Editor from "../../container/Editor/Editor";
import classes from "./TErrorsRow.css";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";

type Props = {
	response: ValidateTResponse,
	onTranslatedValueChange: Function
};

const TErrorsRow = (props: Props) => {
	const { onTranslatedValueChange, response } = props;
	const { baseValue, key, translatedValue, markers } = response.toJS();
	return (
		<div className={classes.TErrorsRow}>
			{key && <div className={classes.Key}>{key}</div>}
			<div className={classes.TErrorsEditor}>
				<Editor
					tKey={key}
					value={translatedValue}
					markers={markers}
					onValueChange={onTranslatedValueChange}
				/>
				<Editor tKey={key} value={baseValue} readOnly />
			</div>
		</div>
	);
};

export default React.memo(TErrorsRow);
