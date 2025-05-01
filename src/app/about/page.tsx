import SideBar from "../components/Sidebar";

export default function AboutMePage() {
  return (
    <div className="flex h-screen bg-teal-300" style={{fontFamily: "'Comic Sans MS', 'Comic Sans', cursive"}}>
      {/* Left Navigation */}
      <SideBar/>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Banner header with stars */}
        <header className="bg-blue-800 p-3 text-white border-b-4 border-yellow-400 shadow-md">
          <div className="text-center font-bold">
            ★★★ ALL ABOUT ME! ★★★
          </div>
        </header>
        
        {/* Main content with typical 90s styling */}
        <main className="flex-1 overflow-y-auto p-6 bg-teal-300 text-black">
          <div className="max-w-4xl mx-auto">
            
            {/* About Me Header */}
            <div className="bg-white border-4 border-blue-700 p-4 mb-6 shadow-lg">
              <h2 className="text-center text-2xl font-bold text-purple-700 mb-4" 
                  style={{textShadow: "1px 1px 0 #ff00ff"}}>
                ABOUT ME
              </h2>
              <div className="flex justify-center mb-4">
                <div className="w-full h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center mb-4">
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                  <img src="https://avatars.githubusercontent.com/u/28795297?s=400&u=97b9ff773ad9118d7f1e9ac9f7f68818d81fe5e5&v=4" className="border-4 border-pink-500" alt="placeholder" />
                </div>
                <div className="md:w-2/3 md:pl-4 text-center md:text-left">
                  <h3 className="text-blue-600 font-bold text-lg mb-2">Hello folks!</h3>
                  <p className="text-black">
                    My name is Amarjit Pheirojam,
                    and I'm a software engineer who is passionate about building software products and enjoys wearing many hats in a fast-paced environment. Currently, I work at Juntrax, which offers an HRMS and professional service automation solution for startups and MSME companies globally.
                    <br/><br/>I have experience delivering multiple end-to-end software products for startups, resulting in operational expansions and hiring more people in the health technology space. I delivered a project that brought recurring revenue from medium to large restaurants and worked on several features that improved workflow and onboarding restaurants into the platform.
                    <br/><br/>I approach every problem with creativity, which enhances my problem-solving skills. I'm a team player with hands-on experience in different levels of design and development of data-driven software products. I'm passionate about developing products that empower people with great user empathy.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Bio Section */}
            <div className="bg-pink-200 border-4 border-blue-700 p-4 mb-6 shadow-lg">
              <h3 className="text-center font-bold text-xl text-green-700 mb-4">MY BIO</h3>
              <div className="bg-white p-3 border-2 border-blue-500">
                <p className="text-black">
                  I spend most of my time surfing the web, playing MUDs, and learning HTML. I hope to work for 
                  a dot-com company someday!
                </p>
                <br/>

                <p className="mb-4 text-black">
                  I grew up in Imphal, a small town in North-East India where the conventional dream is a stable government job. But I chose a different path—one guided by curiosity, creativity, and a deep passion for technology.
                  Driven by a desire to build and innovate, I moved to Chandigarh after high school to pursue a degree in Computer Science. That step marked the beginning of a transformative journey—from being a first-generation professional in tech to becoming a software engineer and budding entrepreneur, committed to solving real-world problems through code.
                  <br/><br/>Today, I live and work in Bengaluru, India, where I’m part of a fast-moving startup that empowers businesses around the world to streamline their operations and manage human capital more effectively.
                  As W. Clement Stone said, “When you discover your mission, you will feel its demand.” For me, that mission is clear: to use technology as a tool for impact, progress, and positive change.
                </p>   
              </div>
            </div>
            
            {/* Interests And Hobbies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interests */}
              <div className="bg-yellow-200 border-4 border-blue-700 p-4 shadow-lg">
                <h3 className="text-center font-bold text-xl text-red-600 mb-4">MY INTERESTS</h3>
                <div className="bg-white p-3 border-2 border-blue-500">
                  <ul className="list-disc pl-5 space-y-2 text-black">
                    <li>DevOps - Github, Jira, Bitbucket, Docker, Google Cloud Platform, Heroku</li>
                    <li>Back‑end - Nodejs, Express, Cloud functions, MongoDB, Firebase, MySql, REST API</li>
                    <li>Front‑end - React, Flutter, Redux, HTML5, CSS, Tailwind, Material Design, Bootstrap</li>
                    <li>Programming Langauge - C++, Javascript, Typescript, Dart</li>
                    <li>Documentation - Confluence, Postman, Draw.io</li>
                  </ul>
                </div>

              </div>
              
              {/* Favorite Links */}
              <div className="bg-blue-200 border-4 border-blue-700 p-4 shadow-lg">
              <h3 className="text-center font-bold text-xl text-purple-700 mb-4">FAVORITE THINGS</h3>
              <table className="w-full border-collapse border-2 border-black">
                <tr className="bg-purple-300">
                  <td className="border-2 border-black p-1 font-bold text-center">MUSIC:</td>
                  <td className="border-2 border-black p-1">Travis Scott, Doja cat, Eminem, Dhinchak Pooja</td>
                </tr>
                <tr className="bg-yellow-300">
                  <td className="border-2 border-black p-1 font-bold text-center">FOOD:</td>
                  <td className="border-2 border-black p-1">Dosa, Idli, Fried Chicken, Loaded Fries, Sambar and coconut Chutney</td>
                </tr>
                <tr className="bg-green-300">
                  <td className="border-2 border-black p-1 font-bold text-center">MOVIES:</td>
                  <td className="border-2 border-black p-1">Pushpa 2, Titanic, Baaghi 2</td>
                </tr>
                <tr className="bg-pink-300">
                  <td className="border-2 border-black p-1 font-bold text-center">TV:</td>
                  <td className="border-2 border-black p-1">Last of us 2, Sacred games & Squid games</td>
                </tr>
              </table>
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