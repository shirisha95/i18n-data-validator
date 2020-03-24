import {
	validate,
	rules,
	I18nextStrings
} from "@locus-taxy/i18next-string-validation";
import { forEachString } from "@locus-taxy/i18next-strings-utils";

type Marker = {
	startLineNumber: int,
	endLineNumber: int,
	startColumn: int,
	endColumn: int,
	message: string,
	severity: int,
	source: String
};

class ValidatorUtils {
	static validateTString = (
		translatedValue: String,
		baseValue: String,
		key: String
	) => {
		const string = "tester $t(tester)";
		const tErrors = validate(
			string,
			{
				key: translatedValue,
				value: baseValue,
				baseLngStrings: new I18nextStrings({})
			},
			[rules["require-ns-in-nesting-key"]]
		);
		const markers = this.formErrorMarkers(tErrors);
		return { key, baseValue, translatedValue, errors: markers };
	};

	static validateTStrings = (
		translatedStrings: Object,
		baseStrings: Object
	) => {
		const flattenedKeyTStrings = {};
		forEachString(translatedStrings, (key, value) => {
			flattenedKeyTStrings[key] = value;
		});

		const errors = [];
		forEachString(baseStrings, (key, baseValue) => {
			const translatedValue = flattenedKeyTStrings[key];
			const err = this.validateTString(translatedValue, baseValue, key);
			if (err.errors.length !== 0) {
				errors.push(err);
			}
		});
		return errors;
	};

	static formErrorMarkers(tErrors: List<TError>): List<Marker> {
		return tErrors.map(tError => ({
			startLineNumber: tError.loc.start.line,
			endLineNumber: tError.loc.end.line,
			startColumn: tError.loc.start.column,
			endColumn: tError.loc.end.column,
			message: tError.message,
			severity: 3,
			source: "i18n-validator"
		}));
	}
}

export default ValidatorUtils;
