import { all, AllEffect, ForkEffect } from "redux-saga/effects";

function* rootSaga(): Generator<
	AllEffect<
		| Generator<AllEffect<ForkEffect<void>>, void, unknown>
		| Generator<ForkEffect<void>, void, unknown>
	>,
	void,
	unknown
> {
	yield all([]);
}

export default rootSaga;
