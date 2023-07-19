import styled from "styled-components";

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
