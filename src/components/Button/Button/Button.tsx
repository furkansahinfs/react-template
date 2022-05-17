import React from "react";
import { Button } from "@mui/material";
import "./Button.scss";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
	mode: "text" | "outlined" | "contained";
	hasMarginVertical?: boolean;
	widthFit?: boolean;
}

const CustomButton = ({
	onPressFunction,
	text,
	mode,
	hasMarginVertical,
	widthFit,
}: ButtonProps) => {
	const { dark } = useTheme();
	return (
		<Button
			className="button margin-vertical - width"
			color={dark ? "secondary" : "primary"}
			variant={mode}
			onClick={onPressFunction}
		>
			{text.toLocaleUpperCase()}
		</Button>
	);
};

export default CustomButton;
