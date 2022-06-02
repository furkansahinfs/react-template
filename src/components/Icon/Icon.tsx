import React from "react";
import Icon from "@mui/material/Icon";
import { useTheme } from "../../theme";
import "./Icon.scss";

interface IconProps {
	onPressFunction: () => void;
	name: string;
	extraClass?: string;
}

const CustomIcon = ({ onPressFunction, name, extraClass }: IconProps) => {
	const { dark } = useTheme();
	return (
		<Icon
			className={`icon-size ${extraClass}`}
			onClick={onPressFunction}
			color={dark ? "secondary" : "primary"}
		>
			{name}
		</Icon>
	);
};

export default CustomIcon;
