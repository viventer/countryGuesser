import styled from "styled-components";

export const StyledTimer = styled.div`
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
`;

export const StartButton = styled.button`
  color: ${({ theme }) => theme.colors.green};
`;

export const PauseButton = styled.button`
  color: ${({ theme }) => theme.colors.yellow};
`;

export const FinishButton = styled.button`
  color: ${({ theme }) => theme.colors.red};
  margin-right: 1rem;
`;

export const NoLimitButton = styled.button`
  color: ${({ theme }) => theme.colors.green};
  font-weight: 500;
  display: flex;
  gap: 0.5rem;
`;
