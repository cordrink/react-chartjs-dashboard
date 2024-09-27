import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";

export default function App() {
    return (
        <>
            <Sidebar/>
            <Outlet />
        </>
    );
}
