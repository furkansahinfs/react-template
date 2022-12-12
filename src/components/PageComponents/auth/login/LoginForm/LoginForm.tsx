import React, { useState } from "react";
import * as Yup from "yup";
import { Box, CardActions } from "@mui/material";
import { Form, FormikProvider, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ActivityIndicator, Button, TextField as Input } from "../../../..";
import Header from "./Header";
import { useTheme } from "../../../../../theme";
import { sendRequest } from "./LoginForm.helper";
import { useTranslateFunction } from "../../../../../hooks";

const LoginForm = () => {
	const [showLoading, setShowLoading] = useState<boolean>(false);
	const navigate = useNavigate();
	const translate = useTranslateFunction();
	const { colors } = useTheme();

	const LoginSchema = Yup.object().shape({
		email: Yup.string()
			.email(translate("pages.login.yup.emailFeedback"))
			.required(translate("pages.login.yup.emailRequired")),
		password: Yup.string()
			.required(translate("pages.login.yup.passwordRequired"))
			.matches(
				// eslint-disable-next-line no-useless-escape
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
				translate("pages.login.yup.passwordFeedback"),
			),
	});

	// eslint-disable-next-line no-shadow
	async function submit(values: {
		email: string;
		password: string;
		remember: boolean;
	}) {
		setShowLoading(true);
		await sendRequest(values.email, values.password, navigate);
		setShowLoading(false);
	}

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			remember: true,
		},
		validationSchema: LoginSchema,
		onSubmit: (values) => submit(values),
	});
	const { errors, touched, values, getFieldProps } = formik;

	return (
		<div
			className="container-fluid d-flex align-items-center"
			style={{
				backgroundColor: colors.card,
			}}
		>
			{showLoading && <ActivityIndicator />}
			<FormikProvider value={formik}>
				<Form
					autoComplete="off"
					noValidate
					onSubmit={formik.handleSubmit}
					className="col-md-8 mx-auto"
					onChange={formik.handleChange}
				>
					<Header />
					<div id="login-form-card-content" className=" mx-auto">
						<Box id="login-form-box-content-email" className="my-4">
							<Input
								variant="outlined"
								placeholderText={translate("pages.login.email")}
								value={getFieldProps("email").value}
								onChange={(e) => formik.setFieldValue("email", e)}
								type="email"
								error={Boolean(touched.email && errors.email)}
								helperText={touched.email && errors.email}
							/>
						</Box>

						<Box id="login-form-box-content-password" className="my-4">
							<Input
								variant="outlined"
								placeholderText={translate("pages.login.password")}
								value={getFieldProps("password").value}
								onChange={(e) => formik.setFieldValue("password", e)}
								type="password"
								error={Boolean(touched.password && errors.password)}
								helperText={touched.password && errors.password}
							/>
						</Box>
						<CardActions
							id="login-form-card-actions"
							className="mx-auto my-auto"
						>
							<Button
								variant="contained"
								size="large"
								onPressFunction={formik.handleSubmit}
								text={translate("pages.login.submit")}
							/>
						</CardActions>
					</div>
				</Form>
			</FormikProvider>
		</div>
	);
};

export default LoginForm;
