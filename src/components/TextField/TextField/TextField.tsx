/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";
import "./TextField.scss";

interface TextFieldProps {
	placeholderText: string;
	value: string | undefined;
	onChange: (text: string) => void;
	multiline?: boolean;
	variant: "outlined" | "filled" | "standard";
	type?: string;
	extraClass?: string;
}

const CustomTextField = ({
	placeholderText,
	value,
	onChange,
	multiline,
	variant,
	type,
	extraClass,
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
			fullWidth
			type={type !== undefined ? type : "text"}
			sx={{
				input: { color: colors.text },
				"& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
					"&": {
						borderColor: colors.border,
						borderRadius: 5,
					},
				},
			}}
			InputLabelProps={{
				style: {
					color: colors.text,
				},
			}}
			variant={variant}
		/>
	);
};

export default CustomTextField;
