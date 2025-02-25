import {useState} from 'react'
import { LoginForm } from './components/LoginForm'
import { UserContext } from './utils/contexts/userCintext'
import useFetchUser from './utils/hooks/useFetchUser'

export default function App(){

  const user = useFetchUser(1)
  console.log(user)
const [toggle, setToggle]= useState(false)

  return(
   <UserContext.Provider>
    <div>
      <h1>React 19</h1>
      <button onClick={()=>setToggle(!toggle)}>Toggle</button>
      {toggle && <LoginForm/>} 
    </div>
   </UserContext.Provider>
  )
}