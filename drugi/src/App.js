import React from "react";
import "./App.css";
//Import elementów
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./login"
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
    //Wgranie elementów na stronę
    return (
        <BrowserRouter>
            <div className="app">
                <Sidebar/>

                <Switch>
                    <Route path={"/feed"} component={Feed}/>
                    <Route path={"/login"} component={Login}/>
                </Switch>

                <Widgets/>
            </div>
        </BrowserRouter>


    );
}

export default App;