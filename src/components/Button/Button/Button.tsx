import React from "react";
import { Button } from "@mui/material";
import { useTheme } from "../../../theme";

interface ButtonProps {
	onPressFunction: () => void;
	text: string;
	variant: "text" | "outlined" | "contained";
	size: "large" | "medium" | "small";
	extraClass?: string;
	startIcon?: React.ReactNode;
	endIcon?: React.ReactNode;
	fullWidth?: boolean;
	disabled?: boolean;
}

const CustomButton = ({
	onPressFunction,
	text,
	variant,
	size,
	extraClass,
	startIcon,
	endIcon,
	fullWidth,
	disabled,
}: ButtonProps) => {
	const { colors } = useTheme();
	return (
		<Button
			className={`shadow ${extraClass}`}
			variant={variant}
			onClick={onPressFunction}
			fullWidth={fullWidth !== undefined ? fullWidth : true}
			sx={{ borderRadius: "8px", backgroundColor: colors.button }}
			size={size}
			startIcon={startIcon}
			endIcon={endIcon}
			disabled={disabled}
		>
			{text}
		</Button>
	);
};

export default CustomButton;
