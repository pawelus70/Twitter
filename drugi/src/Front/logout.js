import {logoutB} from "../Back/logoutb";
import {Redirect} from "react-router-dom"

function Logout() {
    //wylogowanie
    logoutB();
    return (
        <Redirect to={'/Loginn'}/>
    )
}

export default Logout;