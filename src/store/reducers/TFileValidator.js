import { VALIDATE_TSTRINGS } from "../actions/actionTypes";
import ValidatorUtility from "../../utils/ValidatorUtility";

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

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case VALIDATE_TSTRINGS:
			const { translatedStringsJSON, baseStringsJSON } = action;
			return validateTStrings(translatedStringsJSON, baseStringsJSON);
		default:
			return state;
	}
};

export default reducer;
