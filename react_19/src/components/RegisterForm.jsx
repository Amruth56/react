import { useState } from "react";

export function RegisterForm() {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [displayName, setDisplayName] = useState("");

  const [formFields, setFormFields] = useState({
    username: "",
    password: "",
    displayName: "",
  });

  //   const isDisabled = !username || !password || !displayName;
console.log(formFields)
  return (
    <form>
      <div>
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          value={formFields.username}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              username: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          value={formFields.password}
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value,
            }));
          }}
        />
      </div>
      <div>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          id="displayName"
          value={formFields.displayName}
          onChange={(e) => {
            setFormFields((currentState)=> ({
                ...currentState,
                displayName: e.target.value
            }));
          }}
        />
      </div>
      <div>userName: {formFields.username}</div>
      {/* <button disabled={isDisabled}>SignUp</button> */}
    </form>
  );
}
