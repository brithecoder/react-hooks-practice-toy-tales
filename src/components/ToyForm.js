import React, {useState} from "react";

function ToyForm() {
  const [formData, SetFormData]=useState({
   name:"",
   image:"",
  })
  function handleFormChange(event){
    SetFormData({
      ...formData,
    [event.target.name]: event.target.value,
    });
  }
    
  function submitToyForm (){
    fetch('http://localhost:3001/toys',{
      method:"POST",
      headers:{
       'Content-Type': 'application/json'
      },
     body:JSON.stringify(formData)
   
    })
       console.log(formData)
  }
      
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={submitToyForm}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleFormChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleFormChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
          
        />
      </form>
    </div>
  );
}

export default ToyForm;
