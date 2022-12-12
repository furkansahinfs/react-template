import { useTranslation } from "react-i18next";

export const useTranslateFunction = () => {
	const { t } = useTranslation();
	return t;
};
