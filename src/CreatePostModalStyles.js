import styled from "styled-components";

const Button = styled.button``;

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CircularProgressContainer = styled.div`
  width: 600px;
  max-width: 100%;
  height: 300px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-top: 25px;
`;

const ContentContainer = styled.div`
  width: 600px;
  max-width: 100%;
  height: 300px;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding-top: 25px;
  padding-top: 25px;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export {
  Button,
  ModalContainer,
  ContentContainer,
  Container,
  CircularProgressContainer,
};
