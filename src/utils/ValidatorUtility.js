//@flow

import {
	validate,
	rules,
	I18nextStrings
} from "@locus-taxy/i18next-string-validation";
import { forEachString } from "@locus-taxy/i18next-strings-utils";
import { List } from "immutable";

import { Marker } from "../models/flow/Marker";
import { ValidateTResponse } from "../models/flow/ValidateTResponse";

class ValidatorUtils {
	static validateTString = (
		key: string,
		baseValue: string,
		translatedValue: string
	): ValidateTResponse => {
		const tErrors = validate(
			translatedValue,
			{
				key: key,
				value: translatedValue,
				baseLngStrings: new I18nextStrings({
					key: baseValue
				})
			},
			[rules["require-ns-in-nesting-key"]]
		);
		const markers = this.formErrorMarkers(tErrors);
		return ValidateTResponse.fromJS({
			key,
			baseValue,
			translatedValue,
			markers
		});
	};

	static validateTStrings = (
		baseStrings: Object,
		translatedStrings: Object
	): List<ValidateTResponse> => {
		const flattenedKeyTStrings = {};
		forEachString(translatedStrings, (key, value) => {
			flattenedKeyTStrings[key] = value;
		});

		const responses = [];
		forEachString(baseStrings, (key, baseValue) => {
			const translatedValue = flattenedKeyTStrings[key];
			const response = this.validateTString(
				key,
				baseValue,
				"tester $t(tester)",
				baseStrings
			);
			if (response.markers.size !== 0) {
				responses.push(response);
			}
		});
		return responses;
	};

	static formErrorMarkers(tErrors): List<Marker> {
		return tErrors.map(tError =>
			Marker.fromJS({
				startLineNumber: tError.loc.start.line,
				endLineNumber: tError.loc.end.line,
				startColumn: tError.loc.start.column,
				endColumn: tError.loc.end.column,
				message: tError.message,
				severity: 3,
				source: "i18n-validator"
			})
		);
	}
}

export default ValidatorUtils;
