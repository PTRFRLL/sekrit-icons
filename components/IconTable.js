import styled from "styled-components";
import IconItem from "./IconItem";

const IconTable = ({ icons }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th></th>
          <th>Code</th>
        </tr>
      </thead>
      <tbody>
        {icons.map((icon) => (
          <IconItem key={icon.name} name={icon.name} icon={icon.icon} code={icon.code} />
        ))}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 700px;

  th,
  td {
    padding: 12px 15px;
  }

  tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
`;

export default IconTable;
