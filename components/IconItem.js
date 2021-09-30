import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";

const IconItem = ({ icon, code, name, note }) => {
  const [copied, setCopied] = useState("");
  const copyCode = () => {
    let codeToCopy = code;
    if (typeof code === "object") {
      codeToCopy = code[Math.floor(Math.random() * code.length)];
    }
    navigator.clipboard.writeText(codeToCopy);
    setCopied("Copied to clipboard!");
    setTimeout(() => {
      setCopied("");
    }, 2000);
  };

  return (
    <IconContainer onClick={copyCode}>
      <div>
        <img src={icon} alt={`${code} icon`} width={100} height={100} />
      </div>
      <CodeContainer>
        {copied && <SuccessText>{copied}</SuccessText>}
        {!copied && (
          <>
            <code>{typeof code === "object" ? code.join(", ") : code}</code>
            {note && <Note>{note}</Note>}
          </>
        )}
      </CodeContainer>
    </IconContainer>
  );
};

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0;
  cursor: pointer;
`;

const CodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  text-align: center;

  code {
    font-size: large;
  }
`;

const Note = styled.p`
  color: #6c757d;
`;

const SuccessText = styled.p`
  color: #28a745;
`;

export default IconItem;
