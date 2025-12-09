import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("emAIL", {
          required: "Email is required",
          // pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          validate: (value) => {
            if(!value.includes("@")){
              return "Email must contain @ symbol";
            }
            return true;
          }
        })}
        type="text"
        placeholder="Email"
      ></input>
      {
        errors.emAIL && (
          <div>
            {errors.emAIL.message}
          </div>
        )
      }
      <input
        {...register("password", {
          required: "Password is required",
          minLength: 6,
        })}
        type="password"
        placeholder="password"
      ></input>
      {errors.password && (
        <div>
          {errors.password.message}
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
