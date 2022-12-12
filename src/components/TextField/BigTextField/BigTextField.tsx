import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";

interface BigTextFieldProps {
	placeholderText: string;
	value: string | undefined;
	onChange: (text: string) => void;
	minLength?: number;
	maxLength?: number;
	extraClass?: string;
	extraStyle?: any;
}

const BigTextField = ({
	placeholderText,
	value,
	onChange,
	minLength,
	maxLength,
	extraClass,
	extraStyle,
}: BigTextFieldProps) => {
	const { colors, dark } = useTheme();
	return (
		<TextField
			className={` ${extraClass}`}
			variant="standard"
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={value}
			multiline
			maxRows={10}
			onChange={(event) => onChange(event.target.value)}
			color={dark ? "secondary" : "primary"}
			fullWidth
			inputProps={{ maxLength, minLength }}
			sx={{
				input: { color: colors.text },
				"& .MuiInputBase-root": {
					color: colors.text,
				},
			}}
			InputLabelProps={{
				style: {
					color: colors.text,
				},
			}}
			style={extraStyle}
		/>
	);
};

export default BigTextField;
