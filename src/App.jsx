import "./App.css";
import HeaderComponent from "./Components/Header Component/HeaderComponent";
import MemeFormComponent from "./Components/MemeFormComponent/MemeFormComponent";

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="memeBody">
        <MemeFormComponent />
      </div>
    </div>
  );
}

export default App;
