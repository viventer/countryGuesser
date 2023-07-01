import styled from "styled-components";

export const StyledTimer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  & > time {
    font-size: 3rem;
  }
  & > button {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-size: 2rem;
  }
`;

export const StartButton = styled.button`
  color: ${({ theme }) => theme.colors.correct};
`;

export const PauseButton = styled.button`
  color: ${({ theme }) => theme.colors.pause};
`;

export const FinishButton = styled.button`
  color: ${({ theme }) => theme.colors.incorrect};
`;

export const NoLimitButton = styled.button`
  color: ${({ theme }) => theme.colors.correct};
`;
