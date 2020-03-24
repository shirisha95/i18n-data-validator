import { List } from "immutable";
//@flow

import React from "react";
import { FixedSizeList } from "react-window";

import { ValidateTResponse } from "../../models/flow/ValidateTResponse";
import TErrorsRow from "../TErrorsRow/TErrorsRow";

type Props = {
	responses: List<ValidateTResponse>,
	onTranslatedValueChange: Function
};

const TErrorsTable = (props: Props) => {
	const { responses, onTranslatedValueChange } = props;
	const Row = ({ data, index, style }) => {
		const response = data.get(index);
		return (
			<div key={index} style={style}>
				<TErrorsRow
					response={response}
					onTranslatedValueChange={onTranslatedValueChange}
				/>
			</div>
		);
	};

	return (
		<FixedSizeList
			height={300}
			itemCount={responses.size}
			itemSize={35}
			width={"100%"}
			itemData={responses}
		>
			{Row}
		</FixedSizeList>
	);
};

export default React.memo(TErrorsTable);
