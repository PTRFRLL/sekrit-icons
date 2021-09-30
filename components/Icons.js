import { toPng } from "html-to-image";
import { useRef, useState } from "react";
import styled from "styled-components";
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
      <div ref={ref}>
        {icons.map((icon) => (
          <IconItem
            key={icon.name}
            name={icon.name}
            icon={icon.icon}
            code={icon.code}
            note={icon.note}
          />
        ))}
      </div>
      <Button disabled={loading} onClick={generateImage}>
        Export as Image
      </Button>
    </>
  );
};

const Button = styled.button`
  color: #fff;
  text-transform: uppercase;
  background: #ed3330;
  padding: 20px;
  border-radius: 5px;
  border: none;
  margin-top: 1rem;
`;

export default Icons;
