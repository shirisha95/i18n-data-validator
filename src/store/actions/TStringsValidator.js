import { VALIDATE_TSTRING } from "./actionTypes";

export const validateTString = (
	key: string,
	baseValue: string,
	translatedValue: string
) => {
	return {
		type: VALIDATE_TSTRING,
		key,
		baseValue,
		translatedValue
	};
};
