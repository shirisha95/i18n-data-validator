import {
	I18nextStrings,
	rules,
	validate
} from "@locus-taxy/i18next-string-validation";
import { forEachString } from "@locus-taxy/i18next-strings-utils";

import { List } from "immutable";

import { Marker } from "../models/flow/Marker";
import { ValidateTResponse } from "../models/flow/ValidateTResponse";

class ValidatorUtils {
	static validateTString = (key, baseValue, translatedValue, baseStrings) => {
		const i18nextStrings = baseStrings && {
			key: baseValue
		};
		const tErrors = validate(
			translatedValue,
			{
				key: key,
				value: translatedValue,
				baseLngStrings: new I18nextStrings(i18nextStrings)
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

	static validateTStrings = (baseStrings, translatedStrings) => {
		const flattenedKeyTStrings = {};
		forEachString(translatedStrings, (key, value) => {
			flattenedKeyTStrings[key] = value;
		});

		let responses = List([]);
		forEachString(baseStrings, (key, baseValue) => {
			const translatedValue = flattenedKeyTStrings[key];
			const response = this.validateTString(
				key,
				baseValue,
				translatedValue,
				baseStrings
			);
			responses =
				response.markers.size !== 0
					? responses.push(response)
					: responses;
		});
		return responses;
	};

	static formErrorMarkers(tErrors) {
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
