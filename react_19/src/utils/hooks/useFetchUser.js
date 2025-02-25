import { useEffect, useState } from "react";

export default function useFetchUser(userId){
    const [userData, setUserData] = useState(null);
    const userApiUrl = `https://jsonplaceholder.typicode.com/users`;

    useEffect(()=> {
        const controller = new AbortController();
        fetch(`${userApiUrl}/${userId}`, {signal: controller.signal}).then(response => response.json()).then(data=> setUserData(data)).catch(error => console.log(error))
        return (()=> {
            controller.abort();
        });
    }, [userId]);
    return userData;
}