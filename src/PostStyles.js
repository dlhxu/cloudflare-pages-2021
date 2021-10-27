import styled from "styled-components";

const Button = styled.button``;

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 5px 0px 5px 0px;
  width: 100%;
  height: auto;
`;

const ContentContainer = styled.div`
  width: 75%;
  height: auto;
`;

const TextContainer = styled.div`
  padding: 10px 10px 10px 10px;
`;

export { Button, PostContainer, ContentContainer, TextContainer };
