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
        let sessionTimeout = null;
        if (user) {
            user.getIdTokenResult().then((idTokenResult) => { //Pobierz token użytkownaika i zmień
                setTimeout(() => auth.signOut(), 1000000); //Ustaw czas zakończenia dla połączenia (działanie czyli wyloguj, czas w ms)
            } );
        } else {
            // Przekieruj do logowania
            sessionTimeout && clearTimeout(sessionTimeout);
            sessionTimeout = null;
            // User is signed out
            history.push('/Loginn');
        }
    });
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("date", "desc").onSnapshot((snapshot) => {
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
                    id={post.id} //id postu
                />
            ))}
        </div>
    );
}

export default Feed;