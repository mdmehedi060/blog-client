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
          loader:()=> fetch('https://assigntment-eleven-server.vercel.app/blog')},
        {
          path:'/viewdetails/:_id',
          element:<Details></Details>,
          loader:({ params }) => fetch(`https://assigntment-eleven-server.vercel.app/blog/${params?._id}`),
        },
        {
          path:'/addblog',
          element:<Privateroute><AddBlog></AddBlog></Privateroute>,
        },
        {
          path:'/allblogs',
          element:<AllBlog></AllBlog>,
          loader:()=> fetch('https://assigntment-eleven-server.vercel.app/blogadd')
        },                   
        {
          path:'/featuredblogs',
          element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
          path:'/wishlist',
          element:<Privateroute><Wishlist></Wishlist></Privateroute>,
          loader:()=> fetch('https://assigntment-eleven-server.vercel.app/wishlist'),
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
          path:'/updatedblog/:id',
          element:<Privateroute><UpdateBlog></UpdateBlog></Privateroute>,
          loader: ({ params }) => fetch(`https://assigntment-eleven-server.vercel.app/blog/${params?.id}`),
        },
      ]
    },
  ]);

export default router;