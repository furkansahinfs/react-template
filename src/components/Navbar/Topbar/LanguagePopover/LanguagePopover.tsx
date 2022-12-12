import React, { useRef, useState } from "react";
import { alpha } from "@mui/material/styles";
import { MenuItem, Stack, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuPopover } from "../../../MenuPopover";
import { changeLanguage, getLanguage } from "../../../../helpers";

const LANGS = [
	{
		value: "en-US",
		label: "English",
		icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/United-kingdom_flag_icon_round.svg",
	},
	{
		value: "tr-TR",
		label: "Türkçe",
		icon: "https://upload.wikimedia.org/wikipedia/commons/7/71/Roundel_flag_of_Turkey.svg",
	},
];

const LanguagePopover = () => {
	const anchorRef = useRef(null);
	const lang = getLanguage().language;
	const navigate = useNavigate();
	const [open, setOpen] = useState<boolean>(false);

	const handleMenuOpen = (val: boolean) => {
		setOpen(val);
	};

	return (
		<div>
			<IconButton
				ref={anchorRef}
				onClick={() => handleMenuOpen(true)}
				sx={{
					padding: 0,
					width: 40,
					height: 40,
					...(open && {
						bgcolor: (theme) =>
							alpha(
								theme.palette.primary.main,
								theme.palette.action.focusOpacity,
							),
					}),
				}}
			>
				<img
					src={lang === "en-US" ? LANGS[0].icon : LANGS[1].icon}
					width="60%"
					height="60%"
					alt={lang}
				/>
			</IconButton>

			<MenuPopover
				open={open}
				onClose={() => handleMenuOpen(false)}
				anchorEl={anchorRef.current}
				sx={{
					mt: 1.5,
					ml: 0.75,
					width: 180,
					"& .MuiMenuItem-root": {
						px: 1,
						typography: "body2",
						borderRadius: 0.75,
					},
				}}
			>
				<Stack spacing={0.75}>
					{LANGS.map((option) => (
						<MenuItem
							key={option.value}
							selected={option.value === lang}
							onClick={() => {
								changeLanguage(option.value);
								handleMenuOpen(false);
								navigate(0);
							}}
						>
							<img
								src={option.icon}
								alt={LANGS[0].label}
								className="image-responsive p-1"
								width="20%"
								height="20%"
							/>

							{option.label}
						</MenuItem>
					))}
				</Stack>
			</MenuPopover>
		</div>
	);
};

export default LanguagePopover;
