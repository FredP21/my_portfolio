import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProfileImg from "./components/ProfileImg";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <Intro />
          <About />
          <Projects />
        </div>
        <div className="hidden md:block">
          <ProfileImg />
        </div>
      </div>
    </>
  );
}

export default App;
