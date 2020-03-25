class JSONParser {
	static parseJSONData = string => {
		let jsonString;
		if (typeof string === "string") {
			jsonString = string;
		} else {
			jsonString = JSON.stringify(string);
		}
		try {
			const data = JSON.parse(jsonString);
			if (data && typeof data === "object") {
				return { data };
			}
			return { error: "Empty JSON" };
		} catch (ex) {
			return { error: ex.message };
		}
	};
}

export default JSONParser;
