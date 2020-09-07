import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
      summary
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  padding: 20px 0px 15px 0px;
  height: 10vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  font-size: 18px;
  opacity: 0.5;
  font-weight: 500;
  margin-top: 10px;
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);

  return (
    <Container>
      <Header>
        <Title>Apollo Movie App</Title>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      {!loading &&
        data.movies &&
        data.movies.map((m) => (
          <Movie
            key={m.id}
            id={m.id}
            title={m.title}
            img={m.medium_cover_image}
            summary={m.summary}
          />
        ))}
    </Container>
  );
};
