import { randomInt } from "node:crypto"

interface MyObject {
     type: String,
     [key: string]:any
  }
  

const convertJsonToNode = (json: MyObject) => {
    try{
    const arrayOfObjects = Object.keys(json).map(key => ({ key, ...json[key] }));
    const modified = arrayOfObjects.map((obj) => {
        return {
            name: obj.key,
            type: obj.type || "", // Assuming the type value exists
            required: obj.required || false
        };
    });
    return modified;
    } catch(err){
        console.log(err)
    }
}

export {
    convertJsonToNode
}