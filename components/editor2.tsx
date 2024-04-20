import React, { useEffect, useState } from 'react'
import Editor from '@monaco-editor/react';
import { convertJsonToNode } from '@/utils/json-to-node';

interface Props {
  setNodes: any
}

interface MyObject {
  type: String,
  [key: string]: any
}


const EditorB = ({ setNodes }: Props) => {
  const [editorValue, setEditorValue] = useState<string>("[]");
  const handleOnChange = (e: any) => {
    setEditorValue(e?.valueOf() || "")
  }
  useEffect(() => {
    try {
      const jsonArrayNodes: Array<MyObject> = JSON.parse(editorValue)
      const nodesValues = jsonArrayNodes.map((obj, i) => {
        return {
          id: `${i}`,
          type: "fieldTableNode",
          position: { x: 100 + (i * 20), y: 100 + (i * 100) },
          draggable: true,
          data: {
            fields: convertJsonToNode(obj)
          }
        }
      })
      setNodes(nodesValues)
    } catch (e) {
      console.log(e)
    }
  }, [editorValue, setNodes]);
  return (
    <div className=' text-3xl'>
      <Editor theme='vs-dark' className=' h-full md:h-full' defaultLanguage='json' value={editorValue} onChange={e => { handleOnChange(e) }} />
    </div>
  )
}

export default EditorB