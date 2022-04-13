import React, {useEffect, useState} from "react";
import "./CSS/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import {db,auth} from "../DBconn/firebase";
import {useHistory} from "react-router-dom"


//Wstawianie postów na stronę
function Feed() {

    //history push
    let history = useHistory();

    //autoryzacja
    auth.onAuthStateChanged((user) => {
        //const cookies = new Cookies();
        //const userr = cookies.get('user')
        let sessionTimeout = null;
        if (user) {

            //test z sesja
            user.getIdTokenResult().then((idTokenResult) => { //Pobierz token użytkownaika i zmień
                setTimeout(() => auth.signOut(), 100000); //Ustaw czas zakończenia dla połączenia (działanie czyli wyloguj, czas w ms)
            } );

        } else {
            sessionTimeout && clearTimeout(sessionTimeout);
            sessionTimeout = null;
            // User is signed out
            // Przekieruj do logowania
            //alert("Sesja wygasła"); //Nie wiem dlaczego ale x razy wyskakuje że sesja wygasła pewnie przez ładowanie komponentów dlatego kom
            history.push('/login');
        }
    });

    const [posts, setPosts] = useState([]);

    //TODO :::: order by date
    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => {
            setPosts(snapshot.docs.map((doc) => doc.data()));
        });
    }, []);


    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            {posts.map((post) => (
                <Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        </div>
    );
}

export default Feed;