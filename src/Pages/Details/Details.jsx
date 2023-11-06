
import { useLoaderData, Link } from 'react-router-dom';




const Details = () => {
    const details= useLoaderData();
    console.log(details);
    const {_id,title,image,short_description,category,long_description}= details;
    return (
        <div>
            <h2 className="text-4xl text-center font-bold">This is details page</h2>

   <div className="card w-[900px]  bg-base-100 mx-auto mt-6 mb-6 shadow-xl">
        <figure><img className='w-full h-[400px]' src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title: {title}</h2>
          <h5 className="card-title">Category: {category}</h5>
          <p><span className='font-bold'>Short Discription:</span> {short_description}</p>
          <p><span className='font-bold'>Long Discription:</span> {long_description}</p>
      <form >
      <div className='flex justify-center'>
      <textarea placeholder="Comment" className="textarea  textarea-bordered textarea-primary textarea-sm w-full max-w-xs" ></textarea>
      </div>
      <div className="card-actions justify-center mt-3">
            <button className="btn btn-primary">Submit</button>
          </div>
      </form>
      <Link to={`/updatedblog/${_id}`}>
      <button className="btn btn-accent">Update</button>
      </Link>
        </div>
      </div>
     
        </div>
    );
};

export default Details;