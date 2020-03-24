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
	tKey: string,
	value: string,
	readOnly?: boolean,
	markers?: List<Marker>,
	onValueChange?: Function
};

class Editor extends Component<Props> {
	componentDidMount() {
		const { tKey, value, readOnly, markers, onValueChange } = this.props;
		const options = { ...defaultOptions, value, readOnly };
		this.editor = monaco.editor.create(this.editorRef, options);
		this.setModelMarkers(markers);

		const model = this.editor.getModel();
		model.onDidChangeContent(_ => {
			const updatedValue = this.editor.getValue();
			onValueChange(tKey, updatedValue);
		});
		return this.editor;
	}

	setModelMarkers = markers => {
		const model = this.editor.getModel();
		monaco.editor.setModelMarkers(model, "i18n-validator", markers);
	};

	componentDidUpdate() {
		const { markers } = this.props;
		this.setModelMarkers(markers);
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
