import { Table } from 'react-bootstrap';
import "./Table.css"

const MyTable = ({value}) => {
  const rows = [
    ["R-1",1, 2, 3, 4, 5],
    ["R-2",6, 7, 8, 9, 10],
    ["R-3",11, 12, 13, 14, 15],
    ["R-4",16, 17, 18, 19, 20],
    ["R-5",21, 22, 23, 24, 25],
    ["R-6",26, 27, 28, 29, 30]
  ]
  return (
    <Table striped bordered hover >
      <thead>
        <tr className="first-row">
          <th className="first-column">Row\Column</th>
          <th>A</th>
          <th>B</th>
          <th>C</th>
          <th>D</th>
          <th>E</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            
          >
            {row.map((cell, cellIndex) => (
              <td  key={cell} className={cell}
              style={cell === value.seatno ? { backgroundColor: 'lightyellow' } : {}}
         >{cell===value.seatno?value.regno:cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default MyTable;
