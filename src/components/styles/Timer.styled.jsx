import styled from "styled-components";

export const StyledTimer = styled.section`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  row-gap: 0.3rem;
  flex-wrap: wrap;
  position: relative;
  & > time {
    font-size: 2rem;
    font-weight: 500;
  }
  & > button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  & > button:last-child {
    font-size: 1.2rem;
  }
  & button:hover {
    filter: brightness(1.35);
  }
  @media (max-width: 319px) {
    & > time {
      font-size: 1.8rem;
    }
    & > button {
      font: 1.3rem;
    }
  }
`;
