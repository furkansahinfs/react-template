import api from "../../api";
import { store } from "../../store";
import { languageAdd, languageClear } from "../../store/language";

/**
 * Get the language from Redux
 */
export function getLanguage() {
	return store.getState().language;
}

/**
 * That function runs at first load of app / after language selection process
 * Get the language from AsyncStorage and load to the redux
 *
 */
export function loadLanguageToRedux() {
	try {
		const language = localStorage.getItem("LANGUAGE");
		api.setLanguage(language || ""); // set api language
		if (language) {
			store.dispatch(languageAdd(language)); // Update language from reducer
		} else {
			store.dispatch(languageClear()); // Update language from reducer
		}
	} catch (error) {
		console.log(error);
	}
}

/**
 * Get the language as parameter
 * Save it to the AsyncStorage
 *
 * @param language = selected languagae
 */
export function setLanguage(language: string) {
	try {
		localStorage.setItem("LANGUAGE", language);
	} catch (error) {
		console.log(error);
	}
}

/**
 * The function change language choice for Redux and AsyncStorage
 */
export function changeLanguage(gottenLang?: string) {
	if (gottenLang) {
		setLanguage(gottenLang);
	} else {
		const lang = getLanguage().language;
		const isTR = lang === "tr-TR" || lang === "";
		setLanguage(isTR ? "en-US" : "tr-TR");
	}

	loadLanguageToRedux();
	console.log("selected lang", getLanguage().language);
}

export default getLanguage;
