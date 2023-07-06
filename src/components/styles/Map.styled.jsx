import styled from "styled-components";

export const StyledMap = styled.section`
  & > .mapContainer {
    height: 50vh;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 0.2rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1rem;
  }
  & .countries {
    fill-opacity: 1;
    fill: ${({ theme }) => theme.colors.default};
    stroke-width: 0.1rem;
    stroke: ${({ theme }) => theme.colors.background};
  }
`;
