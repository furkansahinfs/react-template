import React, { useRef, useState } from "react";
import {
	Box,
	Divider,
	Typography,
	Stack,
	MenuItem,
	IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MenuPopover } from "../../../MenuPopover";
import { Images } from "../../../../assets";
import { deleteUser, getStoredUser } from "../../../../helpers";
import { useTranslateFunction } from "../../../../hooks";

interface MenuOptionProps {
	label: string;
	icon: string;
	linkTo: string;
}

const AccountPopover = () => {
	const anchorRef = useRef(null);
	const user = getStoredUser();
	const navigate = useNavigate();
	const translate = useTranslateFunction();

	const [open, setOpen] = useState<boolean>(false);

	const handleMenuOpen = (val: boolean) => {
		setOpen(val);
	};

	const MENU_OPTIONS: Array<MenuOptionProps> = [
		{
			label: translate("components.accountPopover.dashboard"),
			icon: "eva:home-fill",
			linkTo: "/",
		},
		{
			label: translate("components.accountPopover.profile"),
			icon: "eva:person-fill",
			linkTo: "/profile",
		},
		{
			label: translate("components.accountPopover.settings"),
			icon: "eva:settings-2-fill",
			linkTo: "/settings",
		},
	];

	return (
		<div>
			<IconButton ref={anchorRef} onClick={() => handleMenuOpen(true)}>
				<img
					src={Images.defaultProfilePicture}
					alt="photoURL"
					className="image-responsive p-0 rounded-full"
					width="30"
					height="30"
				/>
			</IconButton>

			<MenuPopover
				open={open}
				anchorEl={anchorRef.current}
				onClose={() => handleMenuOpen(false)}
			>
				<div>
					<Box sx={{ my: 1.5, px: 2.5 }}>
						<Typography variant="subtitle2" noWrap>
							{user?.user}
						</Typography>
					</Box>

					<Divider sx={{ borderStyle: "dashed" }} />

					<Stack className="p-1">
						{MENU_OPTIONS.map((option: MenuOptionProps) => (
							<MenuItem
								key={option.label}
								onClick={() => {
									navigate(option.linkTo);
									handleMenuOpen(false);
								}}
							>
								{option.label}
							</MenuItem>
						))}
					</Stack>

					<Divider sx={{ borderStyle: "dashed" }} />

					<MenuItem
						onClick={() => {
							deleteUser();
							navigate("/");
							handleMenuOpen(false);
						}}
						className="m-1"
					>
						{translate("components.accountPopover.logout")}
					</MenuItem>
				</div>
			</MenuPopover>
		</div>
	);
};

export default AccountPopover;
