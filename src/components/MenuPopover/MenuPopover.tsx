import React from "react";
import { Popover, SxProps, Theme } from "@mui/material";
import { useTheme } from "../../theme";

interface MenuPopoverProps {
	children: React.ReactNode;
	sx?: SxProps<Theme>;
	open: boolean;
	onClose: () => void;
	anchorEl: Element | null;
}

const MenuPopover = ({
	children,
	sx,
	open,
	onClose,
	anchorEl,
}: MenuPopoverProps) => {
	const { colors } = useTheme();
	return (
		<Popover
			open={open}
			anchorEl={anchorEl}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			transformOrigin={{ vertical: "top", horizontal: "right" }}
			PaperProps={{
				sx: {
					p: 1,
					width: 200,
					overflow: "inherit",
					backgroundColor: colors.background,
					color: colors.text,
					...sx,
				},
			}}
			onClose={onClose}
		>
			{children}
		</Popover>
	);
};

export default MenuPopover;
