import "./App.css";

function App() {
  return (
    <>
      <div className="grid bg-gradient-to-b from-blue-950 via-blue-900 to-blue-600">
        <div>photo</div>
        <div className="text-white">
          <div className=" text-4xl text-center pt-5">
            Kunanon Hirunrattanaporn
          </div>

          <div className="text-2xl mx-8 mb-10 mt-7">
            About Me
            <hr></hr>
            <div className="font-Oswald text-wrap text-xl pl-9 pb-2">
              <div>Location : (icon)</div>
              <div className="text-xs pl-3">
                ซอย หมู่บ้านภูมิใจนิเวศ 3 ซอย 1/1 ต.ในคลองบางปลากด
                อ.พระสมุทรเจดีย์ จ.สมุทรปราการ 10290
              </div>
              <div>Language(icon)</div>
              <div className="text-xs pl-3">English & Thai Language</div>
            </div>
          </div>

          <div className="text-2xl mx-8 mb-10 ">
            Hobby
            <hr></hr>
            <div className="font-Oswald text-xl pl-9">
              <div className="pb-2">(icon)Watch Movie</div>
              <div className="pb-2">(icon)Play Game</div>
              <div className="pb-2">(icon)Home Workout</div>
            </div>
          </div>

          <div className="text-2xl mx-8 mb-10">
            Contact Profile
            <hr></hr>
            <div className="font-Oswald text-xl pl-9">
              <div className="pb-2">Email(icon) : kunanon.hn@gmail.com</div>
              <div className="pb-2">Tel.(icon) : 0955487274</div>
              <div className="pb-2">FB(icon) : Kunanoni Hirunrattanaporn</div>
            </div>
          </div>

          <div className="text-2xl mx-8 mb-10">
            Education
            <hr></hr>
            <div className="font-Oswald text-wrap text-xl pl-3">
              <div>Junior High School 2015-2017 :</div>
              <div className="pb-2 pl-4">Saint Marry school</div>
              <div>High School 2018-2020 :</div>
              <div className="pb-2 pl-4">Wisutthi Kasattree School</div>
              <div>University 2022-2026 :</div>
              <div className="pb-2 pl-4">Bangkok University</div>
            </div>
          </div>
          <div className="text-2xl mx-8 mb-10">
            Skill
            <hr></hr>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
