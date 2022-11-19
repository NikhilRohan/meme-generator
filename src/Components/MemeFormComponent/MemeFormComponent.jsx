import "/src/Components/MemeFormComponent/MemeFormComponent.css";
import memesData from "../../memesData";
import React from "react";

const MemeFormComponent = () => {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);
  const getNewMemeImage = () => {
    let item =
      allMemeImages.data.memes[
        Math.floor(Math.random() * allMemeImages.data.memes.length)
      ];
    setMeme((prevMeme) => {
      return { ...prevMeme, randomImage: item.url };
    });
  };
  const updateText = (event) => {
    const { name, value } = event.target;
    console.log(name);
    console.log(value);
    setMeme((prevMeme) => {
      return { ...prevMeme, [name]: value };
    });
  };
  return (
    <main>
      <section className="memeFormSection">
        <div>
          <div className="inputSection">
            <input
              type="text"
              className="inputClass"
              placeholder="Top Text"
              onChange={(event) => {
                updateText(event);
              }}
              name="topText"
              value={meme.topText}
            />
            <input
              type="text"
              className="inputClass"
              placeholder="Bottom Text"
              onChange={(event) => {
                updateText(event);
              }}
              name="bottomText"
              value={meme.bottomText}
            />
          </div>
          <div className="buttonSection">
            <button onClick={getNewMemeImage}>Get a new meme image 🖼</button>
          </div>
        </div>
      </section>
      <section className="memeImageSection">
        <img src={meme.randomImage} className="memeImage" />
        <span class="topText">{meme.topText}</span>
        <span class="bottomText">{meme.bottomText}</span>
      </section>
    </main>
  );
};
export default MemeFormComponent;
