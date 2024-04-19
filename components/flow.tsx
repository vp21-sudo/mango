"use client"
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  Background,
  Edge,
  Node,
  Connection,
  applyNodeChanges,
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

const Flow = ({ nodes }: Props) => {
  useEffect(() => {
    setElements(nodes)
  }, [nodes]);
  const [elements, setElements] = useState<any>([
    {
      id: "test",
      type: "fieldTableNode",
      position: { x: 100, y: 100 },
      data: {
        fields: [{
          "name": "test",
          "type": "string"
        }]
      }
    }
  ]);
  const nodeTypes = useMemo(() => ({ fieldTableNode: FieldTableNode }), []);

  //   const onConnect = (params: Connection) => 
  //     setElements((els) => addEdge(params, els));

  //   const onElementsRemove = (elementsToRemove: Elements) =>
  //     setElements((els) => removeElements(elementsToRemove, els));

  const onNodesChange = useCallback(
    (changes: any) => setElements((nds: any) => applyNodeChanges(changes, nds)),
    [setElements]
  );

  return (
    <div className=' w-full h-screen'>
      <ReactFlowProvider>
        <ReactFlow
          nodes={elements}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}
        >
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Flow;
