import { Typography } from "@mui/material";
import React from "react";
import { useTranslateFunction } from "../../../../../../hooks";
import { useTheme } from "../../../../../../theme";

const Header: React.FunctionComponent = () => {
	const { colors } = useTheme();
	const translate = useTranslateFunction();
	return (
		<div className="d-flex justify-content-center row">
			<Typography variant="h4" gutterBottom style={{ color: colors.text }}>
				{translate("pages.login.header.welcome")}
			</Typography>

			<Typography style={{ color: colors.text }}>
				{translate("pages.login.header.description")}
			</Typography>
		</div>
	);
};

export default Header;
