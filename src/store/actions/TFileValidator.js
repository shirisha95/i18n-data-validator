import * as actionTypes from "./actionTypes";

export const validateTStrings = (
	translatedStringsJSON: Object,
	baseStringsJSON: Object
) => {
	return {
		type: actionTypes.VALIDATE_TSTRINGS,
		translatedStringsJSON,
		baseStringsJSON
	};
};
