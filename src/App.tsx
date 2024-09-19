import "./App.css";

function App() {
  return (
    <>
      <div className="font-Oswald flex px-7 bg-red-400 w-screen h-screen">
        <div
          className="flex flex-col
         gap-6 w-1/2 text-center bg-black text-white"
        >
          leftcontent
          <div className="border w-4/4 h-2/6 ">photo</div>
          <div className="flex flex-col gap-y-12">
            <div className="border  ">
              <div className="text-2xl text-left">STORY OF LIFE</div>
              <h6>
                <div className="text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  dignissimos quam est recusandae ullam amet non, optio magnam
                  provident assumenda ad quaerat nemo sunt incidunt expedita!
                  Similique dolorem ratione at!
                </div>
              </h6>
            </div>
            <div className="border">
              <div className="text-2xl text-left flex flex-col gap-3">
                EDUCATION
              </div>
              <h6>
                <div className="text-left">
                  <div>Junior High School 2015-2017 : Saint Marry school</div>
                  <div>High School 2018-2020 : Wisutthi Kasattree School</div>
                  <div>University 2022-2026 : Bangkok University</div>
                </div>
              </h6>
            </div>
            <div className="border  ">
              <div className="text-2xl text-left">AWARD</div>
              <h6>
                <div className="text-left">
                  <div>text</div>
                  <div>text</div>
                  <div>text</div>
                </div>
              </h6>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 w-1/2 text-center">
          rightcontent
          <div className="border w-4/4 h-2/6">
            <div>Name</div>
          </div>
          <div className="border">
            <div className="text-2xl">Contact profile</div>
            <h6>
              <div className="text-left">
                <div>Tel.</div>
                <div>Email.</div>
                <div>Others</div>
              </div>
            </h6>
          </div>
          <div className="border">
            <div className="text-2xl">Skill</div>
          </div>
          <div className="border">
            <div className="text-2xl">Expertise</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
