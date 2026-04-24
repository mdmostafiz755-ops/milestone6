import { useState } from "react"

const Counter = () => {
    const[count,setCount]=useState(0);

    const handler=()=>{
      const newCount=count+1;
      setCount(newCount);
    }
  return (
    /*use state*/
    <>
    <div style={{border: "2px solid blue", padding:"10px"}}>
        {
          count===50 && <p>your score:50</p>
        }
        <h1>Count: {count}</h1>
        <button onClick={handler}>Add</button>
    </div>
    </>
  )
}

export default Counter