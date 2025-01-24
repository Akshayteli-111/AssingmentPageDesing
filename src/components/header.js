// import React from 'react'
// import Image from "next/image";

// function Header() {
//   return (
//     <>
//     <div className='flex items-center justify-between'>
//     <nav className="flex gap-[30px] justify-between items-center">
//     <Image src="/assets/logo.png" width={60} height={10} alt='logo icon' className="" />

//         <ul className="flex space-x-6 text-sm font-medium">
//           <li className="hover:text-green-600 cursor-pointer">Use cases</li>
//           <li className="hover:text-green-600 cursor-pointer">Articles</li>
//           <li className="text-green-600 cursor-pointer">About us</li>
//           <li className="hover:text-green-600 cursor-pointer">Artists</li>
//           <li className="hover:text-green-600 cursor-pointer">Guides</li>
//           <li className="hover:text-green-600 cursor-pointer">Contact us</li>
//         </ul>
//       </nav>
//       <button className="bg-black text-white px-6 py-2 rounded-full text-sm">Sign up</button>

//     </div>
    
//     </>
//   )
// }

// export default Header;
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between px-4 py-3 ">
        {/* Logo */}
        <div className="flex gap-[40px] items-center">
          <Image
            src="/assets/logo.png"
            width={60}
            height={10}
            alt="logo icon"
          />
            <nav className="hidden md:flex gap-[30px] justify-between items-center">
          <ul className="flex space-x-6 text-sm font-medium">
            <li className="hover:text-green-600 cursor-pointer">Use cases</li>
            <li className="hover:text-green-600 cursor-pointer">Articles</li>
            <li className="text-green-600 cursor-pointer">About us</li>
            <li className="hover:text-green-600 cursor-pointer">Artists</li>
            <li className="hover:text-green-600 cursor-pointer">Guides</li>
            <li className="hover:text-green-600 cursor-pointer">Contact us</li>
          </ul>
        </nav>
        </div>

        {/* Desktop Menu */}
      

        {/* Sign Up Button */}
        <button className="hidden md:block bg-black text-white px-6 py-2 rounded-full text-sm">
          Sign up
        </button>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-4 text-sm font-medium">
            <li className="hover:text-green-600 cursor-pointer">Use cases</li>
            <li className="hover:text-green-600 cursor-pointer">Articles</li>
            <li className="text-green-600 cursor-pointer">About us</li>
            <li className="hover:text-green-600 cursor-pointer">Artists</li>
            <li className="hover:text-green-600 cursor-pointer">Guides</li>
            <li className="hover:text-green-600 cursor-pointer">Contact us</li>
          </ul>
          <div className="p-4">
            <button className="w-full bg-black text-white px-6 py-2 rounded-full text-sm">
              Sign up
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
