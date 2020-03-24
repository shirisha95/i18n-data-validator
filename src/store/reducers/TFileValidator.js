import ValidatorUtility from "../../utils/ValidatorUtility";
import { UPDATE_MARKERS, VALIDATE_TSTRINGS } from "../actions/actionTypes";

const initialState = {
	responses: null
};

function validateTStrings(translatedStringsJSON, baseStringsJSON) {
	const responses = ValidatorUtility.validateTStrings(
		translatedStringsJSON,
		baseStringsJSON
	);
	return { responses };
}

function updateMarkers(responses, key, updatedValue) {
	const index = responses.findIndex(response => response.key === key);
	const baseValue = responses.get(index).baseValue;
	const updatedResponse = ValidatorUtility.validateTString(
		key,
		baseValue,
		updatedValue
	);
	const updatedResponses = responses.update(index, _ => updatedResponse);
	return { responses: updatedResponses };
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case VALIDATE_TSTRINGS:
			const { translatedStringsJSON, baseStringsJSON } = action;
			return validateTStrings(translatedStringsJSON, baseStringsJSON);
		case UPDATE_MARKERS:
			const { responses } = state;
			const { key, updatedValue } = action;
			return updateMarkers(responses, key, updatedValue);
		default:
			return state;
	}
};

export default reducer;
