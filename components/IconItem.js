import { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constants";

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
    }, 1500);
  };

  return (
    <IconContainer onClick={copyCode}>
      <div>
        <img src={icon} alt={`${code} icon`} width={80} height={80} />
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
  padding: 1rem;
  cursor: pointer;
  border-bottom: 1px solid lightgrey;
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
  color: ${COLORS.muted};
  font-size: 0.85rem;
`;

const SuccessText = styled.p`
  color: ${COLORS.primary};
`;

export default IconItem;
