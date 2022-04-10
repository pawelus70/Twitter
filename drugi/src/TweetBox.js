import {Avatar, Button} from "@material-ui/core";
import React, {useState} from "react";
import {db, auth} from "./firebase";
import "./TweetBox.css";
import {useHistory} from "react-router-dom"
import Cookies from 'universal-cookie';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    //Cokies do authoryzacji
    const cookies = new Cookies();
    var user = cookies.get('user')
    //history push
    let history = useHistory();


    //dodanie posta
    const sendTweet = (e) => {
        e.preventDefault();
        //autoryazajca użytkownika
        auth.onAuthStateChanged((user) => {
            if (user) {

                var docRef = db.collection("users").doc(user.uid);
                docRef.get().then((doc) => {
                    if (doc.exists) {
                        console.log(doc.data().firstName);
                        db.collection("posts").add({
                            username: doc.data().firstName+" "+ doc.data().lastName,
                            displayName: doc.data().userName,
                            avatar:
                                "https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62",
                            verified: true,
                            text: tweetMessage,
                            image: tweetImage,
                            date: Date.now()
                        });

                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });

                //testowy wpis użytkownika happystark

                setTweetMessage("");
                setTweetImage("");

            } else {
                // User is signed out
                // Przekieruj do logowania
                alert("Sesja wygasła");
                history.push('/login');
            }
        });
    }


//Okno dodawania postu z zawartością i obrazkiem w postaci url
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/c0.33.200.200a/p200x200/51099653_766820610355014_8315780769297465344_o.jpg?_nc_cat=101&_nc_sid=7206a8&_nc_ohc=c1qBHkwAgVsAX8KynKU&_nc_ht=scontent-bom1-1.xx&oh=340b05bea693dd1671296e0c2d004bb3&oe=5F84CA62"/>
                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        placeholder="What's happening?"
                        type="text"
                    />
                </div>
                <input
                    placeholder="Optional: Enter image URL"
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    type="text"
                    className="tweetBox__imageInput"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;