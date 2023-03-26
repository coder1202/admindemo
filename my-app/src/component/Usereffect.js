import React, { useEffect, useState } from 'react'

const Usereffect = () => {

const [count, setCount] = useState(0);
    useEffect(()=>{
        if(count>=1)
        {
            document.title = `News(${count})`;
        }
        else
        {
            document.title="News"
        }
         //   document.title=chats(${count})
        
    },[count]);
  return (
    <div>

        <h1>{count}</h1>
        <button className='btn' onClick={()=>{
            setCount(count+1)
        }}>Click</button>
    </div>
  )
}

export default Usereffect