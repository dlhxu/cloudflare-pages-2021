import { useState, useEffect } from "react";
import React from "react";
import { Paper, TextField, Button, CircularProgress } from "@mui/material";

import {
  ModalContainer,
  ContentContainer,
  Container,
  CircularProgressContainer,
} from "./CreatePostModalStyles.js";

const CreatePostModal = ({ username, onSubmit, handleClose }) => {
  const [title, setTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [creatingPost, setCreatingPost] = useState(false);

  const onClick = async () => {
    if (title === "") {
      alert("Please provide a title");
    } else if (postContent === "") {
      alert("Please provide post content");
    } else {
      setCreatingPost(true);
      await onSubmit(username, title, postContent);
      handleClose();
      setCreatingPost(false);
    }
  };
  return (
    <ModalContainer>
      <Paper>
        {creatingPost ? (
          <CircularProgressContainer>
            <CircularProgress />
          </CircularProgressContainer>
        ) : (
          <ContentContainer>
            <Container>
              <TextField
                required
                id="standard-required"
                label="Post Title"
                placeholder="Title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                variant="outlined"
              />
            </Container>
            <Container>
              <TextField
                required
                label="Post Content"
                multiline
                maxRows={6}
                minRows={6}
                value={postContent}
                onChange={(event) => {
                  setPostContent(event.target.value);
                }}
              />
            </Container>
            <Container>
              <Button onClick={onClick}>Create Post</Button>
            </Container>
          </ContentContainer>
        )}
      </Paper>
    </ModalContainer>
  );
};

export default CreatePostModal;
