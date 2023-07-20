import styled from "styled-components";

export const StyledNoLimitButton = styled.button`
  color: ${({ theme, $limitedtime }) =>
    $limitedtime === "false" ? theme.colors.green : theme.colors.red};
  font-weight: 500;
  display: flex;
  gap: 0.5rem;
`;
