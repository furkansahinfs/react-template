import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
	extraClass?: string;
}

const TextButton = ({ onPressFunction, text, extraClass }: ButtonProps) => {
	const { dark } = useTheme();
	return (
		<Button
			className={`${extraClass}`}
			variant="text"
			onClick={onPressFunction}
			color={dark ? "secondary" : "primary"}
			fullWidth
		>
			{text}
		</Button>
	);
};

export default TextButton;
