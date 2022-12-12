import React from "react";

import "./Login.scss";
import { useTheme } from "../../../theme";
import { LoginForm, WelcomeCard } from "../../../components";

const Login = () => {
	const { colors } = useTheme();

	return (
		<div style={{ backgroundColor: colors.background }}>
			<div className="row m-0 ">
				<div className="col-lg-4 d-lg-flex">
					<WelcomeCard />
				</div>
				<div className="col mx-2 d-flex vh-100 shadow">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
