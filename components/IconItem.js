import Image from "next/image";
import styled from "styled-components";

const IconItem = ({ icon, code, name, note }) => {
  return (
    <IconContainer>
      <div>
        <img src={icon} alt={`${code} icon`} width={100} height={100} />
      </div>
      <CodeContainer>
        <code>{code}</code>
        {note && <Note>{note}</Note>}
      </CodeContainer>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
`;

const CodeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  code {
    font-size: large;
  }
`;

const Note = styled.p`
  &::before {
    content: "\a";
    white-space: pre;
  }
  color: grey;
`;

export default IconItem;
