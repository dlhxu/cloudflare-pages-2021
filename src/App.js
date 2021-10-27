import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { AppBar, Toolbar, Typography, Button, Modal } from "@mui/material";

import {
  AppContainer,
  ListContainer,
  PromptContainer,
  TextContainer,
} from "./AppStyles.js";

import Post from "./Post.js";
import CreatePostModal from "./CreatePostModal";

const SERVER = "https://serverless-api.dlhxu.workers.dev";

// const SERVER = "http://127.0.0.1:8787";

// TODO create functions for api requests
const getPosts = async () => {
  const resource = SERVER + "/posts";
  const res = await axios.get(resource);
  return res.data;
};

const createPost = async (username, title, content) => {
  const resource = SERVER + "/posts";
  const res = await axios.post(resource, {
    username: username,
    title: title,
    content: content,
  });
  return res.data;
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const [reloadPosts, setReloadPosts] = useState(false);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [username, setUsername] = useState("dlhxu");
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const loadPosts = () => {
      setLoadingPosts(true);
      getPosts().then((posts) => {
        if (Array.isArray(posts)) {
          setPosts(posts);
          console.log("succeeded in getting and setting posts");
        } else {
          console.log("make your first post!");
        }
      });
      setLoadingPosts(false);
      setReloadPosts(false);
    };
    loadPosts();
  }, [reloadPosts]);

  const onSubmit = async (username, title, content) => {
    const data = await createPost(username, title, content);
    console.log(data);
    console.log("trying to avoid race conditions");
    await new Promise((r) => setTimeout(r, 1500));
    setReloadPosts(true);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Best Socials
          </Typography>
          <Button color="inherit" onClick={handleOpen}>
            New Post
          </Button>
        </Toolbar>
      </AppBar>

      <AppContainer>
        <TextContainer>
          <Typography variant="h4" component="div">
            Your Feed
          </Typography>
        </TextContainer>
        <TextContainer>
          <Typography variant="h7" component="div">
            * Note: new posts may not be available for up to 15 seconds, keep
            refreshing this page to check!
          </Typography>
        </TextContainer>
        {posts.length === 0 ? (
          <PromptContainer>
            <Typography variant="h5" component="div">
              Make your first post!
            </Typography>
          </PromptContainer>
        ) : (
          <ListContainer>
            {posts.length > 0 &&
              posts.map((post) => {
                return (
                  <Post
                    title={post.title}
                    username={post.username}
                    content={post.content}
                  />
                );
              })}
          </ListContainer>
        )}
      </AppContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CreatePostModal
          username={username}
          onSubmit={onSubmit}
          handleClose={handleClose}
        />
      </Modal>
    </>
  );
};

export default App;
