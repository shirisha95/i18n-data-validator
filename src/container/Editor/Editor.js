//@flow

import * as monaco from "@peterschussheim/monaco-editor";
import classnames from "classnames";
import * as React from "react";
import { type LiteralValue } from "@locus-taxy/i18next-strings-utils";

import { Marker } from "../../models/flow/Marker";
import classes from "./Editor.css";

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
	value: LiteralValue,
	readOnly?: boolean,
	markers?: Array<Marker>,
	onValueChange?: Function
};
class Editor extends React.Component<Props> {
	editorRef: ?React.ElementRef<any>;
	editor: Object;

	componentDidMount() {
		const { tKey, value, readOnly, markers, onValueChange } = this.props;
		const options = { ...defaultOptions, value, readOnly };
		this.editor = monaco.editor.create(this.editorRef, options);
		this.setModelMarkers(markers);

		const model = this.editor.getModel();
		model.onDidChangeContent(_ => {
			const updatedValue: string = this.editor.getValue();
			onValueChange(tKey, updatedValue);
		});
		return this.editor;
	}

	setModelMarkers = (markers: ?Array<Marker>) => {
		const model = this.editor.getModel();
		monaco.editor.setModelMarkers(model, "i18n-validator", markers);
	};

	componentDidUpdate() {
		const { markers } = this.props;
		this.setModelMarkers(markers);
	}

	setEditorRef = (ref: React.ElementRef<any>) => {
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
