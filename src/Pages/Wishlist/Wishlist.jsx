import { useLoaderData } from "react-router-dom";
import WishlistCard from "./WishlistCard";


const Wishlist = () => {
  const wishlists = useLoaderData()
  console.log(wishlists);
  


    return (
        <div>
          <h2 className="text-4xl text-center font-bold">Wishlist Blogs</h2>  
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mb-6'>
        {
          wishlists.map(wishlist=><WishlistCard key={wishlist._id} wishlist={wishlist}></WishlistCard>)
        }
      </div>
        </div>
    );
};

export default Wishlist;