import React, { useState ,useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [storeData, setStoreData]= useState([])
  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
    useEffect(() =>{
    fetch('http://localhost:3001/toys')
    .then((resp) => resp.json())
    .then((data)=> {
      setStoreData(data);
    }
    )
  },[])
  
  
  return (
    <>
      <Header />
      {showForm ? <ToyForm /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      { <ToyContainer toys={storeData}  setStoreData={setStoreData}/> }
    </>
  );
}

export default App;
