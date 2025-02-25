import PropTypes from "prop-types";
import { useState } from "react";

export default function UserDetails({ user, setUsers }) {
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  console.log(isEditing);
  return (
    <div>
      <div>
       {!isEditing && ( <button
          onClick={() => {
            setIsEditing((currentState) => !currentState);
          }}
        >
          Edit
        </button>)}
        <button onClick={()=> {
            setUsers((currentUserState)=> {
                return currentUserState.filter((currentUser)=> currentUser.id !== user.id)
            })
        }}>Delete</button>
        {isEditing && (
          <button
            onClick={() => {
              setUsers((currentUserState) => {
                return currentUserState.map((currentUser) => {
                  if (currentUser.id === user.id) {
                    return {
                      ...currentUser,
                      username: username,
                      email: email,
                    };
                  }
                  return currentUser;
                });
              });
              setIsEditing(false);
            }}
          >
            Save
          </button>
        )}
      </div>
      <div>
        <b>Id: </b>
        <span>{user.id}</span>
        <br />
        <b>username:</b>
        {isEditing ? (
          <input
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        ) : (
          <span>{user.username}</span>
        )}
        <br />
        <b>Email</b>
        {isEditing ? (
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        ) : (
          <span>{user.email}</span>
        )}
      </div>
    </div>
  );
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  setUsers: PropTypes.func.isRequired,
};
