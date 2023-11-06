
import { Link } from 'react-router-dom';

const WishlistCard = ({wishlist}) => {
    const { title,image,short_description,category,long_description } = wishlist;

    return (
        <div className="card w-96  bg-base-100 mx-auto mt-6 mb-6 shadow-xl">
        <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Title: {title}</h2>
          <h5 className="card-title font-bold">Category: {category}</h5>
          <p><span className='font-bold'>Short Discription:</span> {short_description}</p>
          <p><span className='font-bold'>Long Discription:</span> {long_description}</p>
     
      <div className='flex justify-center'>
      <button  className="btn btn-accent ">Delete</button>
      </div>
        </div>
      </div>
    );
};

export default WishlistCard;