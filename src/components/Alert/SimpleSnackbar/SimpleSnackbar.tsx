import * as React from "react";
import { Alert, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import { alertClose, AlertState } from "../../../store/alert";
import { store } from "../../../store";

const SimpleSnackbar: React.FunctionComponent = () => {
	const message = useSelector(
		(state: { alert: AlertState }) => state.alert.message,
	);

	const isShown = useSelector(
		(state: { alert: AlertState }) => state.alert.isShown,
	);

	const severity = useSelector(
		(state: { alert: AlertState }) => state.alert.severity,
	);

	const msgArr = message.split("\n");

	const handleClose = (
		event: React.SyntheticEvent | Event,
		reason?: string,
	) => {
		store.dispatch(alertClose());
		if (reason === "clickaway") {
			console.log(event);
		}
	};

	const action = (
		<IconButton
			size="small"
			aria-label="close"
			color="inherit"
			onClick={handleClose}
		>
			<CloseIcon fontSize="small" />
		</IconButton>
	);

	return (
		<div>
			<Snackbar
				open={isShown}
				autoHideDuration={6000}
				onClose={handleClose}
				action={action}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
					{msgArr.length > 0 ? (
						msgArr.map((msg: string) => <p key={msg}>{msg}</p>)
					) : (
						<p>{message}</p>
					)}
				</Alert>
			</Snackbar>
		</div>
	);
};

export default SimpleSnackbar;
