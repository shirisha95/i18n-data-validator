import { ControlledEditor } from "@monaco-editor/react";
import React, { Component } from "react";

import classes from "./MonacoEditor.css";

const BAD_WORD = "eval";
const WARNING_MESSAGE = " <- hey man, what's this?";

class MonacoEditor extends Component {
	constructor(props) {
		super(props);
		this.editorRef = React.createRef();
	}

	handleEditorDidMount = (_, editor) => {
		this.editorRef.current = editor;
		const errors = [
			{
				startLineNumber: 1,
				startColumn: 1,
				endLineNumber: 1,
				endColumn: 4,
				message: "Warning!",
				severity: 2
			}
		];
		const model = editor.getModel();
		//monaco.editor.setModelMarkers(model, "jshint", errors);
	};

	handleEditorChange = (ev, value) => {
		if (ev.changes[0].text === ev.eol) {
			return this.props.value;
		}
		return value.includes(BAD_WORD) && !value.includes(WARNING_MESSAGE)
			? value.replace(BAD_WORD, BAD_WORD + WARNING_MESSAGE)
			: value.includes(WARNING_MESSAGE) && !value.includes(BAD_WORD)
			? value.replace(WARNING_MESSAGE, "")
			: value;
	};

	render() {
		const { value, readOnly } = this.props;

		return (
			<div className={classes.MonacoEditor}>
				<ControlledEditor
					height="40px"
					value={value}
					onChange={this.handleEditorChange}
					editorDidMount={this.handleEditorDidMount}
					editorWillMount={this.editorWillMount}
					language="plaintext"
					theme="light"
					options={{
						readOnly,
						lineNumbers: "off",
						lineHeight: "30px",
						contextmenu: false,
						minimap: {
							enabled: false
						},
						glyphMargin: false,
						folding: false,
						lineDecorationsWidth: 0,
						lineNumbersMinChars: 0,
						lineHeight: "40px"
					}}
				/>
			</div>
		);
	}
}

export default MonacoEditor;
