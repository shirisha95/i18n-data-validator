import classnames from "classnames";
import React, { Component } from "react";
import ReactDropzone from "react-dropzone";

import FileCheck from "../../icons/file-check.png";
import FileUpload from "../../icons/file-upload.png";
import classes from "./DropZone.css";

class DropZone extends Component {
	state = {
		files: []
	};

	onDrop = files => {
		this.setState({
			files: files
		});
		this.props.onDrop(files);
	};

	render() {
		const { multiple, text, accept } = this.props;
		return (
			<div className={classes.DropZoneContainer}>
				<ReactDropzone
					onDrop={this.onDrop}
					className={classes.FileDropzone}
					multiple={multiple}
					accept={accept}
				>
					<img
						alt="File upload icon"
						className={classes.FileIcon}
						src={FileUpload}
					/>
					<div className={classes.DropContainer}>
						<div className={classes.DropBackground}>{text}</div>
					</div>
				</ReactDropzone>
				<ul className={classes.FilesDisplayContainer}>
					{this.state.files.map(file => (
						<li className={classes.FileDisplayContainer}>
							<img
								alt="File upload complete icon"
								className={classnames(
									classes.FileUploadIcon,
									classes.FileIcon
								)}
								src={FileCheck}
							/>
							<div className={classes.FileName}>{file.name}</div>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default DropZone;
