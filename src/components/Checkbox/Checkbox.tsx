import React from "react";
import { Checkbox as NativeCheckbox, FormControlLabel } from "@mui/material";
import { useTheme } from "../../theme";
import "./Checkbox.scss";

interface CheckboxProps {
	onPressFunction: () => void;
	checked: boolean;
	title: string;
	extraClass?: string;
}

const CustomCheckbox = ({
	onPressFunction,
	checked,
	title,
	extraClass,
}: CheckboxProps) => {
	const { dark } = useTheme();
	return (
		<FormControlLabel
			className={` ${extraClass}`}
			control={<NativeCheckbox checked={checked} onChange={onPressFunction} />}
			label={title}
			color={dark ? "secondary" : "primary"}
		/>
	);
};

export default CustomCheckbox;
