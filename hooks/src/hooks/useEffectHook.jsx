// import { useState, useEffect } from "react";

// export default function UseEffectHook() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((prev) => prev + 1);
//     }, 1000);
//   }, [count]);

//   return (
//     <>
//       <p>useEffect hook count is {count}</p>
//     </>
//   );
// }


import {useState, useEffect} from 'react'

export default function UseEffectHook(){
    const [count, setCount] = useState(0);

    useEffect(
        ()=> {
            setTimeout(()=> {
                setCount((prev) => prev+10)
            }, 1000)
        }, [count]
    )
    return (
<>
count is {count}
</>
    )
}