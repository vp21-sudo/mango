import React, { useEffect, useState } from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import { convertJsonToNode } from '@/utils/json-to-node';

interface Props {
    setNodes: any
  }


const EditorB = ({setNodes} :Props) => {
    const [editorValue, setEditorValue] = useState("{}");
    const handleOnChange = (e:any) => {
        setEditorValue(e?.valueOf() || "")            
    }
    useEffect(() => {
        try{
            setNodes(convertJsonToNode(JSON.parse(editorValue)))
        } catch(e){
            console.log(e)
        }
    }, [editorValue, setNodes]);
  return (
    <div className=' text-3xl'>
        <Editor theme='vs-dark' height="100vh"   defaultLanguage='json' value={editorValue} onChange={e=>{handleOnChange(e)}}/>
    </div>
  )
}

export default EditorB