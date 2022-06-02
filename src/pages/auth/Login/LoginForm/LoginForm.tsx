import React from "react";
import { Box, CardActions, Card } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, TextField as Input } from "../../../../components";
import Header from "./Header";
import { I18N } from "../../../../locales";
import { useTheme } from "../../../../theme";
import "./LoginForm.scss";

interface LoginFormInput {
	email: string;
	password: string;
}

interface LoginFormProps {
	onSubmit: SubmitHandler<LoginFormInput>;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
	const { colors } = useTheme();
	const { handleSubmit, control } = useForm<LoginFormInput>();

	return (
		<div className="container-fluid my-auto">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="d-flex justify-content-center"
			>
				<Card
					id="login-form-card"
					className="col-md-6 p-4 shadow"
					style={{ backgroundColor: colors.card }}
				>
					<Header />
					<div id="login-form-card-content" className="w-75 mx-auto">
						<Box id="login-form-box-content-email" className="my-4">
							<Controller
								name="email"
								control={control}
								defaultValue=""
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => (
									<Input
										variant="outlined"
										placeholderText={I18N.t("pages.login.email")}
										value={value}
										onChange={onChange}
									/>
								)}
							/>
						</Box>
						<Box id="login-form-box-content-password" className="my-4">
							<Controller
								name="password"
								control={control}
								defaultValue=""
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => (
									<Input
										variant="outlined"
										placeholderText={I18N.t("pages.login.password")}
										value={value}
										onChange={onChange}
										type="password"
									/>
								)}
							/>
						</Box>
						<CardActions
							id="login-form-card-actions"
							className="mx-auto my-auto"
						>
							<Button
								variant="contained"
								size="large"
								onPressFunction={handleSubmit(onSubmit)}
								text={I18N.t("pages.login.submit")}
							/>
						</CardActions>
					</div>
				</Card>
			</form>
		</div>
	);
};

export default LoginForm;
