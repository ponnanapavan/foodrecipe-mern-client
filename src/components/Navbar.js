import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  function handleLogout() {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate('/auth');
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-4 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10">
      <div className="flex justify-between items-center">
        <Link to='/' className="text-2xl font-bold hover:text-gray-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Recipe App</Link>
        <div className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          <Link to='/' className="text-sm hover:text-gray-300">Home</Link>
          <Link to='/create-recipe' className="text-sm hover:text-gray-300">Create Recipes</Link>
          <Link to='/saved-recipes' className="text-sm hover:text-gray-300">Saved Recipes</Link>
          {!cookies.access_token ?
            <Link to='/auth' className="text-sm hover:text-gray-300">Signup/Login</Link> :
            <button onClick={handleLogout} className="text-sm hover:text-gray-300">Logout</button>
          }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
