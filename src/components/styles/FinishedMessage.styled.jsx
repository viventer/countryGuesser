import styled from "styled-components";

export const StyledFinishedMessage = styled.section`
  gap: 2rem;
  & h2 {
    color: ${({ theme }) => theme.colors.green};
    font-size: 1.5rem;
    margin-right: 2rem;
  }
  & p {
    font-weight: 700;
    font-size: 1.5rem;
  }
  & > button {
    font-size: 1.2rem;
    font-weight: 500;
    padding: 0.5rem;
    color: white;
    background-color: ${({ theme }) => theme.colors.elementsBackground};
    margin-top: 0.5rem;
    border: none;
    border-radius: 0.3rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: filter 0.15s ease-in-out;
  }
  & > button:hover {
    filter: brightness(1.4);
    cursor: pointer;
  }
`;
