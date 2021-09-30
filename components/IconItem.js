import Image from "next/image";

const IconItem = ({ icon, code }) => {
  return (
    <tr>
      <td>
        <img src={icon} alt={`${code} icon`} />
      </td>
      <td>
          <code>{code}</code>
      </td>
    </tr>
  );
};

export default IconItem;
