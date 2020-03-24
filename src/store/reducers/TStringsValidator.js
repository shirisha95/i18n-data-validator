import { VALIDATE_TSTRING } from "../actions/actionTypes";
import ValidatorUtility from "../../utils/ValidatorUtility";

const initialState = {
	response: null
};

function validateTString(key, baseValue, translatedValue) {
	const response = ValidatorUtility.validateTString(
		key,
		baseValue,
		translatedValue
	);
	return { response };
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case VALIDATE_TSTRING:
			const { key, baseValue, translatedValue } = action;
			return validateTString(key, baseValue, translatedValue);
		default:
			return state;
	}
};

export default reducer;
