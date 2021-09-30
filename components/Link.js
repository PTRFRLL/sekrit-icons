import styled from "styled-components";
import { COLORS } from "../styles/constants";

const Link = ({ href, children }) => (
  <StyledLink href={href} rel="noreferrer" target="_blank">
    {children}
  </StyledLink>
);

const StyledLink = styled.a`
  color: ${COLORS.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
