import api, { RefreshToken } from "../api";
import { loadUserCredentialsToRedux, setUserCredentials } from ".";
import {
	deleteUserCredentials,
	getUserCredentials,
} from "./store/userCredentials";

/**
 * Get a new token from server and save it to the keychain
 * and update redux
 *
 */
async function tokenRefresher() {
	// request new token
	const response: any = await RefreshToken(getUserCredentials().access_token);
	if (response?.access_token) {
		// save credentials to the keychain
		await setUserCredentials(response.access_token);
		// and set the redux with new data
		await loadUserCredentialsToRedux();
		// set access_token
		api.setToken(response.access_token);
		return true;
	}
	await deleteUserCredentials();
	return false;
}

export default tokenRefresher;
