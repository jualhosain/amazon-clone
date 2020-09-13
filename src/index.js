import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer, { init } from "./reducer";
import { StateProvider } from "./StateProvider";

ReactDOM.render(
    <StateProvider init={init} reducer={reducer}>
      <App />
    </StateProvider>,
  document.getElementById("root")
);
