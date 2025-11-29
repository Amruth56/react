import { useState } from 'react'
import { useForm} from 'react-hook-form'

function App() {
const {register, handleSubmit} = useForm();

const onSubmit = (data) => {
  console.log(data);
}

  return (
  <form className='gap-2' onSubmit={handleSubmit(onSubmit)}>
    <input {...register("emAIL", {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    })} type="text" placeholder="Email"></input>
    <input {...register("password", {
      required: true,
      minLength: 6,
    })}type="password" placeholder ="password"></input>
    <button type = "submit">Submit</button>
  </form>
  )
}

export default App
