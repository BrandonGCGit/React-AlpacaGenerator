import './App.css';
import Header from "./components/Header";
import ImgEditable from "./components/ImgEditable";
import ButtonsEdit from "./components/ButtonsEdit";
import {useState} from "react";



const IMG_EDIT = {
  accessories: "headphone.png",
  backgrounds: "blue50.png",
  ears: "default.png",
  eyes: "default.png",
  hair: "default.png",
  leg: "cookie.png",
  mouth: "default.png",
  neck: "default.png",
  noses: "nose.png",
}

function App() {

  const [imgOptions ,setImgOptions] = useState(IMG_EDIT);
  const [optionStyle, setOptionStyle] = useState('eyes')

  function handleOption(option){
    setOptionStyle(() => option);
  }

  function handleStyle(style){
    setImgOptions(prevState => {
      return {
        ...prevState,
        [optionStyle]: style
      }
    })
  }

  return (
    <section className={'container'}>
      <div className="row">
        {/*Header*/}
        <Header/>
        <div className="col-6 d-flex flex-column">
          {/*Img*/}
          <ImgEditable imgOptions={imgOptions}/>
          {/*Buttons*/}
          <p>Coming soon...</p>
        </div>
        <div className="col-6">
          {/*Buttons*/}
          <ButtonsEdit handleOption={handleOption} handleStyle={handleStyle} option={optionStyle}/>
        </div>
      </div>
    </section>
  );
}

export default App;
