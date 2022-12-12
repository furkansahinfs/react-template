import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { I18nextProvider } from "react-i18next";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store";
import { Router } from "./pages";
import { persistor } from "./store/store";
import { ActivityIndicator, SimpleSnackbar } from "./components";
import { initI18Next } from "./locales/language/_i18n";
import { I18N } from "./locales";

const onBeforeLift = () => {
	initI18Next();
};

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				persistor={persistor}
				loading={<ActivityIndicator />}
				onBeforeLift={onBeforeLift}
			>
				<I18nextProvider i18n={I18N}>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
					<SimpleSnackbar />
				</I18nextProvider>
			</PersistGate>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
