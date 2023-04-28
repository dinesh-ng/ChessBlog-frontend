import axios from "axios";
class tweetService {
  deleteTweet = async (tweetId) => {
    await axios
      .delete(`http://localhost:4000/api/tweets/${tweetId}`)
      .then(() => console.log("Tweet Deleted"))
      .catch((err) => console.log(err));
  };
}
export default tweetService;
