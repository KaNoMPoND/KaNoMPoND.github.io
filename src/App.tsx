import React, { useRef } from "react";
import AboutMe from "./AboutMe";
import Skill from "./Skill";
import MyWorks from "./MyWorks";
import Activities from "./Activities";

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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  // Certificate Modal State
  const [certificateModalOpen, setCertificateModalOpen] = React.useState(false);
  const [certificateModalImg, setCertificateModalImg] = React.useState("");
  const [certificateModalTitle, setCertificateModalTitle] = React.useState("");

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
    setMobileMenuOpen(false);
    
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
    setMobileMenuOpen(false);
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
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  // Certificate Modal Functions
  const openCertificateModal = (img: string, title: string) => {
    setCertificateModalImg(img);
    setCertificateModalTitle(title);
    setCertificateModalOpen(true);
  };

  const closeCertificateModal = () => {
    setCertificateModalOpen(false);
    setCertificateModalImg("");
    setCertificateModalTitle("");
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
      <nav className="w-full flex justify-between items-center px-4 sm:px-8 py-4 bg-white/10 backdrop-blur-md rounded-b-2xl shadow-md mt-4 mx-auto max-w-6xl fixed z-50 left-1/2 -translate-x-1/2">
        <div className="flex items-center text-xl sm:text-2xl font-bold text-white whitespace-nowrap">
          Kunanon<span className="text-pink-400">.</span>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
          </svg>
        </button>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 lg:gap-8 text-base lg:text-lg text-white/90 items-center whitespace-nowrap">
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
        <button className="hidden md:flex border border-white/40 rounded-full px-5 py-2 text-white items-center gap-2 hover:bg-white/10 transition whitespace-nowrap" onClick={() => scrollToContact()}>
          Contact <span className="ml-1">↗</span>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-blue-900/95 backdrop-blur-md z-40 p-4 rounded-b-2xl shadow-lg md:hidden">
          <ul className="flex flex-col gap-4 text-white">
            <li 
              className={`p-2 ${activeNav === 'home' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToHome()}
            >
              Home
            </li>
            <li 
              className={`p-2 ${activeNav === 'about' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToSectionWithoutSpy(aboutRef, 'about')}
            >
              About me
            </li>
            <li 
              className={`p-2 ${activeNav === 'skill' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToSectionWithoutSpy(skillRef, 'skill')}
            >
              Skills
            </li>
            <li 
              className={`p-2 ${activeNav === 'myworks' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToSectionWithoutSpy(myworksRef, 'myworks')}
            >
              My Works
            </li>
            <li 
              className={`p-2 ${activeNav === 'activities' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToSectionWithoutSpy(activitiesRef, 'activities')}
            >
              Activities
            </li>
            <li 
              className={`p-2 ${activeNav === 'certificate' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToSectionWithoutSpy(certificateRef, 'certificate')}
            >
              Certificate
            </li>
            <li 
              className={`p-2 mt-2 border border-white/40 rounded-full text-center ${activeNav === 'contact' ? 'bg-white/10 font-bold' : ''}`}
              onClick={() => scrollToContact()}
            >
              Contact
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section (Home) */}
      <div ref={homeRef} className="flex-1 flex flex-col items-center justify-center text-center px-4 pt-32 pb-16" id="home">
        <div className="w-56 h-56 md:w-64 md:h-64 rounded-full bg-white/20 flex items-center justify-center mt-12 mb-4 shadow-lg overflow-hidden">
          <img src="/S__40878175_0.jpg" alt="profile" className="w-full h-full object-cover" />
        </div>
        <div className="text-white text-xl font-medium mb-2">Hi! I'm Kunanon Hirunrattanaporn <span className="inline-block">👋🏻</span></div>
        <h1 className="text-white font-Teko text-5xl md:text-6xl font-bold leading-tight mb-2" style={{ whiteSpace: 'pre-line' }}>
          {displayedText}
        </h1>
        <p className="text-white/80 max-w-xl mx-auto mb-16 text-xl md:text-2xl">
        My <span style={{ color: "#E14434" }}>passionate</span> about <span className="underline">Cybersecurity</span> and <span className="underline">UX/UI Design</span>.
        </p>
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
            <div className="w-full flex justify-center py-8 scroll-mt-24">
              <div className="max-w-5xl w-full px-2 md:px-8 py-8">
                <h2 className="text-center text-4xl font-bold mb-12 text-white">
                  <span className="text-white">My </span>
                  <span className="text-pink-300">Certificates</span>
                </h2>
                
                {/* First Row - 2 Certificates (Priority) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Certificate 1 - Microsoft SOC */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/Certificate_of_completion_soc.png", "Microsoft Student SOC Program Foundations")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">Microsoft Student SOC Program Foundations</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/Certificate_of_completion_soc.png" alt="Microsoft Student SOC Program Foundations" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                  {/* Certificate 2 - Network Security */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/cer.dereakkk.png", "Network Security Certificate")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">Network Security Certificate</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/cer.dereakkk.png" alt="Network Security Certificate" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                </div>
                
                {/* Second Row - 3 Certificates */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {/* Certificate 3 - BU-ITI CTF */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/10.png", "BU-ITI CTF Competition 2025")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">BU-ITI CTF Competition 2025</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/10.png" alt="BU-ITI CTF Competition 2025" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                  {/* Certificate 4 - Basic CyberSecurity */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/image.png", "Basic CyberSecurity By MOOC")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">Basic CyberSecurity By MOOC</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/image.png" alt="Basic CyberSecurity By MOOC" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                  {/* Certificate 5 - Cyber Top Talent */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/CyberTopTalent.jpg", "Thailand Cyber Top Talent 2025")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">Thailand Cyber Top Talent 2025</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/CyberTopTalent.jpg" alt="Thailand Cyber Top Talent 2025" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                </div>
                
                {/* Third Row - 3 Certificates */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                  {/* Certificate 6 - Cyber Youth Guardians */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/Cyberyout.png", "Meet The Youth Cyber Guardians Thailand 2025")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">Meet The Youth Cyber Guardians Thailand 2025</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/Cyberyout.png" alt="Meet The Youth Cyber Guardians Thailand 2025" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                  {/* Certificate 7 - NCSA BootCamp */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/NSCA_BootCamp.png", "NCSA CTF BootCamp")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">NCSA CTF BootCamp</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/NSCA_BootCamp.png" alt="NCSA CTF BootCamp" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                  {/* Certificate 8 - SWU CTF Competition */}
                  <div 
                    className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer"
                    onClick={() => openCertificateModal("/SWU Capture the Flag Competition 2025 153-01.jpg", "SWU Capture the Flag Competition 2025")}
                  >
                    <div className="text-xl font-semibold text-white mb-4 text-center">SWU Capture the Flag Competition 2025</div>
                    <div className="w-full flex justify-center mb-4">
                      <img src="/SWU Capture the Flag Competition 2025 153-01.jpg" alt="SWU Capture the Flag Competition 2025" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
              
              <div className="flex items-center gap-3 mb-4">
                <span className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <a href="mailto:kunanon.hn@gmail.com" className="text-white hover:text-pink-400 transition text-xl">kunanon.hn@gmail.com</a>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-8 h-8">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </span>
                <a href="https://www.linkedin.com/in/kunanon-hirunrattanapron-88a474365" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition text-xl">LinkedIn Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Full Size Modal */}
      {certificateModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeCertificateModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeCertificateModal} 
            className="absolute top-4 right-4 z-10 text-4xl text-white hover:text-pink-400 transition-colors bg-black/50 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm"
          >
            ×
          </button>
          
          {/* Certificate Title */}
          <div className="absolute top-4 left-4 z-10 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <h3 className="text-xl font-bold text-white">{certificateModalTitle}</h3>
          </div>
          
          {/* Full Size Image */}
          <img 
            src={certificateModalImg} 
            alt={certificateModalTitle} 
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
