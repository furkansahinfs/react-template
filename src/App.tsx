import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./App.scss";
import { isAuthenticated } from "./helpers";
import Login from "./pages/auth/Login/Login";

const App = () => {
	const [isAuth, setIsAuth] = useState<boolean>(false);
	const navigate = useNavigate();
	useEffect(() => {
		(async () => {
			setIsAuth(await isAuthenticated());
		})();
	}, []);

	if (!isAuth) {
		console.log("asd");
		navigate("/login");
	}
	return isAuth ? (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit
					<code>src/App.tsx</code>
					and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	) : (
		<Login />
	);
};

export default App;
