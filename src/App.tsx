import "./App.css";

function App() {
  return (
    <>
      <div className="grid bg-gradient-to-b from-blue-950 via-blue-900 to-blue-600 font-Oswald">
        <div>photo</div>
        <div className="text-white">
          <div className=" text-4xl text-center pt-5">
            Kunanon Hirunrattanaporn
          </div>

          <div className="text-2xl px-8">
            About Me
            <hr></hr>
            <div className="text-xl">Location</div>
            <div className="text-xl">Language</div>
          </div>

          <div className="text-2xl px-8 ">
            Hobby
            <hr></hr>
            <div className="text-xl">Watch Movie</div>
            <div className="text-xl">Play Game</div>
            <div className="text-xl">Home Workout</div>
          </div>

          <div className="text-2xl px-8">
            Contact Profile
            <hr></hr>
            <div className="text-xl">Email :</div>
            <div className="text-xl">Tel.</div>
            <div className="text-xl">FB :</div>
          </div>

          <div className="text-2xl px-8">
            Education
            <hr></hr>
            <div className="text-xl">
              Junior High School 2015-2017 : Saint Marry school
            </div>
            <div className="text-xl text-nowrap">
              High School 2018-2020 : Wisutthi Kasattree School
            </div>
            <div className="text-xl">
              University 2022-2026 : Bangkok University
            </div>
          </div>
          <div className="text-2xl px-8">Skill</div>
          <hr></hr>
        </div>
      </div>
    </>
  );
}

export default App;
