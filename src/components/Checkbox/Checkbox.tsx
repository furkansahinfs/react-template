import React from "react";
import { Checkbox as NativeCheckbox, FormControlLabel } from "@mui/material";
import { useTheme } from "../../theme";

interface CheckboxProps {
	onPressFunction: (check: boolean) => void;
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
	const { colors, dark } = useTheme();
	return (
		<FormControlLabel
			className={`${extraClass}`}
			control={
				<NativeCheckbox
					checked={checked}
					onChange={(
						event: React.ChangeEvent<HTMLInputElement>,
						isChecked: boolean,
					) => onPressFunction(isChecked)}
					sx={{
						color: colors.border,
					}}
				/>
			}
			label={title}
			color={dark ? "secondary" : "primary"}
			sx={{
				input: { color: colors.text },
				"& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
					"&": {
						borderColor: colors.border,
						borderRadius: 2,
					},
				},
			}}
		/>
	);
};

export default CustomCheckbox;
