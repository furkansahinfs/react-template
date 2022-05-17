import { DynamicNestedRoute } from "../providers/ReduxRouteProvider/types";

import loginRoutes from "./auth/Login";

const routes: DynamicNestedRoute[] = [...loginRoutes];

export default routes;
