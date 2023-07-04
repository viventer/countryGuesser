import styled from "styled-components";

export const StyledInput = styled.form`
  margin-top: 1rem;
  & > label {
    position: absolute;
    right: 999999999rem;
  }
  & > input {
    font-size: 1.2rem;
    color: white;
    padding: 0.5rem 1rem;
    background-color: ${({ theme }) => theme.colors.darkGray};
    border: none;
    border-radius: 0.2rem;
    box-shadow: 0rem 0rem 0.5rem 0.1rem rgba(255, 255, 255, 0.15);
    outline: none;
    width: 100%;
    max-width: 40rem;
  }
  & > input:focus-visible {
    outline: 0.1rem solid white;
  }
`;
