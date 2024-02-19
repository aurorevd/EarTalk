import styled from "styled-components";

const StyledTopicsContainer = styled.div`
  width: 50%;
  height: 25vh;
  display: flex;
  flex-wrap: wrap;
  row-gap: 1vw;
  justify-content: space-between;
`;

const TopicButton = styled.button`
  width: 7vw;
  height: 8vh;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: black;
  background-color: ${props => props.color};
  border: solid 1px var(--grey);
  border-radius: var(--radius);
`;

function TopicsContainer() {

  const topics = [
    { name: "Science", color: "var(--blue)" },
    { name: "Culture", color: "var(--purple)" },
    { name: "Sport", color: "var(--red)" },
    { name: "Society", color: "var(--pink)" },
    { name: "History", color: "var(--yellow)" },
    { name: "Health", color: "var(--green)" }
  ];

  return (
    <StyledTopicsContainer>
      {topics.map((topic, index) => (
        <TopicButton key={index} color={topic.color}>
          {topic.name}
        </TopicButton>
      ))}
    </StyledTopicsContainer>
  );
}

export default TopicsContainer;
