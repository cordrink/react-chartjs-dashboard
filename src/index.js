import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardFinance from "./Pages/DashboardFinance/DashboardFinance";
import DashboardEmployees from "./Pages/DashboardEmployees/DashboardEmployees";
import DashboardContextProvider from "./context/DashboardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DashboardContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<DashboardFinance />} />
            <Route
              path="/dashboardEmployees"
              element={<DashboardEmployees />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </DashboardContextProvider>
  </React.StrictMode>
);
