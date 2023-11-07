import Swal from "sweetalert2";



const WishlistCard = ({wishlist}) => {
    const {_id, title,image,short_description,category,long_description } = wishlist;

const handleDelete=_id=>{
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    console.log('delete confirmed');
fetch(`http://localhost:5000/wishlist/${_id}`,{
  method:"DELETE",
})
.then(res=>res.json())
.then(data=>{
  console.log(data);
  if(data.deletedCount > 0){
 Swal.fire({
      title: "Deleted!",
      text: "Your Blog has been deleted.",
      icon: "success"
    });
  }
})
  }
});
}

    return (
        <div className="card w-96  bg-base-100 mx-auto mt-6 mb-6 shadow-xl">
        <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title font-bold">Title: {title}</h2>
          <h5 className="card-title font-bold">Category: {category}</h5>
          <p><span className='font-bold'>Short Discription:</span> {short_description}</p>
          <p><span className='font-bold'>Long Discription:</span> {long_description}</p>
     
      <div className='flex justify-center'>
      <button onClick={()=>handleDelete(_id)}  className="btn btn-accent ">Delete</button>
      </div>
        </div>
      </div>
    );
};

export default WishlistCard;