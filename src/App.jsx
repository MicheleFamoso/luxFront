import "./App.css";
import LuxNavBar from "./component/LuxNavBar";

function App() {
  return (
    <div className=" grid grid-rows-[auto_1fr_auto] min-h-screen bg-yellow-50/60  ">
      <header className=" "> 
        <LuxNavBar/>
      </header>
      <main className="">2</main>
      <footer className="">3</footer>
    </div>
  );
}

export default App;
