import React from "react";
import { Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../../theme";
import "./LogoutIcon.scss";
import { deleteUser } from "../../../../helpers";

const LogoutIcon = () => {
	const { dark } = useTheme();
	const navigate = useNavigate();
	return (
		<Logout
			className="icon-size"
			onClick={() => {
				deleteUser();
				navigate("/");
			}}
			color={dark ? "secondary" : "primary"}
		/>
	);
};

export default LogoutIcon;
