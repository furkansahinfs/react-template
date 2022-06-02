import React from "react";
import { Images } from "../../../../../assets";
import { I18N } from "../../../../../locales";
import { useTheme } from "../../../../../theme";
import "./Header.scss";

const Header: React.FunctionComponent = () => {
	const { colors } = useTheme();
	return (
		<div className="d-flex justify-content-center row">
			<img
				src={Images.logo}
				alt="Logo"
				className="image-responsive"
				style={{ maxWidth: "30%", height: "auto" }}
			/>
			<div className="row text-center my-2 h4" style={{ color: colors.text }}>
				<strong>{I18N.t("pages.login.header.welcome")}</strong>
				<sub className="my-2">{I18N.t("pages.login.header.description")}</sub>
			</div>
		</div>
	);
};

export default Header;
