import { randomInt } from "node:crypto"

interface MyObject {
    [key: string]: { type: string }; 
  }
  
  type MyArrayOfObjects = MyObject[];

const convertJsonToNode = (json: MyArrayOfObjects) => {
    try{
    console.log("Function called")
    console.log(json)
    console.log(json.length)
    console.log(json[0])
    console.log(json[1])
    const modified = json.map((obj) => {
        console.log("!@#$@#$!#$@#$@")
        console.log(obj)
        console.log("ASDFASDFASDFSA")
        const key = Object.keys(obj)[0] ; 
        if(!obj[key]){
            return {}
        }
        return {
            name: key,
            type: obj[key].type || "", // Assuming the type value exists
        };
    });
    console.log("***********************")
    console.log(modified)
    return modified;
    } catch(err){
        console.log(err)
    }
}

export {
    convertJsonToNode
}