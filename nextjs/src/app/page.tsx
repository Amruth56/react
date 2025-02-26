"use client";
import Link from "next/link";
import { useState, } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [name, setName] = useState("Jhon");
  const router = useRouter();

  const handleClick = () => {
    setName("Doe");
  };

  const navigatetologin = () => {
    router.push("/login")
  }

  const NewChildComponent = () => {
    return <h1> I am a new child component</h1>;
  };

  return (
    <main className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-4xl font-bold">hey {name} </h1>
      <button onClick={handleClick}> Button</button>

      <NewChildComponent />

      <h1>Basic routing</h1>
      <Link href="/about">
        About
      </Link>

      navigate to 
    <button onClick={navigatetologin}> navigate to login</button>
    </main>
  );
}
