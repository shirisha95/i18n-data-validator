import React from "react";

import FileCompareIcon from "../../../icons/file-compare.png";
import StringCompareIcon from "../../../icons/google-translate.png";
import classes from "./Header.css";

const Header = ({ title }) => (
	<header className={classes.Header}>
		<div className={classes.HeaderText}>{title}</div>
		<div className={classes.NavListItems}>
			<ul className={classes.NavList}>
				<li className={classes.NavItem}>
					<a href="/" className={classes.NavLink}>
						<img
							alt="File Compare Icon"
							className={classes.HeaderIcon}
							src={FileCompareIcon}
						/>
						<span className={classes.NavLinkText}>Documents</span>
					</a>
				</li>
				<li className={classes.NavItem}>
					<a href="/string-validator" className={classes.NavLink}>
						<img
							alt="String Compare Icon"
							className={classes.HeaderIcon}
							src={StringCompareIcon}
						/>
						<span className={classes.NavLinkText}> Text</span>
					</a>
				</li>
			</ul>
		</div>
	</header>
);

export default React.memo(Header);
