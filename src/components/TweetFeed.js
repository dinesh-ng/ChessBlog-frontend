import { useState, useEffect } from "react";
import axios from "axios";
import tweetService from "./Services";

const TweetFeed = () => {
  const tweetServices = new tweetService();
  const [tweets, setTweets] = useState([]);
  const getTweetList = () => {
    axios
      .get("http://localhost:4000/api/tweets")
      .then((res) => setTweets(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTweetList();
  }, []);
  const deleteTweet = (tweetId) => {
    tweetServices.deleteTweet(tweetId);
    getTweetList();
  };
  return (
    <>
      <div>
        {tweets &&
          tweets.map((tweet, idx) => (
            <div key={idx}>
              <h5>
                {tweet.createdBy} @ <span>{tweet.createdAt}</span>
              </h5>
              <button onClick={() => deleteTweet(tweet._id)}>
                Delete Tweet
              </button>

              <p>{tweet.tweet}</p>
            </div>
          ))}
      </div>
    </>
  );
};
export default TweetFeed;
