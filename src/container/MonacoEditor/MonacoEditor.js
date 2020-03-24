import * as monaco from "@peterschussheim/monaco-editor";
import React, { Component } from "react";

import classes from "./MonacoEditor.css";
import classnames from "classnames";

class Editor extends Component {
	static defaultProps = {
		height: "100%",
		language: "javascript",
		theme: "vs-dark",
		didLoad: () => {},
		didMount: () => {}
	};

	state = {
		editor: null
	};

	componentDidMount() {
		this.didLoad();
	}

	containerDidMount = ref => {
		this.ref = ref;
	};

	handleMount() {
		const { value, readOnly, errors } = this.props;
		const editor = monaco.editor.create(this.ref, {
			value,
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
			lineHeight: "30px",
			readOnly
		});
		this.didMount(editor);
		monaco.editor.setModelMarkers(editor.getModel(), "test", errors);
		return editor;
	}

	didMount = editor => {
		const { didMount } = this.props;
		didMount(editor);
	};

	didLoad = e => {
		const { didLoad } = this.props;
		this.handleMount();
		didLoad();

		if (e) {
			e.target.removeEventListener("load", this.didLoad);
		}
	};

	render() {
		const { readOnly } = this.props;
		return (
			<div
				ref={this.containerDidMount}
				className={classnames(
					classes.MonacoEditor,
					readOnly ? classes.ReadOnly : ""
				)}
			/>
		);
	}
}

export default Editor;
