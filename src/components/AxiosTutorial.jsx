import React, { useEffect, useState } from 'react';
import axios from 'axios';
function AxiosTutorial() {
    const [userData,setData] = useState([]);
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
       .then((response) =>{
        console.log(response);
        setData(response.data);
       })
    }, []);
  return (
    <div>AxiosTutorial
   {userData.map((data)=>{
    return(
        <div>
            {data.name}
        </div>
    )
   })}
   </div>
  )
}

export default AxiosTutorial