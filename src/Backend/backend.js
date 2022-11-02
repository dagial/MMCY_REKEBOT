
export const userLogin=async(userCredentials)=>{
   const response=await fetch("url",{
        method: "POST",
        body:JSON.stringify(userCredentials),
    })
    .then((response)=>response.json)
    .catch(err=>
        console.log("Error occured", err.message))
        return response
    }