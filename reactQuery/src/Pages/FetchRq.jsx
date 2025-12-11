import { fetchPosts } from "../API/api";
import {useQuery} from '@tanstack/react-query'

const FetchRq = () => {


  const {data, isLoading, isError, error} = useQuery({
    queryKey:['posts'],
    queryFn: fetchPosts,
  })

  if(isLoading) return <p>Loading...</p>
  if(isError) return <p>{error.message}</p>

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