
import { Link } from 'react-router-dom';

const AllBlogCard = ({blogadd}) => {
    const {title,category,longdiscription,photo,shortdiscription}=blogadd;
    return (
       
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={photo} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: {title}</h3>
        </a>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Category: {category}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Short Discription:</span> {shortdiscription}</p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"><span className="font-bold">Long Discription:</span> {longdiscription}</p>
        <div className="flex items-center justify-between mt-2">
           <Link >
           <button className="btn btn-primary">View Details</button>
           </Link>
          <Link to='/wishlist'>
          <button className="btn btn-accent">Wishlist</button>
          </Link>
           
        </div>
    </div>
</div>

    );
};

export default AllBlogCard;