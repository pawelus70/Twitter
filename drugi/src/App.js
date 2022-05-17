import React from "react";
import "./Front/CSS/App.css";
import Feed from "./Front/Feed";
import Sidebar from "./Front/Sidebar";
import Widgets from "./Front/Widgets";
import Loginn from "./Front/Loginn";
import Registern from "./Front/Registern";
import Logout from "./Front/logout";
import Profile from "./Front/profile";
import RPassword from "./Front/rPassword"
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// Initialize Firebase Authentication and get a reference to the service
function App() {
    //Wgranie elementów na stronę
    return (
        <BrowserRouter>
            <div className="app">
                <Switch>
                    <Route exact path="/">
                        <Sidebar/>
                        <Feed/>
                        <Widgets/>
                    </Route>
                    <Route path="/logout">
                        <Logout/>
                    </Route>
                    <Route path="/profile">
                        <Sidebar/>
                        <Profile/>
                        <Widgets/>
                    </Route>
                    <Route path="/Loginn">
                        <Loginn />
                    </Route>
                    <Route path="/Registern">
                        <Registern />
                    </Route>
                    <Route path="/reset">
                        <RPassword />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;