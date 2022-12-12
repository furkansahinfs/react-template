import React from "react";
import { DarkMode } from "@mui/icons-material";
import { useTheme } from "../../../../theme";
import "./ThemeIcon.scss";
import { changeTheme } from "../../../../helpers";

const ThemeIcon = () => {
	const { dark } = useTheme();
	return (
		<DarkMode
			className="icon-size"
			onClick={() => changeTheme()}
			color={dark ? "secondary" : "primary"}
		/>
	);
};

export default ThemeIcon;
