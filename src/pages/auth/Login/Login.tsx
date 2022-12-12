import React from "react";
import "./Login.scss";
import { useTheme } from "../../../theme";
import { LoginForm, WelcomeCard } from "../../../components";

const Login = () => {
	const { colors } = useTheme();

	return (
		<div style={{ backgroundColor: colors.background }}>
			<div className="flex flex-wrap h-screen m-0 ">
				<div className="w-full h-1/10 lg:w-1/3 lg:h-full">
					<WelcomeCard />
				</div>
				<div className="responsive max-w-full flex-1 flex-grow px-4 mx-2 flex vh-100 shadow">
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
