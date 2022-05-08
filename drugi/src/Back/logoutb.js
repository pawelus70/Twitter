import {auth} from "../DBconn/firebase";

function logoutB()
{
    const wyloguj = auth.signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
export {logoutB}