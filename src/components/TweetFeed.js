import { useState, useEffect } from "react";
import axios from "axios";
import tweetService from "./Services";
import Tweet from "./Tweet";
import NewTweet from "./NewTweet";
const feedBoxStyle = {
  backgroundColor: "rgb(162 241 171)",
  margin: "5% auto",
  width: "70%",
  padding: "2%",
  minHeight: "100vh",
};
const tweetFeedStyle = {
  margin: "2% auto",
  width: "80%",
};
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
      <div style={feedBoxStyle}>
        <div style={tweetFeedStyle}>
          <NewTweet />
        </div>
        {tweets &&
          tweets.map((tweet, idx) => (
            <div key={idx} style={tweetFeedStyle}>
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
