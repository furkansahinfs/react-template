import React from "react";
import Icon from "@mui/material/Icon";
import { useTheme } from "../../theme";
import "./Icon.scss";

interface IconProps {
	onPressFunction: () => void;
	icon: React.ElementType;
	extraClass?: string;
	extraStyle?: any;
}

const CustomIcon = ({
	onPressFunction,
	icon,
	extraClass,
	extraStyle,
}: IconProps) => {
	const { dark } = useTheme();
	return (
		<Icon
			className={`icon-size ${extraClass}`}
			onClick={onPressFunction}
			color={dark ? "secondary" : "primary"}
			component={icon}
			fontSize="large"
			style={extraStyle}
		/>
	);
};

export default CustomIcon;
