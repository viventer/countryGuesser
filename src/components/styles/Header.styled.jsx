import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.headerAndSelection};
  color: white;
  box-shadow: 0 0 1rem 0.5rem rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 0.15rem solid white;
  font-size: 0.9rem;

  & > div {
    font-size: 2rem;
  }

  @media (max-width: 800px) {
    & {
      padding: 0.7rem;
      font-size: 0.8rem;
      gap: 0.7rem;
    }
    & > div {
      font-size: 1.8rem;
    }
  }
`;
