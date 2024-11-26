import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, Store } from "./state/store";
import { PersistGate } from "redux-persist/integration/react";
import { queryClient } from "./config";
import { QueryClientProvider } from "react-query";
// import { Store } from "./states/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <PersistGate persistor={persistor}>
      <Provider store={Store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </PersistGate>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
