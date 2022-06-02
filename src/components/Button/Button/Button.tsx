import React from "react";
import { Button } from "@mui/material";
import "./Button.scss";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
	variant: "text" | "outlined" | "contained";
	size: "large" | "medium" | "small";
	extraClass?: string;
}

const CustomButton = ({
	onPressFunction,
	text,
	variant,
	size,
	extraClass,
}: ButtonProps) => {
	const { colors } = useTheme();
	return (
		<Button
			className={`shadow ${extraClass}`}
			variant={variant}
			onClick={onPressFunction}
			fullWidth
			sx={{ borderRadius: 30, backgroundColor: colors.button }}
			size={size}
		>
			{text}
		</Button>
	);
};

export default CustomButton;
