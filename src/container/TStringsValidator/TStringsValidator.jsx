//@flow
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createSelector } from "reselect";

import StringUploadForm from "../../components/StringUploadForm/StringUploadForm";
import TErrors from "../../components/TErrorsRow/TErrorsRow";
import Header from "../../components/UI/Header/Header";
import { validateTString } from "../../store/actions/TStringsValidator";

type Props = { validateTString: Function };
type State = {
	translatedValue: String,
	baseValue: String
};

class TStringsValidator extends PureComponent<Props, State> {
	props: Props;
	state: State = {
		translatedValue: null,
		baseValue: null
	};

	onTranslatedValueChange = (translatedValue: String) => {
		this.setState({ translatedValue });
	};

	onBaseValueChange = (baseValue: String) => {
		this.setState({ baseValue });
	};

	validateTString = () => {
		const { translatedValue, baseValue } = this.state;
		this.props.validateTString(translatedValue, baseValue);
	};

	render() {
		const { translatedValue, baseValue } = this.state;
		const { errors } = this.props;
		return (
			<div>
				<Header title="Translations Validator" />
				<br />
				<StringUploadForm
					onBaseValueChange={this.onBaseValueChange}
					onTranslatedValueChange={this.onTranslatedValueChange}
					validateTString={this.validateTString}
				/>
				<br />
				{errors && (
					<TErrors
						translatedValue={translatedValue}
						baseValue={baseValue}
						errors={errors.errors}
					/>
				)}
			</div>
		);
	}
}
const getErrors = state => state.tStringReducer.tError;
const errorsSelector = createSelector(getErrors, errors => errors);

const mapStateToProps = state => ({
	errors: errorsSelector(state)
});

const mapDispatchToProps = { validateTString };

export default connect(mapStateToProps, mapDispatchToProps)(TStringsValidator);
