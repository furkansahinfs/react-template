import React from "react";
import { Button } from "@mui/material";
import "./TextButton.scss";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
	hasMarginVertical?: boolean;
	widthFit?: boolean;
}

const TextButton = ({
	onPressFunction,
	text,
	hasMarginVertical,
	widthFit,
}: ButtonProps) => {
	const { colors } = useTheme();
	return (
		<Button
			className="button-text margin-vertical - width"
			variant="text"
			onClick={onPressFunction}
		>
			{text}
		</Button>
	);
};

export default TextButton;
