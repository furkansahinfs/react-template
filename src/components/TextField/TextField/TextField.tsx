import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";
import "./TextField.scss";

interface TextFieldProps {
	placeholderText: string;
	val: string | undefined;
	keyboardType:
		| "none"
		| "text"
		| "tel"
		| "url"
		| "email"
		| "numeric"
		| "decimal"
		| "search"
		| undefined;
	func: (text: string) => void;
	secureText: boolean;
	iconName?: string;
	multiline?: boolean;
	mode: "outlined" | "filled";
}

const CustomTextField = ({
	placeholderText,
	val,
	keyboardType,
	func,
	secureText,
	iconName,
	multiline,
	mode,
}: TextFieldProps) => {
	const { colors } = useTheme();
	return (
		<TextField
			variant={mode}
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={val}
			inputProps={{ inputMode: keyboardType }}
			multiline={multiline !== undefined ? multiline : false}
			onChange={(event) => func(event.target.value)}
		/>
	);
};

export default CustomTextField;
