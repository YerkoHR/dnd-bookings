import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import TableList from "./components/TableList";
import { ThemeProvider } from "@zendeskgarden/react-theming";

import "@zendeskgarden/react-tables/dist/styles.css";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <TableList />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
