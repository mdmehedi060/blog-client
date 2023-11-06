import { useLoaderData } from "react-router-dom";
import AllBlogCard from "./AllBlogCard";


const AllBlog = () => {
const blogadds=useLoaderData();
console.log(blogadds);

    return (
        <div>
          <h2>All Blog Pages:{blogadds.length}</h2>  
          <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6'>
            {
              blogadds.map(blogadd=><AllBlogCard key={blogadd._id} blogadd={blogadd}></AllBlogCard>)
            }
          </div>
        </div>
    );
};

export default AllBlog;