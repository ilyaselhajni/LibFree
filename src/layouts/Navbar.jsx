import React from 'react';
import { GiEvilBook } from 'react-icons/gi';

const Navbar = () => {
    return (
        <>
<body  class="bg-gradient-to-b from-[#0C0E13] to-[#111F2A] text-white min-h-screen font-serif">
 <div class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              w-[500px] h-[500px] bg-blue-500 opacity-30 rounded-full blur-[150px] z-0">
  </div>

  <nav class="absolute top-6 left-1/2 transform -translate-x-1/2 z-10">
    <span class="bg-white text-black px-6 py-2 rounded-full flex items-center space-x-6 shadow-lg font-medium text-sm">
      <span class="font-semibold"><GiEvilBook className='h-10 w-10 text-blue-950' /></span>
      <a href="/" class="hover:text-blue-950 hover:scale-90 transition-all font-medium">Home</a>
      <a href="#" class="hover:text-blue-950 hover:scale-90 transition-all font-medium">Books</a>
      <a href="#" class="hover:text-blue-950 hover:scale-90 transition-all font-medium">Read a book</a>
      <a href="#" class="hover:text-blue-950 hover:scale-90 transition-all font-medium">Early Access</a>
    </span>
  </nav>
</body>

        </>
    );
};

export default Navbar;
