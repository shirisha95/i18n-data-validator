import * as monaco from "@peterschussheim/monaco-editor";
import React, { Component } from "react";

import type { Marker } from "../../models/flow/Marker";
import classes from "./Editor.css";
import classnames from "classnames";

const defaultOptions = {
	language: "plaintext",
	theme: "vs",
	lineNumbers: "off",
	fontSize: 14,
	contextmenu: false,
	minimap: {
		enabled: false
	},
	glyphMargin: false,
	folding: false,
	lineDecorationsWidth: 0,
	lineNumbersMinChars: 0,
	lineHeight: "30px"
};

type Props = {
	value: String,
	readOnly: boolean,
	errors: List<Marker>
};

class Editor extends Component<Props> {
	componentDidMount() {
		const { value, readOnly, errors } = this.props;
		const options = { ...defaultOptions, value, readOnly };
		const editor = monaco.editor.create(this.ref, options);
		monaco.editor.setModelMarkers(editor.getModel(), "test", errors);
		return editor;
	}

	setEditorRef = ref => {
		this.ref = ref;
	};

	render() {
		const { readOnly } = this.props;
		return (
			<div
				ref={this.setEditorRef}
				className={classnames(classes.Editor, {
					[classes.ReadOnly]: readOnly
				})}
			/>
		);
	}
}

export default Editor;
