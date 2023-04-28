import { useState } from "react";
import axios from "axios";

const NewTweet = () => {
  const [newtweet, setNewTweet] = useState({
    tweet: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTweet({ ...newtweet, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/api/tweets/", newtweet)
      .then((res) => {
        console.log(res.status);
      })
      .catch((err) => console.log(err));
    setNewTweet({ tweet: "" });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>Type New Tweet..</label>
          <input
            type="text"
            onChange={handleChange}
            name="tweet"
            value={newtweet.tweet}
          ></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
    </>
  );
};
export default NewTweet;
