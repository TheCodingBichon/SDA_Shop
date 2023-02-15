import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDdurVyR73HxmCmzYbBMdlc9XDjYQ2EDKc",
  authDomain: "sda-shop-e0111.firebaseapp.com",
  projectId: "sda-shop-e0111",
  storageBucket: "sda-shop-e0111.appspot.com",
  messagingSenderId: "606965226876",
  appId: "1:606965226876:web:69d619289bb4012d3f18f9",
};

const app = initializeApp(firebaseConfig);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
