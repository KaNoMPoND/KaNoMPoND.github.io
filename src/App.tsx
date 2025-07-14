import React, { useRef } from "react";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import MyWorks from "./MyWorks";
import Activities from "./Activities";
import Certificate from "./Certificate";

function App() {
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const myworksRef = useRef<HTMLDivElement>(null);
  const activitiesRef = useRef<HTMLDivElement>(null);
  const certificateRef = useRef<HTMLDivElement>(null);


  // Typewriter Effect
  const typewriterText = "Student Of Bangkok University\nCyber security Major.";
  const [displayedText, setDisplayedText] = React.useState("");
  const [typeIndex, setTypeIndex] = React.useState(0);

  React.useEffect(() => {
    if (typeIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typewriterText[typeIndex]);
        setTypeIndex(typeIndex + 1);
      }, 70); // ปรับความเร็วได้
      return () => clearTimeout(timeout);
    }
  }, [typeIndex]);

  const [activeNav, setActiveNav] = React.useState('home');
  const [isScrolling, setIsScrolling] = React.useState(false);

  // Scroll spy (optional: highlight active menu ตาม section ที่ scroll ถึง)
  React.useEffect(() => {
    const handleScroll = () => {
      // ถ้ากำลัง scroll จากการกดเมนู ให้ข้าม scroll spy
      if (isScrolling) return;
      
      const scrollY = window.scrollY;
      
      // ถ้าอยู่ด้านบนสุด (Home)
      if (scrollY < 200) {
        setActiveNav('home');
        return;
      }
      
      const sectionOffsets = [
        { key: 'certificate', ref: certificateRef },
        { key: 'activities', ref: activitiesRef },
        { key: 'myworks', ref: myworksRef },
        { key: 'skill', ref: skillRef },
        { key: 'about', ref: aboutRef },
      ];
      
      for (let i = 0; i < sectionOffsets.length; i++) {
        const { key, ref } = sectionOffsets[i];
        if (ref.current && ref.current.offsetTop - 200 <= scrollY) {
          setActiveNav(key);
          return;
        }
      }
    };
    
    handleScroll(); // เรียกครั้งแรก
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  // Function สำหรับ scroll ไปยัง section โดยปิด scroll spy ชั่วคราว
  const scrollToSectionWithoutSpy = (ref: React.RefObject<HTMLDivElement>, navKey: string) => {
    setIsScrolling(true);
    setActiveNav(navKey);
    
    if (ref.current) {
      let offsetTop;
      // ปรับ offset พิเศษสำหรับ About me ให้ชิดกับหัวข้อมากขึ้น
      if (navKey === 'about') {
        offsetTop = ref.current.offsetTop - 80;
      } else {
        offsetTop = ref.current.offsetTop - 120;
      }
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    
    // เปิด scroll spy กลับหลังจาก scroll เสร็จ
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const scrollToContact = () => {
    setIsScrolling(true);
    setActiveNav('contact');
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 120;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  const scrollToHome = () => {
    setIsScrolling(true);
    setActiveNav('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col relative overflow-hidden">
      {/* Hamster Images on BG */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          
          @keyframes moveLeftRight {
            0% { left: -5%; }
            50% { left: 90%; }
            100% { left: -5%; }
          }
          
          @keyframes moveUpDown {
            0% { top: 20%; }
            50% { top: 70%; }
            100% { top: 20%; }
          }
          
          .hamster1 {
            position: absolute;
            animation: 
              rotate 10s linear infinite,
              moveLeftRight 15s ease-in-out infinite,
              moveUpDown 12s ease-in-out infinite;
          }
          
          .hamster2 {
            position: absolute;
            animation: 
              rotate 8s linear infinite,
              moveLeftRight 20s ease-in-out infinite reverse,
              moveUpDown 18s ease-in-out infinite reverse;
          }
        `}} />
        
        {/* First Hamster */}
        <div className="hamster1">
          <img 
            src="/Sad-Hamster-Seeking-Comfort-From-Owner-PNG.png" 
            alt="Sad Hamster" 
            className="w-28 md:w-40"
          />
        </div>
        
        {/* Second Hamster */}
        <div className="hamster2">
          <img 
            src="/Sad-Hamster-Seeking-Comfort-From-Owner-PNG.png" 
            alt="Sad Hamster" 
            className="w-24 md:w-32"
          />
        </div>
      </div>
      
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-md rounded-b-2xl shadow-md mt-4 mx-auto max-w-6xl fixed z-50 left-1/2 -translate-x-1/2">
        <div className="flex items-center text-2xl font-bold text-white whitespace-nowrap">
          Kunanon<span className="text-pink-400">.</span>
        </div>
        <ul className="flex gap-8 text-lg text-white/90 items-center whitespace-nowrap">
          <li
            className="relative cursor-pointer px-2 group"
            onClick={() => scrollToHome()}
          >
            <span className={activeNav === 'home' ? 'text-white font-bold' : ''}>Home</span>
            <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300 ${activeNav === 'home' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}></span>
          </li>
          <li
            className="relative cursor-pointer px-2 group"
            onClick={() => scrollToSectionWithoutSpy(aboutRef, 'about')}
          >
            <span className={activeNav === 'about' ? 'text-white font-bold' : ''}>About me</span>
            <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300 ${activeNav === 'about' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}></span>
          </li>
          <li
            className="relative cursor-pointer px-2 group"
            onClick={() => scrollToSectionWithoutSpy(skillRef, 'skill')}
          >
            <span className={activeNav === 'skill' ? 'text-white font-bold' : ''}>Skills</span>
            <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300 ${activeNav === 'skill' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}></span>
          </li>
          <li
            className="relative cursor-pointer px-2 group"
            onClick={() => scrollToSectionWithoutSpy(myworksRef, 'myworks')}
          >
            <span className={activeNav === 'myworks' ? 'text-white font-bold' : ''}>My Works</span>
            <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300 ${activeNav === 'myworks' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}></span>
          </li>
          <li
            className="relative cursor-pointer px-2 group"
            onClick={() => scrollToSectionWithoutSpy(activitiesRef, 'activities')}
          >
            <span className={activeNav === 'activities' ? 'text-white font-bold' : ''}>Activities</span>
            <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300 ${activeNav === 'activities' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}></span>
          </li>
          <li
            className="relative cursor-pointer px-2 group"
            onClick={() => scrollToSectionWithoutSpy(certificateRef, 'certificate')}
          >
            <span className={activeNav === 'certificate' ? 'text-white font-bold' : ''}>Certificate</span>
            <span className={`absolute left-0 right-0 -bottom-1 h-0.5 bg-white rounded transition-all duration-300 ${activeNav === 'certificate' ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-60'}`}></span>
          </li>
        </ul>
        <button className="border border-white/40 rounded-full px-5 py-2 text-white flex items-center gap-2 hover:bg-white/10 transition whitespace-nowrap" onClick={() => scrollToContact()}>
          Contact <span className="ml-1">↗</span>
        </button>
      </nav>

      {/* Hero Section (Home) */}
      <div ref={homeRef} className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16" id="home">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/20 flex items-center justify-center mt-12 mb-4 shadow-lg overflow-hidden">
          <img src="/S__40878175_0.jpg" alt="profile" className="w-full h-full object-cover" />
        </div>
        <div className="text-white text-xl font-medium mb-2">Hi! I'm Kunanon Hirunrattanaporn <span className="inline-block">👋🏻</span></div>
        <h1 className="text-white font-Teko text-5xl md:text-6xl font-bold leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>
          {displayedText}
        </h1>
        <p className="text-white/80 max-w-xl mx-auto mb-8 text-xl md:text-2xl">
        My <span style={{ color: "#E14434" }}>passionate</span> about <span className="underline">Cybersecurity</span> and <span className="underline">UX/UI Design</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            className="border border-white rounded-full px-6 py-3 text-white font-semibold flex items-center gap-2 hover:bg-white/10 transition"
            onClick={() => scrollToSectionWithoutSpy(aboutRef, 'about')}
          >
          my resume <span className="ml-1">⬇</span>
          </button>
        </div>
      </div>

      {/* About Me Section */}
      <div ref={aboutRef} id="about" className="w-full flex justify-center py-16 scroll-mt-24">
        <div className="max-w-6xl w-full px-4 md:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <AboutMe />
          </div>
        </div>
      </div>

      {/* Skill Section */}
      <div ref={skillRef} id="skill" className="w-full flex justify-center py-16 scroll-mt-24">
        <div className="max-w-6xl w-full px-4 md:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <Skill />
          </div>
        </div>
      </div>

      {/* My Works Section */}
      <div ref={myworksRef} id="myworks" className="py-16">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <MyWorks />
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div ref={activitiesRef} id="activities" className="py-16">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <Activities />
          </div>
        </div>
      </div>

      {/* Certificate Section */}
      <div ref={certificateRef} id="certificate" className="py-16">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <Certificate />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 pb-32">
        <div className="max-w-6xl w-full mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-br from-purple-900/20 via-purple-700/10 to-pink-600/20 backdrop-blur-md border border-purple-500/30 rounded-3xl p-8 shadow-2xl shadow-purple-500/20">
            <div className="flex flex-col items-start">
              <h2 className="text-3xl font-bold text-white mb-8">Contact me for internship.</h2>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <a href="tel:0955487274" className="text-white hover:text-pink-400 transition text-xl">095-548-7274</a>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <a href="mailto:kunanon.hn@gmail.com" className="text-white hover:text-pink-400 transition text-xl">kunanon.hn@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
