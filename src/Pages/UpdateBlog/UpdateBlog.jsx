
import { useLoaderData } from 'react-router-dom';
import { swal } from 'sweetalert2';

const UpdateBlog = () => {
    const blog = useLoaderData();
    const { _id, name, quantity, supplier, test, category, details, photo } = blog;

    const handleUpdateBlog=event=>{
        event.preventDefault();
    
        const form=event.target;
    
        const name= form.name.value;
        const quantity= form.quantity.value;
        const supplier= form.supplier.value;
        const test= form.test.value;
        const category= form.category.value;
        const details= form.details.value;
        const photo= form.photo.value;
       const updetedCoffee={name,quantity,supplier,test,category,details,photo}
       console.log(updetedCoffee);
    
    //    send data to the server
    fetch(`http://localhost:5000/coffee/${_id}`,{
        method:'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(updetedCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.modifiedCount > 0){
          swal.fire({
            title: 'Success!',
            text: 'Coffee Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
    })
    
    }
    return (
      <div className="bg-[#F4F3F0] p-24 mt-6 mb-8">
      <h2 className="text-3xl font-extrabold">Update a Blog</h2>
      <form onSubmit={handleUpdateBlog}>
        {/* form name & quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Blog Title</span>
            </label>
            <label className="input-group ">
              <input
                name="title"
                type="text"
                placeholder="Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                name="category"
                type="text"
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supllier & test row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Short Discription</span>
            </label>
            <label className="input-group ">
              <input
                name="shortdiscription"
                type="text"
                placeholder="Short Discription"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Long Discription</span>
            </label>
            <label className="input-group">
              <input
                name="longdiscription"
                type="text"
                placeholder="Long Discription"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
       
        {/* form photo row */}
        <div className="mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group ">
              <input
                name="photo"
                type="text"
                placeholder="Photo RRL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
       
        </div>
        
        <input className="btn btn-block bg-orange-400 text-white" type="submit" value="Update Blog"  />
      </form>
    </div>
    );
};

export default UpdateBlog;