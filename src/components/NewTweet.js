import { useState } from "react";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

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
        {/* <form onSubmit={handleSubmit}> */}
        {/* <label>Type New Tweet..</label>
          <input
            type="text"
            onChange={handleChange}
            name="tweet"
            value={newtweet.tweet}
          ></input>
          <input type="submit" value="submit"></input> */}
        <Box sx={{}} autoComplete="off">
          <form onSubmit={handleSubmit}>
            <TextField
              id="filled-multiline-static"
              label="Tweet Something"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              onChange={handleChange}
              name="tweet"
              value={newtweet.tweet}
              required
            ></TextField>
            <Fab type="submit" size="small" color="secondary" aria-label="add">
              <AddIcon />
            </Fab>
          </form>
        </Box>
        {/* </form> */}
      </div>
    </>
  );
};
export default NewTweet;
