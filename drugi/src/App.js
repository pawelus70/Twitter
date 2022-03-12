import React from "react";
import "./App.css";
//Import elementów
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function App() {
    //Wgranie elementów na stronę
    return (
        <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    );
}

export default App;