//@flow

import { JSONParserResponse } from "../models/flow/JSONParserResponse";

class JSONParser {
	static parseJSONData = (string: String): JSONParserResponse => {
		let jsonString;
		if (typeof string === "string") {
			jsonString = string;
		} else {
			jsonString = JSON.stringify(string);
		}
		try {
			const data = JSON.parse(jsonString);
			if (data && typeof data === "object") {
				return JSONParserResponse.fromJS({ data });
			}
			return JSONParserResponse.fromJS({ error: "Empty JSON" });
		} catch (ex) {
			return JSONParserResponse.fromJS({ error: ex.message });
		}
	};
}

export default JSONParser;
