//@flow

import React from "react";
import { FixedSizeList } from "react-window";
import { List } from "immutable";

import TErrorsRow from "../../components/TErrorsRow/TErrorsRow";
import { ValidateTResponse } from "../../models/flow/ValidateTResponse";

type Props = {
	responses: List<ValidateTResponse>
};

const TErrorsTable = (props: Props) => {
	const { responses } = props;
	const Row = ({ data, index, style }) => {
		const response = data[index];
		return (
			<div key={index} style={style}>
				<TErrorsRow response={response} />
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
