import React from "react";
import { Stack } from "@mui/material";
import { LanguagePopover } from "./LanguagePopover";
import { AccountPopover } from "./AccountPopover";
import { ThemeIcon } from "../../Icon";

const Topbar = () => {
	return (
		<Stack direction="row" className="flex w-full justify-end items-center">
			<ThemeIcon />
			<LanguagePopover />
			<AccountPopover />
		</Stack>
	);
};

export default Topbar;
