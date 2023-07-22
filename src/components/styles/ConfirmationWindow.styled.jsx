import styled from "styled-components";

export const StyledConfirmationWindow = styled.div`
  background-color: ${({ theme }) => theme.colors.elementsBackground};
  position: absolute;
  top: 2.8rem;
  left: 0;
  border-radius: 0.3rem;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 21px 0px rgba(255, 255, 255, 0.25);
  z-index: 500;
  & > h2 {
    font-size: 1.3rem;
    font-weight: 500;
    margin-bottom: 0.3rem;
  }

  & > div {
    display: flex;
  }

  & button {
    background-color: rgba(0, 0, 0, 0);
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 1.5rem;
    border: none;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;

    &:nth-child(1) {
      color: ${({ theme }) => theme.colors.green};
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  & button:hover {
    filter: brightness(1.35);
  }
`;
