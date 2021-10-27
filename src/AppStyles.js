import styled from "styled-components";

const Button = styled.button``;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: auto;
  width: 100%;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: auto;
  width: 100%;
  margin-top: 10px;
`;

const PromptContainer = styled.div`
  width: 75%;
  height: 100px;
  text-align: left;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const TextContainer = styled.div`
  width: 75%;
  margin-top: 15px;
  margin-bottom: 5px;
  text-align: left;
`;

const ListItem = styled.div``;

const HorizontalLoaderContainer = styled.div`
  width: 75%;
`;

const CircularLoaderContainer = styled.div``;

export {
  Button,
  AppContainer,
  ListContainer,
  ListItem,
  HorizontalLoaderContainer,
  CircularLoaderContainer,
  TextContainer,
  PromptContainer,
};
