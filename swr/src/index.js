import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SWRConfig } from "swr";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( //3.adım global olarak fetcher fonksiyonu tanımla, useSwr da  fetcher vermene gerek yok.
  <React.StrictMode>
    <SWRConfig 
     value={{
      fetcher: (url, init) => fetch(url).then(response => response.json())
      }}
    >
      <App />
    </SWRConfig>
  </React.StrictMode>
);


export function fetcher2(url) {
  return fetch(url).then(response => response.json());
}

