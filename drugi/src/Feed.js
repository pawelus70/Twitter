import React, {useEffect, useState} from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import {db,auth} from "./firebase";
import {useHistory} from "react-router-dom"
import Cookies from 'universal-cookie';

//Wstawianie postów na stronę
function Feed() {


    //pobierz cokiesy
    const cookies = new Cookies();
    var user = cookies.get('user')
    //history push
    let history = useHistory();

    //autoryzacja
    auth.onAuthStateChanged((user) => {
        if (user) {

            var uid = user.uid;
            console.log("Zalogowano")
            // ...

        } else {
            // User is signed out
            // Przekieruj do logowania
            alert("Sesja wygasła");
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