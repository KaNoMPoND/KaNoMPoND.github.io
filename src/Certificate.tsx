import { useState } from "react";

const Certificate = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const openModal = (img: string, title: string) => {
    setModalImg(img);
    setModalTitle(title);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-full flex justify-center py-8 scroll-mt-24">
      <div className="max-w-5xl w-full px-2 md:px-8 py-8">
        <h2 className="text-center text-4xl font-bold mb-12 text-white">
          <span className="text-white">My </span>
          <span className="text-pink-300">Certificates</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Certificate 1 */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer">
            <div className="text-xl font-semibold text-white mb-4 text-center">BU-ITI CTF Competition 2025</div>
            <div className="w-full flex justify-center mb-4">
              <img src="/10.png" alt="BU-ITI CTF Competition 2025" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
            </div>
            <button onClick={() => openModal("/10.png", "BU-ITI CTF Competition 2025")}
              className="text-pink-300 hover:underline mt-2">View Certificate</button>
          </div>
          {/* Certificate 2 */}
          <div className="border border-white/30 rounded-2xl p-6 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer">
            <div className="text-xl font-semibold text-white mb-4 text-center">Basic CyberSecurity By MOOC</div>
            <div className="w-full flex justify-center mb-4">
              <img src="/image.png" alt="Basic CyberSecurity By MOOC" className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
            </div>
            <button onClick={() => openModal("/image.png", "Basic CyberSecurity By MOOC")}
              className="text-pink-300 hover:underline mt-2">View Certificate</button>
          </div>
        </div>
      </div>
      {/* Certificate Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-4 max-w-lg w-full relative flex flex-col items-center">
            <button onClick={closeModal} className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-pink-400">×</button>
            <div className="text-xl font-bold mb-4 text-center text-gray-800">{modalTitle}</div>
            <img src={modalImg} alt={modalTitle} className="rounded-lg max-h-96 object-contain border border-gray-200" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate; 