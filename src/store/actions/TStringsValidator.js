import * as actionTypes from "./actionTypes";

export const validateTString = (
	key: string,
	baseValue: string,
	translatedValue: string
) => {
	return {
		type: actionTypes.VALIDATE_TSTRING,
		key,
		baseValue,
		translatedValue
	};
};
