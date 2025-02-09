import  UserProfile  from "./components/UserProfile";

function App(){
    const callMe = () => {
        console.log("hello")
    }
    return (
        <div>
            Root Component 
            <UserProfile username = "App.js" age = {20} favoriteFoods={[{name: 'sushi'}, {name: "biriyani"}]} callMe= {callMe}></UserProfile>
        </div>
    )
}

export default App