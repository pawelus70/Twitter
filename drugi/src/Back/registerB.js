import {db, auth} from "../DBconn/firebase";

function registerB(email, password, firstName, lastName, userName) {
    auth.createUserWithEmailAndPassword(email, password,)
        .then((userCredential) => {
            //stworzenie użytkownika firebase
            var user = userCredential.user;
            //dodanie więcej informacji o użytkowniku
            db.collection("users").doc(user.uid)
                .set({
                    firstName: firstName,
                    lastName: lastName,
                    userName: userName,
                })
            alert("register")
            //history.push('/feed');
        })
        //nieudana opracaja
        .catch((error) => {
            //Wyłap błedy i daj allert
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage)
        });
}


export {registerB};