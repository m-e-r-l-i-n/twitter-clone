import React, {useState} from 'react';
import {Avatar,Button} from '@material-ui/core';
import './TweetBox.css';
import db from './firebase';

function TweetBox() 
{
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet=(e)=>{
    e.preventDefault();

    db.collection("posts").add({
      username: "thomas",
      displayName: "The Tehcnision",
      avatar: "https://i.ibb.co/Qmvh5BV/images-1.jpg",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://i.ibb.co/Qmvh5BV/images-1.jpg" />
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