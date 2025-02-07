// import BackgroundVideo from "./BackgroundVideo";
import { useState } from "react";
import PageHomeLookDirectTextBox from "./PageHomeLookDirectTextBox";
import PageHomeLookManyTextBox from "./PageHomeLookManyTextBox";
// import backgroundImage from "../media-space/blackcityride-background.png";
import carFront from "../media-space/vehiclefront.png";
import carBack from "../media-space/vehicleback.png";

const PageHomeLook = () => {
  const [isShadow, setIsShadow] = useState(false);
  const [isShadow2, setIsShadow2] = useState(false);

  const handleDirectButtonClick = () =>{
    setIsShadow2(false);
    setIsShadow(true);
  }
  const handleManyButtonClick = () => {
    setIsShadow(false);
    setIsShadow2(true);
  }

  return(
    <div className = "PageHomeLook" >
      <div>
        <h4 className = "PageHomeLookTitle">Choose the favorite spots</h4>
        <button style = {{boxShadow: isShadow ? '0px 0px 50px rgba(255, 255, 255, .5': '0px 0px 0px rgba(0, 0, 0, 0'}} className = "PageHomeLookDirectButton" onClick={handleDirectButtonClick}>OnlySpot</button>
        <button style = {{boxShadow: isShadow2 ? '0px 0px 50px rgba(255, 255, 255, .5': '0px 0px 0px rgba(0, 0, 0, 0'}} className="PageHomeLookManyButton" onClick = {handleManyButtonClick}>ManySpot</button>

        {isShadow && <PageHomeLookDirectTextBox />}
        {isShadow2 && <PageHomeLookManyTextBox />}
        
        {!isShadow && !isShadow2 && <div>
          {<img style = {{boxShadow: '80px 100px 100px rgba(255, 255, 255, .5'}} src={carBack} alt="Logo" />}
          {<img style = {{boxShadow: '-80px 100px 100px rgba(255, 255, 255, .5'}} src={carFront} alt="Logo" />}
        </div>}

      </div>
    </div>
  );
}

export default PageHomeLook;