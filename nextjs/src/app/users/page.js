async function userList(){
    let data = await fetch("https://dummyjson.com/users").then(res => res.json()).then(data => data)
    return data;
    console.log(data)
}

export default async function Page(){

    let users = await userList();
    console.log(users)
    return (
        <div>
            <h1>User Name List</h1>
            {
                users.users.map((item)=> {
                    return (
                        <div key={item.id}>
                            <h2>{item.firstName}</h2>
                            <p>{item.email}</p>
                        </div>
                    ) 
                })
            }
        </div>
    )
}