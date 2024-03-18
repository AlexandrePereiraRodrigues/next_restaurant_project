import Image from "next/image";
const Navbar = () => {
    return (
      <nav className="bg-gray-50 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <img src="/logo.svg" alt="Logo" className="h-8" />
          </div>
          <div>
            {/* Botão Sign In */}
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold hover:bg-gray-200">
              Sign In
            </button>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;