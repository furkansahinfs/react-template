import { Menu } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { NavbarMenuItem } from "../../interfaces/interfaces";
import { useTheme } from "../../theme";
import MenuList from "./MenuList/MenuList";
import { Topbar } from "./Topbar";

interface NavbarProps {
	navbarMenuList?: Array<NavbarMenuItem>;
}
const Navbar = ({ navbarMenuList }: NavbarProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const { colors, dark } = useTheme();

	return (
		<div>
			<AppBar
				elevation={0}
				position="static"
				style={{ backgroundColor: colors.navbar }}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="Open drawer"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						<Menu color={dark ? "secondary" : "primary"} />
					</IconButton>

					<Topbar />
				</Toolbar>
			</AppBar>
			<MenuList
				isOpen={isMenuOpen}
				setIsOpen={setIsMenuOpen}
				menuList={navbarMenuList}
			/>
		</div>
	);
};

export default Navbar;
