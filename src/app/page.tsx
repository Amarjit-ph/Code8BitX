import BackgroundMusic from "./components/BackgroundMusic";
import SideBar from "./components/Sidebar";
import Link from 'next/link';

export default function Home() {
  return RetroWebsite()
}

function RetroWebsite() {
  return (
    <div className="flex h-screen bg-teal-300" style={{fontFamily: "'Comic Sans MS', 'Comic Sans', cursive"}}>

      {/* Left Navigation - Typical 90s sidebar */}
      <SideBar/>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Banner header with marquee effect */}
        <header className="bg-blue-800 p-3 text-white border-b-4 border-yellow-400 shadow-md">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block">
              ★★★ WELCOME TO MY HOMEPAGE! THANKS FOR VISITING! THIS SITE LOOKS BEST IN 800x600 RESOLUTION! ★★★
            </div>
          </div>
        </header>
        
        {/* Main content with typical 90s styling */}
        <main className="flex-1 overflow-y-auto p-6 bg-teal-300">
          <div className="max-w-4xl mx-auto">

            {/* Welcome section */}
            <div className="bg-white border-4 border-blue-700 p-4 mb-6 shadow-xl">
              <h2 className="text-center text-3xl font-extrabold text-purple-700 mb-4" 
                  style={{ textShadow: "2px 2px 0 #ff00ff" }}>
                🚀 Welcome to My Web 1.0 Revival Zone 🌐
              </h2>
              <div className="flex justify-center mb-4">
                <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 animate-pulse"></div>
              </div>
              <p className="mb-4 text-center text-black text-lg">
                Hey there, netizen! You've just stumbled upon my nostalgic slice of the internet — handcrafted on May 2, 2025, with 💾 vibes and a sprinkle of pixel-perfect chaos. <br />
                <span className="italic text-sm text-gray-600">Last updated: 05/02/25</span>
              </p>
              <p className="text-center text-black text-md mb-2">
                Here, it's always <span className="font-mono text-blue-600">view-source</span> season. Expect hand-coded passion, animated borders, and GIFs that refuse to die. 
              </p>
              <p className="text-center text-black text-md mb-2">
                This site might not auto-scale perfectly or follow modern SEO trends... but it *will* hit you right in the feels. 
              </p>
              <p className="text-center text-black text-md font-semibold">
                Buckle up, dial in, and explore what happens when tech meets raw curiosity.
              </p>
            </div>

            {/* Content sections with typical 90s table-like grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* News section */}
              <div className="bg-yellow-200 border-4 border-blue-700 p-4 shadow-lg">
                <h3 className="text-center font-bold text-xl text-red-600 mb-2">WHAT'S NEW??</h3>
                <ul className="list-disc pl-5 space-y-2 text-black">
                  <li>Added new links page (05/01/25)</li>
                  <li>Fixed broken images (04/28/25)</li>
                  <li>My cat pictures section updated!</li>
                </ul>
                <div className="flex justify-center mt-4">
                  <div className="animate-bounce">
                    <div className="bg-red-500 text-white text-xs px-2 py-1 font-bold">
                      NEW!
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Links section */}
              <div className="bg-pink-200 border-4 border-blue-700 p-4 shadow-lg">
                <h3 className="text-center font-bold text-xl text-green-700 mb-2">COOL LINKS</h3>
                <div className="flex flex-col items-center">
                  <div className="bg-blue-100 border-2 border-blue-500 p-2 w-full mb-2 text-center">
                    <a href="https://github.com/Amarjit-ph" className="text-blue-700 underline">Link to my github account</a>
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-500 p-2 w-full mb-2 text-center">
                    <a href="https://www.linkedin.com/in/amarjit-pheiroijam-234bba166/" className="text-blue-700 underline">To my professional LinkedIn account</a>
                  </div>
                  <div className="bg-blue-100 border-2 border-blue-500 p-2 w-full text-center">
                    <a href="https://www.instagram.com/amarjit_pheiroijam?igsh=MTk3OGZ1ZmpwMnV6MQ%3D%3D&utm_source=qr" className="text-blue-700 underline">Instgram Profile</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Classic 90s footer with webring and badges */}
            <div className="mt-6 text-center">
              <div className="bg-black text-white p-3 border-2 border-white">
                <div className="mb-3">
                  JOIN MY WEB RING! 
                  <div className="flex justify-center mt-2 space-x-2">
                    <button className="bg-gray-300 border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 text-black px-2">
                      ◀ PREV
                    </button>
                    <button className="bg-gray-300 border-2 border-t-white border-l-white border-b-gray-700 border-r-gray-700 text-black px-2">
                      NEXT ▶
                    </button>
                  </div>
                </div>
                <div className="text-xs">
                  This site is best viewed at 800x600 resolution with 16-bit color.
                  <br/>
                  © 1998 - All Rights Reserved - No frames, no Java, no problem!
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}