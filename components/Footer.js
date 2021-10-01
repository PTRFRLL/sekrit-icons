import styled from "styled-components";
import Link from "./Link";

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <p>
          <span role="img" aria-label="built">🛠</span> by <Link href="https://twitter.com/PTRFRLL">@PTRFRLL</Link>
        </p>
      </div>
      <div>
        <p>
          Missing a code?{" "}
          <Link href="https://github.com/PTRFRLL/sekrit-icons">
            Contribute on GitHub
          </Link>
        </p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  margin-top: 16px;

  p {
    margin: 5px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 100px;
  }
`;

export default Footer;
