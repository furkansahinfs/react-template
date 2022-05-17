import { DynamicNestedRoute } from "../../providers/ReduxRouteProvider/types";

import loginRoutes from "./Login";

const routes: DynamicNestedRoute[] = [...loginRoutes];

export default routes;
