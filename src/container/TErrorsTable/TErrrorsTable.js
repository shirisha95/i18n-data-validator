import React, { Component } from "react";
import { FixedSizeList as List } from "react-window";

import TErrors from "../../components/TErrorsRow/TErrorsRow";

class TErrorsTable extends Component {
	render() {
		const { errors } = this.props;
		const Row = ({ data, index, style }) => {
			const error = data[index];
			const { translatedValue, baseValue, key, errors } = error;
			return (
				<div key={key} style={style}>
					<TErrors
						translatedValue={translatedValue}
						baseValue={baseValue}
						errors={errors}
						keyValue={key}
					/>
				</div>
			);
		};

		return (
			<List
				height={300}
				itemCount={errors.length}
				itemSize={35}
				width={"100%"}
				itemData={errors}
			>
				{Row}
			</List>
		);
	}
}

export default TErrorsTable;
