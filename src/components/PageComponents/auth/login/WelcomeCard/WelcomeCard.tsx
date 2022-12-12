import { Typography } from "@mui/material";
import React from "react";
import { LanguageIcon, ThemeIcon } from "../../../../Icon";
import { useTheme } from "../../../../../theme";
import "./WelcomeCard.scss";
import { useTranslateFunction } from "../../../../../hooks";

const WelcomeCard: React.FunctionComponent = () => {
	const { colors } = useTheme();
	const translate = useTranslateFunction();

	return (
		<div
			className="bg-img d-flex row align-content-center"
			suppressHydrationWarning
		>
			<div style={{ backgroundColor: colors.background }}>
				<Typography
					variant="h4"
					fontWeight="bold"
					className="text-center my-2"
					style={{ color: colors.text }}
				>
					{translate("pages.login.welcome")}
				</Typography>

				<div className="column my-2 d-flex justify-content-center">
					<ThemeIcon />
					<LanguageIcon />
				</div>
			</div>
		</div>
	);
};

export default WelcomeCard;
