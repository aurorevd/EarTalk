import "./App.css";
import styled from "styled-components";

const StyledTopicsContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
row-gap:1vw;
  justify-content: space-between;
`;
const TopicButton = styled.TopicButton`
  width: 7vw;
  height: 8vh;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: black;
  background-color: var(--purple);
  border: solid 1px var(--grey);
  border-radius: var(--radius);
`;


function TopicsContainer() {
  return (
        <StyledTopicsContainer>
          <TopicButton>Science</TopicButton>
          <TopicButton>History</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Science</TopicButton>
          <TopicButton>History</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Science</TopicButton>
          <TopicButton>History</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
          <TopicButton>Sport</TopicButton>
        </StyledTopicsContainer>
  );
}

export default TopicsContainer;
