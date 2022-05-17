import React from "react";
import { Checkbox as NativeCheckbox, FormControlLabel } from "@mui/material";
import { useTheme } from "../../theme";
import "./Checkbox.scss";

interface CheckboxProps {
	onPressFunction: () => void;
	checked: boolean;
	title: string;
	widthFit?: boolean;
}

const CustomCheckbox = ({
	onPressFunction,
	checked,
	title,
	widthFit,
}: CheckboxProps) => {
	const { colors } = useTheme();
	return (
		<FormControlLabel
			control={<NativeCheckbox checked={checked} onChange={onPressFunction} />}
			label={title}
		/>
	);
};

export default CustomCheckbox;
