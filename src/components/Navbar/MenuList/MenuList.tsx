import * as React from "react";
import { SwipeableDrawer } from "@mui/material";
import { useTheme } from "../../../theme";
import { NavbarMenuItem } from "../../../interfaces/interfaces";
import ListBox from "./ListBox";

type Anchor = "top" | "left" | "bottom" | "right";

interface DrawerMenuProps {
	isOpen: boolean;
	setIsOpen: (val: boolean) => void;
	menuList?: Array<NavbarMenuItem>;
}

const DrawerMenu = ({ isOpen, setIsOpen, menuList }: DrawerMenuProps) => {
	const selectedAnchor: Anchor = "left";
	const { colors } = useTheme();
	const toggleDrawer =
		(anchor: Anchor, open: boolean) =>
		(event: React.KeyboardEvent | React.MouseEvent) => {
			if (
				event &&
				event.type === "keydown" &&
				((event as React.KeyboardEvent).key === "Tab" ||
					(event as React.KeyboardEvent).key === "Shift")
			) {
				return;
			}

			setIsOpen(open);
		};

	return (
		<SwipeableDrawer
			anchor={selectedAnchor}
			open={isOpen}
			onClose={toggleDrawer(selectedAnchor, false)}
			onOpen={toggleDrawer(selectedAnchor, true)}
			sx={{
				input: { color: colors.text },
				"& .css-4t3x6l-MuiPaper-root-MuiDrawer-paper": {
					backgroundColor: colors.navbar,
				},
			}}
		>
			<ListBox
				anchor={selectedAnchor}
				menuList={menuList}
				toggleDrawer={toggleDrawer}
			/>
		</SwipeableDrawer>
	);
};

export default DrawerMenu;
