import React, { ChangeEvent, useState } from 'react';

const FieldTableNode = ({ data }: any) => {
  const [bg, setBg] = useState("#e7d0d0");
  const onColorBgColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBg(e.target.value || "#e7d0d0")
  }
  return (
    <div style={{ padding: '18px', backgroundColor: bg }} className=' bottom-4 shadow-xl rounded-md'>
      {/* Styling for the table container */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '5px 15px', width: "16vw" }}>Field Name</th>
            <th style={{ textAlign: 'left', padding: '5px 15px' }}>Type</th>
            <th style={{ textAlign: 'left', padding: '5px 15px' }}>Required?</th>
          </tr>
        </thead>
        <tbody>
          {data.fields.map((field: any, index: any) => (
            <tr key={index}>
              <td style={{ padding: '5px 15px' }}>{field.name}</td>
              <td style={{ padding: '5px 15px' }}>{field.type}</td>
              <td style={{ padding: '5px 15px' }}>{field.required ? "true" : "false"}</td>
            </tr>
          ))}
          <tr>
            <th className=' h-1 bg-blue-200 w-full justify-around items-center ' colSpan={100}>
              <div className='w-full flex justify-between items-center px-4 '>
                <p>Utils:</p>
                <input type='color' className=' p-0 m-0 rounded-sm  w-6  inline-block bg-blue-200 ' value={bg} onChange={e => { onColorBgColorChange(e) }} />
              </div>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FieldTableNode;
