import React, {useEffect, useState} from "react";
import {db, auth} from "./firebase";
import {useHistory} from "react-router-dom";
import Cookies from 'universal-cookie';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    let history = useHistory();


    const sendRegister = (e) => {


        e.preventDefault()

        //Sprawdzenie czy użytkownik wypełnił formularz poprawnie
        if (password === repeatPassword && email !== "" && firstName !== "" && lastName !== "" && username !== "" && password !== "") {

           auth.createUserWithEmailAndPassword(email, password, )
                .then((userCredential) => {
                    //stworzenie użytkownika firebase
                    var user = userCredential.user;
                    //dodanie więcej informacji o użytkowniku
                    db.collection("users").doc(user.uid)
                        .set({
                            firstName: firstName,
                            lastName: lastName,
                            userName: username,
                        })
                    //Stworzenie cookies
                    const cookies = new Cookies();
                    cookies.set('user', user, { path: '/',maxAge :1200 }); //dostępne na całej stronie, 20 minut
                    //przekieruj do feeda
                    history.push('/feed');
                })
               //nieudana opracaja
                .catch((error) => {
                    //Wyłap błedy i daj allert
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    alert(errorCode,errorMessage)
                });
        } else {
            //Daj alert jeśli hasło się nie zgadza
            alert("podane hasła się nie zgadzaja/brak danych")
            setPassword("");
            setRepeatPassword("");
        }
        //Czyszczenie formularza
        /* setFirstName("");
         setLastName("");
         setEmail("");
         setUsername("");
         setPassword("");
         setRepeatPassword("");
 */
    }


    return (
        <form>
            <h3>Register</h3>
            <div className="form-group">
                <label>First Name</label>
                <input value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}
                       placeholder="First Name"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input value={lastName}
                       onChange={(e) => setLastName(e.target.value)}
                       placeholder="Last Name"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Username</label>
                <input value={username}
                       onChange={(e) => setUsername(e.target.value)}
                       placeholder="Username"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>email</label>
                <input value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="Email"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       placeholder="password"
                       type="text"/>
            </div>
            <div className="form-group">
                <label>Repeat Password</label>
                <input value={repeatPassword}
                       onChange={(e) => setRepeatPassword(e.target.value)}
                       placeholder="password"
                       type="text"/>
            </div>
            <button className="btn btn-primary btn-block" onClick={sendRegister}>Register</button>
        </form>
    )
}
;


export default Register;