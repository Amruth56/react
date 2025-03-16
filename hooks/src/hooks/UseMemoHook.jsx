import { initialItems } from "./utils";
import {useState, useEffect, useMemo} from 'react'


export default function UseMemoHook(){

    const [count, setCount] = useState(0);
    const [items] = useState(initialItems);

    const selectedItems = useMemo( ()=> items.find((item) => item.isSelected), [items])


    return(
        <>
        <h1>Count : {count}</h1>
        <h2> selected Item: {selectedItems?.id} </h2>
        <button onClick={()=>setCount(prev=> prev+1)}>Increment</button>
        </>
    )
}