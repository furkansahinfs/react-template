/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-undef */
import React, { useCallback } from "react";
import { Card } from "@mui/material";
import LoginForm from "./LoginForm";

import "./Login.scss";

const Login = (): JSX.Element => {
	const handleLogin = useCallback(
		({ username, password }) => console.log(username, password),
		[],
	);
	// Avatarı kaldırabiliriz
	return (
		<div className="main">
			<div>
				<Card className="card" square>
					<LoginForm onSubmit={handleLogin} />
				</Card>
			</div>
		</div>
	);
};

export default Login;
