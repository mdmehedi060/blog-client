
import { useState } from 'react';
import { useEffect } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [blogs,setBlogs]=useState([]);
const [dataLength,setdataLength]=useState(6);
const [isShow,setIsShow]= useState(false)
    useEffect(()=>{
      fetch('http://localhost:5000/blog')
      .then(res => res.json())
      .then(data => setBlogs(data));
    },[])

    return (
        <div>
            <h2 className="text-6xl text-center font-bold">Recent Blog Posts Section</h2>
            <p className="text-center">A blog is a regularly updated website or online platform where an 
            individual, group, or organization publishes written, multimedia, <br /> or other content on a particular
             subject or a variety of topics.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6'>
            {
               isShow ? blogs.map(blog=><BlogCard key={blog._id} blog={blog}></BlogCard>)
               : blogs.slice(0, 6).map(blog=><BlogCard key={blog._id} blog={blog}></BlogCard>)
             }
            </div>
         
            {
            blogs.length > 4 &&  <button onClick={()=> setIsShow(!isShow)}
            className="px-5 mt-5 bg-green-200 block mx-auto mb-5">
             See More Blog
           </button>
         }
        </div>
    );
};

export default Blog;