import { convertJsonToNode } from '@/utils/json-to-node';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'

interface Props {
  setNodes: any
}

const Editor = ({setNodes}:Props) => {
    const [userInput, setuserInput] = useState<string>("");
    const [error, setError] = useState<boolean>(false);
    const [json, setJson] = useState<object>({});

    const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;

    if (textarea) {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
          event.preventDefault();

          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;

          // Replace this with the number of spaces you want
          const spaces = '  '; // Two spaces

          textarea.value = 
            textarea.value.substring(0, start) + 
            spaces + 
            textarea.value.substring(end);

          textarea.selectionStart = textarea.selectionEnd = start + spaces.length;
        }
      };

      textarea.addEventListener('keydown', handleKeyDown);

      // Cleanup: Remove the event listener when the component unmounts
      return () => {
        textarea.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, []);

    const handleOnChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        try{
            const jsonparse = JSON.parse(e.target.value)
            console.log(jsonparse)
            setError(false)
            setJson(jsonparse)
            setuserInput(e.target.value)
            setNodes(convertJsonToNode(jsonparse))
        } catch(err){
            setuserInput(e.target.value)
            setError(true)
        }   
    }
  return (
    <div>
        <textarea ref={textareaRef} className={`border-2 m-4 w-full p-2 resize-none focus:outline-none ${error ? " border-red-700" : " border-green-600"}`} rows={25} value={userInput} onChange={e=>{handleOnChange(e)}} >
        </textarea>
    </div>
  )
}

export default Editor