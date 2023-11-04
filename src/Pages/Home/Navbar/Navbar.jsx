import { Link } from 'react-router-dom';

const Navbar = () => {
    // const {user, logOut} = useContext(AuthContext)

// const handleLogout = ()=>{
//   logOut()
//   .then(()=>{})
//   .catch(error=>console.log(error))
// }
const navItems= <>
<li><Link to='/'>Home</Link></li>
<li><Link to='/addblog'>Add Blog</Link></li>
  <li><Link to='/allblogs'>All blogs</Link></li>
  <li><Link to='/featuredblogs'>Featured Blogs</Link></li>
  <li><Link to='/wishlist'>Wishlist</Link></li>
<li><Link to='/login' className='hidden'>Login</Link></li>

</>

    return (
        <div className="navbar bg-base-100 h-28 mb-4">
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
            <h1 className="text-4xl text-neutral-900">MH Blog</h1>
          </Link>
        </div>
        <div className=" hidden lg:flex justify-between">
          <ul className="menu menu-horizontal px-1">
         {navItems}
          </ul>
        </div>
        {/* <div className="navbar-end">
        <button className="btn btn-outline btn-warning">Login</button>
        </div> */}
      </div>
    );
};

export default Navbar;