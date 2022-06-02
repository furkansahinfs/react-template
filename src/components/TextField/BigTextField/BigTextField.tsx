/* eslint-disable no-unused-vars */
import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";
import "./BigTextField.scss";

interface BigTextFieldProps {
	placeholderText: string;
	value: string | undefined;
	onChange: (text: string) => void;
	extraClass?: string;
}

const BigTextField = ({
	placeholderText,
	value,
	onChange,
	extraClass,
}: BigTextFieldProps) => {
	const { colors, dark } = useTheme();
	return (
		<TextField
			className={` ${extraClass}`}
			variant="filled"
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={value}
			multiline
			onChange={(event) => onChange(event.target.value)}
			color={dark ? "secondary" : "primary"}
			fullWidth
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
		/>
	);
};

export default BigTextField;
