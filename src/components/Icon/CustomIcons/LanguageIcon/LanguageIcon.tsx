import React from "react";
import { Translate } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../theme";
import "./LanguageIcon.scss";
import { changeLanguage } from "../../../../helpers";

const LanguageIcon = () => {
	const { dark } = useTheme();
	const navigate = useNavigate();
	return (
		<Translate
			className="icon-size"
			onClick={() => {
				changeLanguage();
				navigate(0);
			}}
			color={dark ? "secondary" : "primary"}
		/>
	);
};

export default LanguageIcon;
