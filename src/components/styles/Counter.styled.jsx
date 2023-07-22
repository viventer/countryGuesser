import styled from "styled-components";

export const StyledCounter = styled.section`
  font-size: 2rem;
  font-weight: 500;
  white-space: nowrap;
  user-select: none;

  @media (max-width: 319px) {
    & {
      font-size: 1.8rem;
    }
  }
`;
