import * as actionTypes from "./actionTypes";

export const validateTString = (translatedValue: String, baseValue: String) => {
	return {
		type: actionTypes.VALIDATE_TSTRING,
		translatedValue,
		baseValue
	};
};
