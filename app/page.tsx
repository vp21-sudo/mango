"use client"
import Editor from '@/components/editor'
import EditorB from '@/components/editor2'
import Flow from '@/components/flow'
import React, { useState } from 'react'

const Page = () => {
  const [nodes, setNodes] = useState([]);

  return (
    <div className=' grid grid-cols-2 gap-2'>
      {/* <Editor setNodes={setNodes}/> */}
      <EditorB setNodes={setNodes}/>
      <Flow nodes={nodes}/>
    </div>
  )
}

export default Page