import * as actionTypes from "../actions/actionTypes";
import ValidatorUtility from "../../utils/ValidatorUtility";

const initialState = {
	tError: null
};

function validateTString(translatedValue: String, baseValue: String) {
	const errors = ValidatorUtility.validateTString(translatedValue, baseValue);
	const tError = { baseValue, translatedValue, errors };
	return { tError };
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.VALIDATE_TSTRING:
			const { translatedValue, baseValue } = action;
			return validateTString(translatedValue, baseValue);
		default:
			return state;
	}
};

export default reducer;
