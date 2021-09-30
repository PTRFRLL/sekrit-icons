import styled from "styled-components";

const Link = ({ href, children }) => (
  <StyledLink href={href} rel="noreferrer" target="_blank">
    {children}
  </StyledLink>
);

const StyledLink = styled.a`
  color: #ed3330;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Link;
