import { VALIDATE_TSTRINGS } from "./actionTypes";

export const validateTStrings = (
	translatedStringsJSON: Object,
	baseStringsJSON: Object
) => {
	return {
		type: VALIDATE_TSTRINGS,
		translatedStringsJSON,
		baseStringsJSON
	};
};
