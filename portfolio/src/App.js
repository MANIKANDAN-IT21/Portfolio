import "./App.css";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import About from "./components/About.js";
import Nithish from "./components/Project.js";
import Vikhas from "./components/Resume.js";
import Constact from "./components/Constact.js";
import Last from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Nithish></Nithish>
      <Vikhas></Vikhas>
      <Constact></Constact>
      <Last></Last>
    </div>
  );
}

export default App;
