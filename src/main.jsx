import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UserReducer from "./UserReducer";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
const store = configureStore({
  reducer: {
    users: UserReducer,
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
