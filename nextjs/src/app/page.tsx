"use client"
import { useState } from 'react'


export default function Home(){
  const [name, setName] = useState("Jhon")

  const handleClick = () => {
   setName("Doe")
  }

  const NewChildComponent = () => {
    return (
      <h1> I am a new child component</h1>
    )
  }


  return (
    <main className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">hey {name} </h1>
      <button onClick={handleClick}> Button</button>

      <NewChildComponent />
    </main>
  )
}