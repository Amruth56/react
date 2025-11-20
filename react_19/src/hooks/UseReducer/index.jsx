import { useReducer} from 'react';

export const ReducerComp = () => {
     const reducer = (state, action) => {
        console.log(state, action);
     switch(action.type){
        case "Increment":
            return state + 1;
        case "Decrement":
            return state -1;
     }
    }
    // const[count, setCount] = useState(0);
    const [count, dispatch] = useReducer(reducer, 0);

   
    return <div className='gap-2 flex flex-col items-center justify-center h-screen'>
        <h1 className='text-lg'>Reducer Component <span className='text-shadow-amber-300 size-1.5 text-md'>{count}</span></h1>
        <button className='cursor-pointer' onClick={
            ()=> dispatch({
                type:"Increment"
            })
        }>
            Increment
        </button>
        <button className='cursor-pointer' onClick={
            () => dispatch({
                type: "Decrement"
            })
        }> 
            Decrement
        </button>
    </div>
}