"use client"
import React, { useState, useEffect, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  Edge,
  Node,
  Connection,
} from 'reactflow';

import FieldTableNode from './fieldTableNodes'; 

interface NodeData {
  label: string;
}



const nodes = [
    {
        id: '1',
        type: 'fieldTableNode', // Use the type you define during registration
        position: { x: 100, y: 100 },
        data: {
          fields: [
            { name: 'id', type: 'number' },
            { name: 'title', type: 'string' },
          ], 
        },
      },
  ];


interface Props {
    nodes: Array<object>
}

const Flow = ({nodes}: Props) => {
    useEffect(() => {
            const updatedNodes =  [{
                id: "1",
                type: "fieldTableNode",
                position: {x:100, y:100},
                data: {
                    fields: nodes
                }
            }]
        console.log(updatedNodes)
        setElements(updatedNodes)
    }, [nodes]);
  const [elements, setElements] = useState<any>([]);
  const nodeTypes = useMemo(() => ({ fieldTableNode: FieldTableNode }), []);

//   const onConnect = (params: Connection) => 
//     setElements((els) => addEdge(params, els));
  
//   const onElementsRemove = (elementsToRemove: Elements) =>
//     setElements((els) => removeElements(elementsToRemove, els));

  return (
    <div className=' w-full h-screen'>
      <ReactFlowProvider>
        <ReactFlow
          nodes={elements}
          nodeTypes={nodeTypes}
         >
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
