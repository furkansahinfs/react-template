import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware } from "redux";
import reducer from "./reducer";
// import rootSaga from "./saga";
// import preloadedState from "./state";

// const sagaMiddleware = createSagaMiddleware();

export type IRootState = ReturnType<typeof reducer>;
const store = configureStore({
	reducer,
});

/* const store = (async () => {
	const result = createStore(
		rootReducer,
		await preloadedState,
		composeWithDevTools(applyMiddleware(sagaMiddleware)),
	);

	sagaMiddleware.run(rootSaga);

	return result;
})(); */

export default store;
