import { assocPath } from "ramda";

export function ramdaObjectValueChange(
	gottenObj: any,
	pathStr: string,
	value: any,
) {
	return assocPath(pathStr.split("."), value, gottenObj);
}
