import React from 'react';



const FieldTableNode = ({ data}:any) => {
  console.log("ASDF!!!@#@#####$@#$23")
  console.log(data)
  return (
    <div style={{ padding: '18px' }}>
      {/* Styling for the table container */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '5px 15px', width:"16vw" }}>Field Name</th>
            <th style={{ textAlign: 'left', padding: '5px 15px' }}>Type</th>
            <th style={{ textAlign: 'left', padding: '5px 15px' }}>Required?</th>
          </tr>
        </thead>
        <tbody>
          {data.fields.map((field:any, index:any) => (
            <tr key={index}>
              <td style={{ padding: '5px 15px' }}>{field.name}</td>
              <td style={{ padding: '5px 15px' }}>{field.type}</td>
              <td style={{ padding: '5px 15px' }}>{field.required ? "true" : "false" }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FieldTableNode;
