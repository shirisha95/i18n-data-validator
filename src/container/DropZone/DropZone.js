//@flow

import React from "react";
import ReactDropzone from "react-dropzone";

import FileUpload from "../../icons/file-upload.png";
import classes from "./DropZone.css";

type Props = {
	multiple: boolean,
	text: string,
	accept: string,
	dropSuccess: Boolean,
	onDrop: Function,
	error: string
};

const DropZone = (props: Props) => {
	const { multiple, text, accept, onDrop } = props;
	return (
		<div className={classes.DropZoneContainer}>
			<ReactDropzone
				onDrop={onDrop}
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
		</div>
	);
};

export default DropZone;
