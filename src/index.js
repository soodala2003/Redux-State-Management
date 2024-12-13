import React from 'react';
//import { createRoot } from 'react-dom/client';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import './index.css';

import { fetchUsers } from "./features/users/usersSlice";
import { worker } from "./api/server";

async function main() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: "bypass" });

  store.dispatch(fetchUsers());

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

main();