import React, {useEffect, useState} from "react";
import {auth} from "../DBconn/firebase";
import {useHistory} from "react-router-dom"



function LoginB (email, password)
{

  // let history = useHistory();
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            //przekieruj do feeda
            //history.push('/');

        })
        .catch((error) => {
            //nie udało się zalogować
            var errorCode = error.code;
            var errorMessage = error.message;
            //Wyświetl komunikat o problemie
            alert(errorCode, errorMessage)

        });

}
export {LoginB};