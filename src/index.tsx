import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

const GlobalStyle = createGlobalStyle`
  body {
    background-color: tomato;
    color: white;
    font-family: 'Abril Fatface', cursive;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle />
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
