import { Link } from 'react-router-dom';
import { Authcontext } from './../../../Providers/AuthProviders';
import { useContext } from 'react';
import userDefaultPic from "../../../assets/User/user.png"


const Navbar = () => {
  const {user,logOut} =useContext(Authcontext)
  const handleSignOut=()=>{
  logOut()
  .then(result=>{
      console.log(result);
  })
  .catch(error=>console.error(error))
  }
const navItems= <>
<li ><Link to='/'>Home</Link></li>
<li ><Link to='/addblog'>AddBlog</Link></li>
  <li ><Link to='/allblogs'>AllBlogs</Link></li>
  <li><Link to='/featuredblogs'>FeaturedBlogs</Link></li>
  <li><Link to='/wishlist'>Wishlist</Link></li>


</>

    return (
        <div className="navbar mt-6 bg-green-200 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
            </ul>
          </div>
          
          <Link className="btn btn-ghost normal-case text-xl">
            <h1 className="text-4xl font-bold text-neutral-900">SARA BLOG</h1>
          </Link>
        </div>
        <div className="hidden  lg:flex justify-evenly gap-10">
          <ul className="menu-horizontal gap-5 text-blue-600">
         {navItems}
          </ul>
        </div>
        <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userDefaultPic} />
                       
                    </div>
                </label>
                {
                    user ?
                    <button onClick={handleSignOut} className="btn">Log Out</button>
                    :
                    <Link to="/login">
                    <button className="btn">Log In</button>
                </Link>
                }
               
            </div>
      </div>
    );
};

export default Navbar;