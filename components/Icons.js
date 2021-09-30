import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import styled from "styled-components";
import { COLORS } from "../styles/constants";
import IconItem from "./IconItem";

const Icons = ({ icons }) => {
  const ref = useRef();
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    const image = await toPng(ref.current);
    const downloadLink = document.createElement("a");
    downloadLink.download = "icons.png";
    downloadLink.href = image;
    downloadLink.click();
    setLoading(false);
  };

  return (
    <>
      <Container ref={ref}>
        {icons.map((icon) => (
          <IconItem
            key={icon.name}
            name={icon.name}
            icon={icon.icon}
            code={icon.code}
            note={icon.note}
          />
        ))}
      </Container>
      <Button disabled={loading} onClick={generateImage}>
        {loading ? "Exporting..." : "Export as Image"}
      </Button>
    </>
  );
};

const Container = styled.div`
  background-color: ${COLORS.dark};
`;

const Button = styled.button`
  color: ${COLORS.white};
  text-transform: uppercase;
  background: ${COLORS.primary};
  padding: 20px;
  border-radius: 5px;
  border: none;
  margin-top: 1rem;
  width: 90%;
  cursor: pointer;

  &:hover {
    background: ${COLORS.white};
    color: ${COLORS.primary};
  }

  @media (min-width: 768px) {
    width: 60%;
  }
`;

export default Icons;
