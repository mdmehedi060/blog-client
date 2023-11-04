import { createBrowserRouter } from 'react-router-dom';
import Home from './../Pages/Home/Home/Home';
import Main from './../Layout/Main';
import AddBlog from './../Pages/AddBlog/AddBlog';
import AllBlog from './../Pages/AllBlog/AllBlog';
import FeaturedBlogs from './../Pages/FeaturedBlogs/FeaturedBlogs';
import Wishlist from './../Pages/Wishlist/Wishlist';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/addblog',
          element:<AddBlog></AddBlog>
        },
        {
          path:'/allblogs',
          element:<AllBlog></AllBlog>
        },
        {
          path:'/featuredblogs',
          element:<FeaturedBlogs></FeaturedBlogs>
        },
        {
          path:'/wishlist',
          element:<Wishlist></Wishlist>
        },
      ]
    },
  ]);

export default router;