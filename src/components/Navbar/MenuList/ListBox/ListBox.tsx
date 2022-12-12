import * as React from "react";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from "@mui/material";
import { ContentCopy, CreateSharp, Home } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { NavbarMenuItem } from "../../../../interfaces/interfaces";
import { useTheme } from "../../../../theme";
import { useTranslateFunction } from "../../../../hooks";

type Anchor = "top" | "left" | "bottom" | "right";

interface ListBoxProps {
	anchor: Anchor;
	menuList?: Array<NavbarMenuItem>;
	toggleDrawer: (anchor: Anchor, bool: boolean) => void;
}

interface MenuItem {
	name: string;
	linkTo: string;
	icon?: React.ReactNode;
}

const ListBox = ({ anchor, menuList, toggleDrawer }: ListBoxProps) => {
	const { colors, dark } = useTheme();
	const navigate = useNavigate();
	const translate = useTranslateFunction();

	const menuArray: Array<MenuItem> = menuList || [
		{
			name: translate("components.navbar.menuList.home"),
			linkTo: "/admin",
			icon: <Home color={dark ? "secondary" : "primary"} />,
		},
		{
			name: translate("components.navbar.menuList.contentTypes"),
			linkTo: "/admin/dashboard/content-type-builder/initial",
			icon: <CreateSharp color={dark ? "secondary" : "primary"} />,
		},
		{
			name: translate("components.navbar.menuList.content"),
			linkTo: "/admin/contents",
			icon: <ContentCopy color={dark ? "secondary" : "primary"} />,
		},
	];
	return (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
			}}
			color={colors.text}
		>
			<div
				role="presentation"
				onClick={() => toggleDrawer(anchor, false)}
				onKeyDown={() => toggleDrawer(anchor, false)}
			>
				<List>
					{menuArray.map((menuItem: MenuItem) => (
						<ListItem disablePadding onClick={() => navigate(menuItem.linkTo)}>
							<ListItemButton>
								{menuItem?.icon && <ListItemIcon>{menuItem.icon}</ListItemIcon>}
								<ListItemText primary={menuItem.name} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</div>
		</Box>
	);
};

export default ListBox;
