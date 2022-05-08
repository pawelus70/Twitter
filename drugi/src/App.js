import React from "react";
import "./Front/CSS/App.css";
//Import elementów
import Feed from "./Front/Feed";
import Sidebar from "./Front/Sidebar";
import Widgets from "./Front/Widgets";
// import Login from "./Front/login";
import Loginn from "./Front/Loginn";
// import Register from "./Front/register";
import Registern from "./Front/Registern";
import Logout from "./Front/logout";
import Profile from "./Front/profile";


import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Initialize Firebase Authentication and get a reference to the service


function App() {
    //Wgranie elementów na stronę
    return (
        <BrowserRouter>
            <div className="app">
                {/*<Loginn/>*/}
                {/*<Sidebar/>*/}

                {/*<Route path={"/Loginn"} component={Loginn}/>*/}
                {/*<Route path={"/Registern"} component={Registern}/>*/}

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
                </Switch>


                {/*<Switch>*/}
                {/*    <Route path={"/feed"} component={Feed}/>*/}
                {/*    <Route path={"/login"} component={Login}/>*/}
                {/*    <Route path={"/register"} component={Register}/>*/}
                {/*    <Route path={"/logout"} component={Logout}/>*/}
                {/*    <Route path={"/profile"} component={Profile}/>*/}
                {/*</Switch>*/}

                {/*<Widgets/>*/}
            </div>
        </BrowserRouter>


    );
}

export default App;