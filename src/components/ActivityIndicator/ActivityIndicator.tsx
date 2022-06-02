import React from "react";
import { CircularProgress } from "@mui/material";
import "./ActivityIndicator.scss";

const Indicator = () => {
	return (
		<CircularProgress className="position-absolute start-50 top-50 loading" />
	);
};
export default Indicator;
