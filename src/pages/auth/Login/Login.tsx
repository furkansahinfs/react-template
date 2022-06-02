import React, { useCallback } from "react";
import { Card } from "@mui/material";
import LoginForm from "./LoginForm/LoginForm";

import "./Login.scss";
import { useTheme } from "../../../theme";
import { LoginRequest } from "../../../api";

const Login = () => {
	const { colors } = useTheme();
	const handleLogin = useCallback(
		({ email, password }) => LoginRequest(email, password),
		[],
	);

	return (
		<div className="main">
			<Card
				className="d-flex w-100 border-0"
				elevation={0}
				style={{ backgroundColor: colors.background }}
			>
				<LoginForm onSubmit={handleLogin} />
			</Card>
		</div>
	);
};

export default Login;
