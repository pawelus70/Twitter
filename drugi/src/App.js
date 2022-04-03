import React from "react";
import "./App.css";
//Import elementów
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";
import Login from "./login";
import Register from "./register";
import Logout from "./logout";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Initialize Firebase Authentication and get a reference to the service


function App() {
    //Wgranie elementów na stronę
    return (
        <BrowserRouter>
            <div className="app">
                <Sidebar/>

                <Switch>
                    <Route path={"/feed"} component={Feed}/>
                    <Route path={"/login"} component={Login}/>
                    <Route path={"/register"} component={Register}/>
                    <Route path={"/logout"} component={Logout}/>
                </Switch>

                <Widgets/>
            </div>
        </BrowserRouter>


    );
}

export default App;