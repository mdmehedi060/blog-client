import Swal from "sweetalert2";





const NewsLetterCard = ({ letter }) => {
  const { name, email, subscribedDate, profileImage } = letter;

  const handleSubmit = event => {
    event.preventDefault();
    
        const form=event.target;
    
        const email= form.email.value;
        console.log(email);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Thank you for subscribing to our newslettr",
          showConfirmButton: false,
          timer: 2500
        });

        

  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          className="rounded-full h-[200px] w-[200px]"
          src={profileImage}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          <span className="font-bold">Email:</span> {email}
        </p>
        <p>
          <span className="font-bold">Subscribed Date:</span> {subscribedDate}
        </p>
       <form onSubmit={handleSubmit}>
       <div className="ml-16">
          <input name="email" type="email" placeholder="Email" required  />
        </div>
        <div className="ml-28 mt-2">
          <button  className="btn btn-primary">
            Submit
          </button>
        </div>
       </form>
      </div>
    </div>
  );
};

export default NewsLetterCard;
