import React from "react";
import { CircularProgress } from "@mui/material";
import "./ActivityIndicator.scss";

const Indicator = () => {
	return <CircularProgress className="absolute top-1/2 left-1/2 loading" />;
};
export default Indicator;
