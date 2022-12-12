import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";

interface TextFieldProps {
	placeholderText: string;
	value: string | undefined;
	onChange: (text: string) => void;
	onBlur?: (text: string) => void;
	multiline?: boolean;
	variant?: "outlined" | "filled" | "standard";
	type?: string;
	extraClass?: string;
	error?: boolean;
	helperText?: React.ReactNode;
}

const CustomTextField = ({
	placeholderText,
	value,
	onChange,
	onBlur,
	multiline,
	variant,
	type,
	extraClass,
	error,
	helperText,
}: TextFieldProps) => {
	const { colors } = useTheme();
	return (
		<TextField
			className={`shadow-sm ${extraClass}`}
			id={placeholderText}
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={value}
			multiline={multiline !== undefined ? multiline : false}
			onChange={(event) => onChange(event.target.value)}
			onBlur={(event) => (onBlur ? onBlur(event.target.value) : null)}
			fullWidth
			type={type !== undefined ? type : "text"}
			sx={{
				input: { color: colors.text },
				"& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
					"&": {
						borderColor: colors.border,
						borderRadius: 2,
					},
				},
			}}
			InputLabelProps={{
				style: {
					color: colors.text,
				},
			}}
			error={error}
			helperText={helperText}
			variant={variant}
		/>
	);
};

export default CustomTextField;
