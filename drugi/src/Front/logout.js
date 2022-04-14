import {logoutB} from "../Back/logoutb";



function Logout() {
    //wylogowanie
    logoutB();
    alert("wylogowano");
    return (
        <p>logout</p>

    )
}

export default Logout;