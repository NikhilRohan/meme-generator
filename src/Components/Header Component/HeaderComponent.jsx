import "/src/Components/Header Component/HeaderComponent.css";
import TrollFace from "/src/assets/Troll Face.svg";

const HeaderComponent = () => {
  return (
    <header className="headerComponent">
      <span className="leftHeader">
        <img src={TrollFace} className="trollFaceClass" />
        <span>Meme Generator</span>
      </span>
      <span>React Course-Project 3</span>
    </header>
  );
};

export default HeaderComponent;
