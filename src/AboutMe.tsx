import { useState } from "react";

const educationData = [
  {
    img: "/NEW-LOGO-BU_White.png",
    text: "University: Bangkok University (2022-2026)",
  },
  {
    img: "/479521090_1137084778208929_3280842143979660127_n.png",
    text: "High School: Wisutthi Kasattree School (2018-2020)",
  },
  {
    img: "/348224112_1295682824640061_3373534086276172687_n.png",
    text: "Junior High School: Saint Marry School (2015-2017)",
  },
];

function splitTextAndYear(text: string) {
  const match = text.match(/^(.*?)(\([^)]+\))?$/);
  if (!match) return { main: text, year: "" };
  return { main: match[1].trim(), year: match[2] ? match[2].replace(/[()]/g, "") : "" };
}

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState<'education' | 'project'>('education');

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-12 text-white">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-stretch gap-16">
        {/* Left: Content */}
        <div className="flex-1 flex flex-col justify-center items-start h-full min-h-[32rem]">
          <div className="mb-2 text-white/70">Introduction</div>
          <h1 className="text-4xl font-serif font-semibold mb-6">About me</h1>
          <p className="mb-8 text-base md:text-lg text-white/90 max-w-2xl">
          My name is Kunanon Hirunrattannaporn.I graduated from the Faculty of Information Technology and Innovation, Bangkok University.
          I created this website to present myself, my skills, and the projects I've worked on.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8 w-full">
            <button
              className={`flex flex-col items-center w-full p-4 font-semibold text-lg rounded-xl border shadow-sm transition-all duration-200 focus:outline-none
                ${activeTab === 'education'
                  ? 'bg-gray-200 text-gray-900 ring-2 ring-pink-400 border-transparent'
                  : 'bg-black/60 text-white/90 border-white/20 hover:bg-gray-700 hover:text-pink-300 hover:scale-105'}
              `}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTab('education')}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎓</span>
                <span>Education</span>
              </div>
            </button>
            <button
              className={`flex flex-col items-center w-full p-4 font-semibold text-lg rounded-xl border shadow-sm transition-all duration-200 focus:outline-none
                ${activeTab === 'project'
                  ? 'bg-gray-200 text-gray-900 ring-2 ring-pink-400 border-transparent'
                  : 'bg-black/60 text-white/90 border-white/20 hover:bg-gray-700 hover:text-pink-300 hover:scale-105'}
              `}
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveTab('project')}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">📁</span>
                <span>Projects</span>
              </div>
            </button>
          </div>
          {/* Tab Content */}
          <div className="mt-4 w-full flex flex-col items-start min-h-[300px]">
            {activeTab === 'education' && (
              <div className="w-full">
                <div className="mb-2 text-white font-medium">Education</div>
                <ul className="list-none pl-0 text-white/90 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full justify-items-center">
                    {educationData.map((item, idx) => {
                      const { main, year } = splitTextAndYear(item.text);
                      return (
                        <li key={idx} className="flex flex-col items-center gap-2">
                          <img src={item.img} alt="edupic" className="w-28 h-28 md:w-32 md:h-32 rounded-xl object-cover bg-white/20" />
                          <span className="text-center mt-1">
                            {main}
                            {year && <><br /><span className="text-white/60 text-sm">{year}</span></>}
                          </span>
                        </li>
                      );
                    })}
                  </div>
                </ul>
              </div>
            )}
            {activeTab === 'project' && (
              <div className="w-full">
                <div className="mb-2 text-white font-medium">Projects</div>
                <ul className="list-disc pl-5 text-white/90 space-y-3">
                  <li>Pentest Report: Example from TryHackMe</li>
                  <li>Basic Design Network system and Analysis Network System</li>
                  <li>UX/UI Design for Workout Application (Figma)</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Right: Placeholder for image */}
        <div className="flex-1 flex items-center justify-center h-full min-h-[32rem] mt-20">
          <img src="/S__40878177_0.jpg" alt="profile" className="w-64 h-96 md:w-72 md:h-[32rem] rounded-2xl object-cover shadow-md mr-auto scale-110 transition-all" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 