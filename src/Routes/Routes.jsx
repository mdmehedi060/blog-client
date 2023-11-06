import { createBrowserRouter } from 'react-router-dom';
import Home from './../Pages/Home/Home/Home';
import Main from './../Layout/Main';
import AddBlog from './../Pages/AddBlog/AddBlog';
import AllBlog from './../Pages/AllBlog/AllBlog';
import FeaturedBlogs from './../Pages/FeaturedBlogs/FeaturedBlogs';
import Wishlist from './../Pages/Wishlist/Wishlist';
import Login from './../Pages/Login/Login';
import Registation from './../Pages/Registation/Registation';
import UpdateBlog from './../Pages/UpdateBlog/UpdateBlog';
import Privateroute from './PrivateRoute';
import Details from './../Pages/Details/Details';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=> fetch('http://localhost:5000/blog')
        },
        {
          path:'/viewdetails/:_id',
          element:<Details></Details>,
          loader:({ params }) => fetch(`http://localhost:5000/blog/${params._id}`),
        },
        {
          path:'/addblog',
          element:<Privateroute><AddBlog></AddBlog></Privateroute>,
        },
        {
          path:'/allblogs',
          element:<AllBlog></AllBlog>,
          loader:()=> fetch('http://localhost:5000/blogadd')
        },
        {
          path:'/featuredblogs',
          element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
          path:'/wishlist',
          element:<Privateroute><Wishlist></Wishlist></Privateroute>,
          loader:()=> fetch('http://localhost:5000/wishlist'),
        },
      
        {
          path:'/login',
          element:<Login></Login>
        },
      
        {
          path:'/register',
          element:<Registation></Registation>
        },
       
        {
          path:'/updatedblog/:_id',
          element:<Privateroute><UpdateBlog></UpdateBlog></Privateroute>,
          loader: ({ params }) => fetch(`http://localhost:5000/blogadd/${params._id}`),
        },
      ]
    },
  ]);

export default router;