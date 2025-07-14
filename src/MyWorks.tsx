import React from "react";

// รูปตัวอย่างแต่ละช่อง (3 row x 3 col)
const workImages = [
  ["/choc-1.png", "/choc-2.png", "/choc-3.png"],
  ["/nm-s.png", "/NT-design.png", "/rv-s.png"],
  ["/wkot-1.png", "/wkot-2.png", "/wkot-3.png"],
];

const rowTitles = [
  "Pentest Report: Example from TryHackMe",
  "Basic Design Network system and Analysis Network System",
  "UX/UI Design for Workout Application (Figma)"
];

const MyWorks = () => {
  return (
    <div className="w-full flex justify-center py-8 scroll-mt-24">
      <div className="max-w-6xl w-full px-2 md:px-8 py-8">
        <h2 className="text-center text-4xl font-bold mb-12 text-white">
          <span className="text-white">My </span>
          <span className="text-pink-300">Works</span>
        </h2>
        <div className="flex flex-col gap-8">
          {[0, 1, 2].map(rowIdx => (
            <React.Fragment key={rowIdx}>
              <div className="text-white text-lg font-bold mb-2">{rowTitles[rowIdx]}</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {workImages[rowIdx].map((img, colIdx) => (
                  <div key={colIdx} className="border border-white/30 rounded-2xl p-4 flex flex-col items-center bg-white/5 backdrop-blur-md transition-all duration-200 hover:scale-105 hover:border-pink-400 hover:bg-white/10 cursor-pointer">
                    <div className="w-full flex justify-center items-center mb-2 min-h-48">
                      <img src={img} alt={`My Work ${rowIdx * 3 + colIdx + 1}`} className="rounded-lg max-h-60 object-contain border border-white/20 bg-black" />
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyWorks; 