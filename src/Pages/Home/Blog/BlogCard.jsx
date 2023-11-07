
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from './../../../Providers/AuthProviders';
import { useContext } from 'react';

const BlogCard = ({blog}) => {
const {_id,title,image,short_description,category}= blog;
// console.log(blog);
const {user}=useContext(Authcontext);
const email=user?.email || "";
const handleWishlist = (blog) => {
    const { title,image,short_description,category,long_description } = blog;
    const wishListData = {
title,image,short_description,category,long_description,email
    };
    console.log(wishListData);


    axios.post("https://assigntment-eleven-server.vercel.app/wishlist", wishListData)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
                    title: "Good job!",
                    text: "Added to the Wishlist!",
                    icon: "success"
                  });
      });
  };



    return (
        
<div className="w-full h=[600px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div>
        <img className="h-[300px] w-full" src={image} alt="Blog image" />
    </div>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-bold mt-2">Title: {title}</h5>
        </a>
       <div>
       <span className="text-xl font-bold mt-2">Category: {category}</span>
        <p className="mt-2">{short_description}</p>
       </div>
        <div className="flex items-center justify-between mt-2">
           <Link to={`/viewdetails/${_id}`}>
           <button className="btn btn-primary">View Details</button>
           </Link>
          <Link to='/wishlist'>
          <button onClick={() => handleWishlist(blog)} className="btn btn-accent">Wishlist</button>
          </Link>
           
        </div>
    </div>
</div>

    );
};

export default BlogCard;