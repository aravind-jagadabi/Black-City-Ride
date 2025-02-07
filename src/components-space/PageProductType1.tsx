import visitMap from '../media-space/visitmapdemo.png';

const PageProductType1 = () => {
  return(
    <div className = "PageProductType1">

      <div>
          {<img className = "PageProductType1Map" src={visitMap} alt="Map" />} 
      </div>
      <div>
          <h3 className="PageProductType1Title"> Experience the super smooth ride NOW</h3>
      </div>
    </div>
  );
}


export default PageProductType1;