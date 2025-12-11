import axios from "axios";

const api = axios.create(
    {
      baseURL: "https://jsonplaceholder.typicode.com"  
    }
)

export const fetchPosts = async(page =1, limit= 20) => {
    const res= await  api.get("/posts", {
      params: {
        _page: page,
        _limit: limit
      },
    })
    return res.status === 200? res.data : [];

}