import styled from "styled-components";

export const StyledCountriesTable = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  flex-wrap: wrap;
  margin-top: 1rem;
  & > div {
    border: 0.1rem solid ${({ borderColor }) => borderColor};
    padding: 1rem;
    font-weight: 500;
  }
`;
