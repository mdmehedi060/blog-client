
import Swal from 'sweetalert2'


const AddBlog = () => {
  const handleAddBlog=event=>{
    event.preventDefault();

    const form=event.target;

    const title= form.title.value;
    const category= form.category.value;
    const shortdiscription= form.shortdiscription.value;
    const longdiscription= form. longdiscription.value;
    const photo= form.photo.value;
   const newBlog={title,category,shortdiscription,longdiscription,photo}
   console.log(newBlog);

//    send data to the server
fetch('https://assigntment-eleven-server.vercel.app/blog',{
    method:'POST',
    headers:{
        'content-type' : 'application/json'
    },
    body:JSON.stringify(newBlog)
})
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.insertedId){
 
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });
    }
})

}
    return (
      <div className="bg-[#F4F3F0] p-24 mt-6 mb-8">
      <h2 className="text-3xl font-extrabold">Add a Blog</h2>
      <form onSubmit={handleAddBlog}>
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
        
        <input className="btn btn-block bg-orange-400 text-white" type="submit" value="Submit"  />
      </form>
    </div>
    );
};

export default AddBlog;