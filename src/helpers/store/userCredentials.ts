import api, { LogoutRequest } from "../../api";
import { store } from "../../store";
import { authAddToken, authRemoveToken } from "../../store/auth";
import { decrypt, encrypt } from "../cypher";

/**
 * Get the user credentials using redux
 * {access_token: string}
 *
 */
export function getUserCredentials() {
	return store.getState().userCredentials;
}

/**
 * That function runs at first load of website / after login process
 * Get the user credentials from localStorage as encrypted, decrypt it and load to the redux
 *
 */
export async function loadUserCredentialsToRedux() {
	const encryptedToken = localStorage.getItem("CREDENTIALS");
	const decryptedToken = await decrypt(encryptedToken);
	if (typeof decryptedToken === "string") {
		store.dispatch(authAddToken(decryptedToken)); // Update user credentials from reducer
	} else {
		store.dispatch(authRemoveToken()); // Clear access token of user credentials from reducer
		api.setToken(""); // set api token
	}
}

/**
 * Get the access_token as parameter and save it to localStorage as encrypted
 *
 * @param access_token
 */
export async function setUserCredentials(access_token: string) {
	const encryptedToken = await encrypt({ access_token });
	localStorage.setItem("CREDENTIALS", encryptedToken);
}

/**
 * Delete the user credentials from the keychain and update the Redux
 *
 */
export async function deleteUserCredentials() {
	// delete data in keychain
	localStorage.removeItem("CREDENTIALS");
	store.dispatch(authRemoveToken());
	api.setToken("");
}

/**
 * Remove the user credentials from the AsyncStorage
 * and redux, navigate user to the splash screen
 */
export async function logout() {
	// Delete device id from db
	await LogoutRequest().then(async (result: any) => {
		if (result === true) {
			await deleteUserCredentials();
		} else {
			console.log(result);
		}
	});
}

/**
 * Delete the user info and user credential from the storage and update the Redux
 *
 */
export function deleteUser() {
	deleteUserCredentials();
}
