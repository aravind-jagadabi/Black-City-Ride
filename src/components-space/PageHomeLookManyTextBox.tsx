import { useState } from "react";
import { GoSquare } from "react-icons/go";



const PageHomeLookManyTextBox = () =>{
  // const [tex1, setText1] = useState('');
  // const [data1, setData1] = useState<string[]>([]);
  const [text2, setText2] = useState('');
  const[data2, setData2] = useState<string[]>([]);


  const handleAddSpots = () => {
    const newArray = [...data2, text2];
    setData2(newArray);
    setText2("");
  }

  return(
    <div className="PageHomeLookManyTextBox">
      <input className = "PageHomeLookManyTextBox1" type = "text" placeholder="Start Location"></input>
      <input className = "PageHomeLookManyTextBox2" type = "text" placeholder="Add New Spot Location" value = {text2} onChange={ (event) => setText2(event.target.value)}></input>
      <div className="PageHomeLookManyTextBoxButtons">
        <button className = "PageHomeLookManyBookButton2" onClick={handleAddSpots}>+1</button>
        <button className = "PageHomeLookManyBookButton">Book Ride</button>
      </div>
      <div className="PageHomeLookManySpotsData">
        {data2 && data2.map((name:any) => {
               return <h3 style={{color: 'white', marginLeft: '5px', marginRight:'5px', display: 'flex', alignItems:'center', justifyContent:'center'}}>{name && <GoSquare />}{name}</h3>;
            })
        }
      </div>
      
    </div>
  );
}

export default PageHomeLookManyTextBox;