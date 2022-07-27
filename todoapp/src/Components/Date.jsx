import React from 'react';
import { useState } from 'react';

const D = () => {

    const[Ctime , setCtime] = useState()


    let date = new Date().toLocaleDateString()
   

   const tTime = () => {

  
    let time = new Date().toLocaleTimeString();
    setCtime(time);
   

   }
   setInterval(tTime , 1000);

    return (
        <>
            <p>{date}  {Ctime}</p>

        </>
    );
};

export default D;