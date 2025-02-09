import UserProfile from "./components/UserProfile";

function App() {
  const callMe = () => {
    console.log("hello");
  };
  return (
    <div>
      Root Component
      <UserProfile
        username="App.js"
        age={20}
        favoriteFoods={[
          { name: "Sushi", id: 1 },
          { name: "Biriyani", id: 2 },
        ]}
        callMe={callMe}
      ></UserProfile>
    </div>
  );
}

export default App;
