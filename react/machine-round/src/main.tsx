import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./core/auth/AuthContext";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* 
    we use redux library to provide the store to the app if 
    we don't use it add we have to write more boilerplate code and
    w'll have subscribe the store whereever we need the value
    */}
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <App />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
