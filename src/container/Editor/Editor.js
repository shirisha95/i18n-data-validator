//@flow

import * as monaco from "@peterschussheim/monaco-editor";
import React, { Component } from "react";

import { Marker } from "../../models/flow/Marker";
import { List } from "immutable";
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
	readOnly?: boolean,
	markers?: List<Marker>
};

class Editor extends Component<Props> {
	componentDidMount() {
		const { value, readOnly, markers } = this.props;
		const options = { ...defaultOptions, value, readOnly };
		this.editor = monaco.editor.create(this.editorRef, options);
		monaco.editor.setModelMarkers(this._editor.getModel(), "test", markers);
		return this.editor;
	}

	componentWillUnmount() {
		this.editor && this.editor.dispose();
	}

	setEditorRef = ref => {
		this.editorRef = ref;
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
