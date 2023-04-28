import { useState, useEffect } from "react";
import axios from "axios";
import tweetService from "./Services";
import Tweet from "./Tweet";

const TweetFeed = () => {
  const tweetServices = new tweetService();
  const [tweets, setTweets] = useState([]);
  const getTweetList = () => {
    axios
      .get("http://localhost:4000/api/tweets")
      .then((res) => {
        setTweets(res.data.reverse());
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getTweetList();
  }, [tweets]);
  const deleteTweet = (tweetId) => {
    tweetServices.deleteTweet(tweetId);
    // getTweetList();
  };
  return (
    <>
      <div>
        {tweets &&
          tweets.map((tweet, idx) => (
            <div key={idx}>
              {/* <h5>
                {tweet.createdBy} @ <span>{tweet.createdAt}</span>
              </h5>
              <button onClick={() => deleteTweet(tweet._id)}>
                Delete Tweet
              </button>

              <p>{tweet.tweet}</p> */}
              <Tweet
                tweet={tweet.tweet}
                createdAt={tweet.createdAt}
                createdBy={tweet.createdBy}
                onDelete={() => deleteTweet(tweet._id)}
              />
            </div>
          ))}
      </div>
    </>
  );
};
export default TweetFeed;
