import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme } from "../../../theme";
import "./BigTextField.scss";

interface BigTextFieldProps {
	placeholderText: string;
	val: string | undefined;
	func: (text: string) => void;
}

const BigTextField = ({ placeholderText, val, func }: BigTextFieldProps) => {
	const { colors } = useTheme();
	return (
		<TextField
			variant="filled"
			label={placeholderText}
			placeholder={placeholderText}
			defaultValue={val}
			multiline
			rows={10}
			onChange={(event) => func(event.target.value)}
		/>
	);
};

export default BigTextField;
