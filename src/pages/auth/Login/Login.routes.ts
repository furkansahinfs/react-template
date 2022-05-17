import { lazy } from "react";
import { DynamicRoute } from "../../../providers/ReduxRouteProvider/types";

const routes: DynamicRoute[] = [
	{
		key: "login",
		path: "/login",
		role: "UNAUTHENTICATED",
		component: lazy(() => import("./Login")),
	},
];

export default routes;
