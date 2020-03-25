//@flow

import React, { Fragment } from "react";

import FileCheck from "../../../icons/file-check.png";
import DropZone from "./Dropzone/Dropzone";
import classes from "./FileDropzone.css";

type Props = {
	fileDetails: {
		name: string,
		error: string
	},
	onDrop: Function,
	text: string,
	accept: string
};

const FileDropzone = (props: Props) => {
	const { onDrop, fileDetails, text, accept } = props;
	const { error, name } = fileDetails;
	return (
		<Fragment>
			<DropZone
				onDrop={onDrop}
				multiple={false}
				text={text}
				accept={accept}
			/>
			{error ? (
				<div className={classes.FileDropError}>{error}</div>
			) : (
				name && (
					<div className={classes.FileDisplayContainer}>
						<img
							alt="File upload complete icon"
							className={classes.FileUploadIcon}
							src={FileCheck}
						/>
						<div className={classes.FileName}>{name}</div>
					</div>
				)
			)}
		</Fragment>
	);
};

export default FileDropzone;
