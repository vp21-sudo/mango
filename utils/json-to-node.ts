import { randomInt } from "node:crypto"

interface MyObject {
     type: String,
     [key: string]:any
  }
  

const convertJsonToNode = (json: MyObject) => {
    try{
    console.log("Function called")
    console.log(json)
    const arrayOfObjects = Object.keys(json).map(key => ({ key, ...json[key] }));

    console.log("ASDFASDFA#$%@#$%@#$%@#$%")
    console.log(arrayOfObjects)
    const modified = arrayOfObjects.map((obj) => {
        console.log("!@#$@#$!#$@#$@")
        console.log(obj)
        console.log("ASDFASDFASDFSA")
        return {
            name: obj.key,
            type: obj.type || "", // Assuming the type value exists
            required: obj.required || false
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