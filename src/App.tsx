import "./App.css";

function App() {
  return (
    <>
      <div className="flex px-7 bg-red-400 w-screen h-screen">
        <div className="w-1/2 text-center bg-black text-white ">
          leftcontent
          <div className="border w-4/4 h-2/6 ">photo</div>
          <div  className="border  ">story of life</div>
          <div className="border  ">education</div>
          <div className="border  ">Award</div>
        </div>
        <div className="w-1/2 text-center">
          rightcontent
          <div className="border">Name</div>
          <div className="border">contact profile</div>
          <div className="border">work experience</div>
          <div className="border">expertise</div>
        </div>
      </div>
    </>
  );
}

export default App;
