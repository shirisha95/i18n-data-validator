import { VALIDATE_TSTRINGS, UPDATE_MARKERS } from "./actionTypes";

export const validateTStrings = (translatedStringsJSON, baseStringsJSON) => {
	return {
		type: VALIDATE_TSTRINGS,
		translatedStringsJSON,
		baseStringsJSON
	};
};

export const updateMarkers = (key, updatedValue) => {
	return {
		type: UPDATE_MARKERS,
		key,
		updatedValue
	};
};
