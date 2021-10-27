import React from "react";
import { PostContainer, ContentContainer, TextContainer } from "./PostStyles";
import { Paper } from "@mui/material";

const Post = ({ title, username, content }) => {
  return (
    <PostContainer>
      <ContentContainer>
        <Paper elevation={3}>
          <TextContainer>{title}</TextContainer>
          <TextContainer>{content}</TextContainer>
          <TextContainer>Posted by: {username}</TextContainer>
        </Paper>
      </ContentContainer>
    </PostContainer>
  );
};

export default Post;
