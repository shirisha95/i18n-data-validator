import * as actionTypes from "../actions/actionTypes";
import ValidatorUtility from "../../utils/ValidatorUtility";

const initialState = {
	response: null
};

function validateTString(
	key: string,
	baseValue: string,
	translatedValue: string
) {
	const response = ValidatorUtility.validateTString(
		key,
		baseValue,
		translatedValue,
		{
			key: baseValue
		}
	);
	return { response };
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.VALIDATE_TSTRING:
			const { key, baseValue, translatedValue } = action;
			return validateTString(key, baseValue, translatedValue);
		default:
			return state;
	}
};

export default reducer;
