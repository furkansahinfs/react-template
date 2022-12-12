import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import tr from "./tr";
import en from "./en";
import { getLanguage } from "../../helpers";

const resources = {
	"tr-TR": {
		translation: tr,
	},
	"en-US": {
		translation: en,
	},
};

export const initI18Next = () => {
	const lng = getLanguage().language ? getLanguage().language : "tr-TR";

	return i18next.use(initReactI18next).init({
		fallbackLng: "en",
		debug: true,
		resources,
		lng,
	});
};

export default i18next;
