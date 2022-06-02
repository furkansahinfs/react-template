import { useSelector } from "react-redux";
import { MyDarkTheme, MyDefaultTheme } from "./themes";
import { ThemeState } from "../store/theme";

const useTheme = () => {
	const themeState = useSelector((state: { theme: ThemeState }) => state.theme);
	return themeState.theme === "DARK" ? MyDefaultTheme : MyDarkTheme;
};

export default useTheme;
