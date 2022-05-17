/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import {
	CardHeader,
	Button,
	CardActions,
	TextField,
	CardContent,
	Box,
	Card,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";

import "./LoginForm.scss";

interface LoginFormInput {
	username: string;
	password: string;
}

interface LoginFormProps {
	onSubmit: SubmitHandler<LoginFormInput>;
}

const LoginForm = ({ onSubmit }: LoginFormProps): JSX.Element => {
	const { register, handleSubmit } = useForm<LoginFormInput>();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="button">
			<Card>
				<CardHeader
					className="header"
					title={process.env.REACT_APP_PRODUCT_NAME}
				/>

				<CardContent className="card-content">
					<Box display="flex">
						<Box className="half-input-container">
							<TextField
								name="username"
								type="text"
								margin="none"
								label="pages.login.username"
								placeholder="pages.login.username"
								fullWidth
								required
							/>
						</Box>
					</Box>
					<Box className="full-input-container">
						<TextField
							name="password"
							type="password"
							margin="none"
							label="pages.login.password"
							placeholder="pages.login.password"
							fullWidth
							required
						/>
					</Box>

					<Button
						className="button"
						variant="contained"
						size="large"
						type="submit"
					>
						pages.login.submit
					</Button>
				</CardContent>
			</Card>
		</form>
	);
};

export default LoginForm;
