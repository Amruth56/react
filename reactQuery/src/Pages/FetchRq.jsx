import { fetchPosts } from "../API/api";
import {useQuery} from '@tanstack/react-query'

const FetchRq = () => {

  const getPostsData = async() => {
    try{
      const res = await fetchPosts();
      const data = res.data;
      console.log(data)

     return res.status === 200 ? data: [];

    }catch(err){
      console.log(err);
      return [];
    }
  }

  const {data} = useQuery({
    queryKey:['posts'],
    queryFn: getPostsData,
  })

  return (
    <div>
      {data?.map((curEle) => 
      {
        return (
          <li key={curEle.id}>
            <h3>{curEle.title}</h3>
            <p>{curEle.body}</p>
          </li>
        )
      })}
    </div>
  )
}

export default FetchRq