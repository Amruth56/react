import { fetchPosts } from "../API/api";
import {useQuery} from '@tanstack/react-query'

const FetchRq = () => {


  const {data} = useQuery({
    queryKey:['posts'],
    queryFn: fetchPosts,
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