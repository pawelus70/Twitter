import {auth} from "../DBconn/firebase";

function logoutB()
{
    const wyloguj = auth.onAuthStateChanged((user) => {
        user.getIdTokenResult().then((idTokenResult) => { //Pobierz token użytkownaika i zmień
            auth.signOut(); //Wyloguj użytkownika
        });
    });
}
export {logoutB}