import React from 'react';



const FieldTableNode = ({ data}:any) => {
  return (
    <div style={{ padding: '18px' }}>
      {/* Styling for the table container */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '5px 15px' }}>Field Name</th>
            <th style={{ textAlign: 'left', padding: '5px 15px' }}>Field Type</th>
          </tr>
        </thead>
        <tbody>
          {data.fields.map((field:any, index:any) => (
            <tr key={index}>
              <td style={{ padding: '5px 15px' }}>{field.name}</td>
              <td style={{ padding: '5px 15px' }}>{field.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FieldTableNode;
