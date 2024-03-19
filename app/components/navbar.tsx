import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="backdrop-filter backdrop-blur-lg p-4 shadow-md absolute w-full">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="flex items-center">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-20 w-50" />
        </div>
        <div>
          {/* Botão Sign In */}
          <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-900 hover:text-white">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
