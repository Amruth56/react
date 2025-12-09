import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainLayout from './components/Layout/MainLayout';
import Home from './Pages/Home';
import FetchOld from './Pages/FetchOld';
import FetchRq from './Pages/FetchRq';

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
    ],
  },
]);

const App = () => {
 return <RouterProvider router={router}></RouterProvider>
}

export default App;