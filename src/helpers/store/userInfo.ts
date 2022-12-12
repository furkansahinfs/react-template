import { UserProps } from "../../interfaces/interfaces";

const USER_LOCALSTORAGE_KEY = "USER";

export function getStoredUser(): UserProps | null {
	const storedUser = localStorage.getItem(USER_LOCALSTORAGE_KEY);
	return storedUser ? JSON.parse(storedUser) : null;
}

export function setStoredUser(user: UserProps): void {
	localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
}

export function clearStoredUser(): void {
	localStorage.removeItem(USER_LOCALSTORAGE_KEY);
}
