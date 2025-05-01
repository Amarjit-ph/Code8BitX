import Link from "next/link";
import BackgroundMusic from "./BackgroundMusic";

export default function SideBar(){
    return (
        <div className="w-64 bg-purple-700 border-r-4 border-yellow-400 text-white shadow-lg">
        
        
          
        {/* Header with classic WordArt style */}
        <div className="p-4 text-center bg-blue-600 border-b-4 border-yellow-400">
          <h1 className="font-bold text-xl text-yellow-300 italic transform -rotate-2" 
              style={{textShadow: "2px 2px 0 #ff00ff, 4px 4px 0 #0000ff"}}>
            Keeping the '90s Online
          </h1>
        </div>
        
        {/* Under Construction banner */}
        <div className="p-2 bg-black text-center">
          <div className="text-yellow-300 animate-pulse font-bold">
            UNDER CONSTRUCTION...
          </div>
          <div className="flex justify-center my-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-3 h-6 mx-1 bg-yellow-300"></div>
            ))}
          </div>
        </div>
        
        {/* Classic 90s navigation with beveled buttons */}
        <nav className="p-4">
          <div className="text-center mb-4">
            <p className="text-yellow-300 mb-2">VISITORS:</p>
            <div className="bg-black inline-block px-2 py-1 border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600">
              0001012
            </div>
          </div>
          
          <ul className="space-y-3">
            {/* {["HOME", "ABOUT ME", "MY LINKS", "GUESTBOOK", "EMAIL ME"].map((item, index) => (
              <li key={index}>
                <a href="#" className="block text-center p-2 bg-blue-500 hover:bg-blue-400 font-bold text-white 
                                      border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600">
                  {item}
                </a>
              </li>
            ))} */}
             <Link href="/">
                <li className="mt-3">
                    <a href="#" className="block text-center p-2 bg-blue-500 hover:bg-blue-400 font-bold text-white 
                                        border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600">
                    HOME
                    </a>
                </li>
            </Link>

            <Link href="/about">
                <li className="mt-3">
                    <a href="#" className="block text-center p-2 bg-blue-500 hover:bg-blue-400 font-bold text-white 
                                        border-2 border-t-white border-l-white border-b-gray-600 border-r-gray-600">
                    ABOUT ME
                    </a>
                </li>
            </Link>
          </ul>
          
          <div className="mt-6 text-center">
            <div className="mb-2 text-yellow-300">BEST VIEWED WITH:</div>
            <div className="flex justify-center space-x-2">
              <div className="bg-gray-200 text-blue-800 text-xs px-2 py-1 font-bold rounded">
                NETSCAPE
              </div>
              <div className="bg-gray-200 text-blue-800 text-xs px-2 py-1 font-bold rounded">
                IE 4.0
              </div>
            </div>
          
           {/* Under Construction banner */}

          <div className="mt-7 p-2 bg-white text-center">
            <div className="text-black font-bold">
              CODED BY :
            </div>
            <div className="text-black animate-pulse font-bold">
              Amarjit Pheiroijam
            </div>
          </div>
          </div>
        </nav>
      </div>
    )
}