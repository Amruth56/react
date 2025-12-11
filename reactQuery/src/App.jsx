import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout';
import Home from './Pages/Home';
import FetchOld from './Pages/FetchOld';
import FetchRq from './Pages/FetchRq';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import InfiniteScroll from './Pages/InfiniteScroll';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path:"/",
        element: <Home/>,
      },
      {
        path: "/trad",
        element: <FetchOld/>,
      },
      {
        path: "/rq",
        element: <FetchRq/>,
      },
      {
        path:'/scroll',
        element:<InfiniteScroll/>
      }
    ],
  },
]);

const App = () => {
  const queryClient = new QueryClient()
 return(
 <QueryClientProvider client={queryClient}>
 <RouterProvider router={router}></RouterProvider>
 </QueryClientProvider>) 
}

export default App;