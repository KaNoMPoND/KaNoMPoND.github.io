import Python from "./assets/icon/python";
import Html from "./assets/icon/html";
import ReactIcon from "./assets/icon/react";

const skills = [
  { name: "Kali Linux", percent: 80 },
  { name: "HTML", percent: 80 },
  { name: "CSS", percent: 80 },
  { name: "JavaScript", percent: 50 },
  { name: "Next JS", percent: 30 },
  { name: "Node JS", percent: 35 },
  { name: "Python", percent: 70 },
  { name: "MySQL", percent: 20 },
  { name: "Adobe Ps", percent: 65 },
  { name: "Microsoft word, powerpoint, excel", percent: 70 },
];

const Skill = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 w-full">
      {/* Left: Title */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-center">
        <div className="text-5xl font-bold text-white mb-2 text-center">MY SKILLS</div>
        <div className="text-pink-400 text-lg mb-8 text-center">— WHAT I KNOW —</div>
        <div className="flex gap-6 mb-8 justify-center">
          <Python width={48} height={48} />
          <Html width={48} height={48} />
          <ReactIcon width={48} height={48} />
        </div>
      </div>
      {/* Right: Skill Bars */}
      <div className="flex-1 flex flex-col gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="w-full">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="text-white font-semibold">{skill.percent}%</span>
            </div>
            <div className="w-full h-2 bg-white/20 rounded-full">
              <div
                className="h-2 rounded-full bg-pink-400 transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill; 