import {logoutB} from "../Back/logoutb";



function Logout() {
    // const cookies = new Cookies();
    // // nie działa sprawdzić czemu ....
    // cookies.set('user',null, {path: '/'});
    logoutB();
    alert("wylogowano");
    return (
        <p>logout</p>

    )
}

export default Logout;