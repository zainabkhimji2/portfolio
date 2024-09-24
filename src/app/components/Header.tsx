import Link from "next/link";

function Header() {

  
  return (
    <>
      <header className="py-4 bg-gradient-to-b from-black to-gray-900 shadow-lg fixed top-0 w-full z-50">
        {/* Header container */}
        <div className="mx-4 sm:mx-auto max-w-6xl px-6 flex items-center justify-between border border-zinc-600 p-3 rounded-full transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
          
          {/* Logo */}
          <div className="text-xl font-bold text-purple-600 cursor-pointer transition-all duration-300 hover:text-purple-800">
            ZAINAB <span className="text-blue-500">KHIMJI</span>
          </div>

          {/* Navigation links (hidden on small screens) */}
          <div className="hidden sm:flex space-x-8">
            <p className="text-purple-500 cursor-pointer hover:text-purple-700 transition-all duration-300">
              <Link href="#about">ABOUT</Link>
            </p>
            <p className="text-purple-500 cursor-pointer hover:text-purple-700 transition-all duration-300">
              <Link href="#skills">SKILLS</Link>
            </p>
            <p className="text-purple-500 cursor-pointer hover:text-purple-700 transition-all duration-300">
              <Link href="#experience">EXPERIENCE</Link>
            </p>
            <p className="text-purple-500 cursor-pointer hover:text-purple-700 transition-all duration-300">
              <Link href="#contact">CONTACT</Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 items-center">
            <button className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 hover:shadow-2xl transition-transform transform hover:scale-105">
              <Link href="https://www.linkedin.com/in/zainab-khimji-b54b67320/">LINKEDIN</Link>
            </button>

            <button className="border border-gray-500 px-4 py-2 text-white rounded-full shadow-lg hover:border-gray-400 hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
              <Link href="https://github.com/zainabkhimji2">GITHUB</Link>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

