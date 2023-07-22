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
    background-color: ${({ theme }) => theme.colors.elementsBackground};
    border: none;
    border-radius: 0.2rem;
    box-shadow: 0rem 0rem 0.7rem 0.1rem rgba(255, 255, 255, 0.5);
    outline: none;
    width: 100%;
    max-width: 40rem;
    transition: outline 0.15s ease-in-out;
  }
  & > input:focus-visible {
    outline: 0.1rem solid white;
  }
  & > input.redOutline {
    outline: 0.1rem solid ${({ theme }) => theme.colors.red};
  }
  & > input.greenOutline {
    outline: 0.1rem solid ${({ theme }) => theme.colors.green};
  }
`;
