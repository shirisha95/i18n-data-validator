//@flow

import React from "react";

import FileCheck from "../../../icons/file-check.png";
import classes from "./FilesDisplayContainer.css";

type Props = {
	fileNames: string
};

const FilesDisplayContainer = (props: Props) => {
	const { fileNames } = props;
	return (
		<ul className={classes.FilesDisplayContainer}>
			{fileNames.map((fileName, index) => (
				<li key={index} className={classes.FileDisplayContainer}>
					<img
						alt="File upload complete icon"
						className={classes.FileUploadIcon}
						src={FileCheck}
					/>
					<div className={classes.FileName}>{fileName}</div>
				</li>
			))}
		</ul>
	);
};

export default FilesDisplayContainer;
