import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 46px;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 20px;
  max-height: 120px;
  border: 1px solid white;
  border-radius: 4px;
  padding: 12px;
  overflow: auto;
`;

const Poster = styled.div`
  width: 160px;
  height: 250px;
  background-color: transparent;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center center;
`;

export default ({ title, img, summary }) => {
  return (
    <Container>
      <Column>
        <Title>{title}</Title>
        <Description>{summary}</Description>
      </Column>
      <Poster bg={img}></Poster>
    </Container>
  );
};
