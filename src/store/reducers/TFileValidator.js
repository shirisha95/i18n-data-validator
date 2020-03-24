import * as actionTypes from "../actions/actionTypes";
import ValidatorUtility from "../../utils/ValidatorUtility";

const initialState = {
	tErrors: null
};

function validateTStrings(
	translatedStringsJSON: Object,
	baseStringsJSON: Object
) {
	const tErrors = ValidatorUtility.validateTStrings(
		translatedStringsJSON,
		baseStringsJSON
	);
	return { tErrors };
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.VALIDATE_TSTRINGS:
			const { translatedStringsJSON, baseStringsJSON } = action;
			return validateTStrings(translatedStringsJSON, baseStringsJSON);
		default:
			return state;
	}
};

export default reducer;
