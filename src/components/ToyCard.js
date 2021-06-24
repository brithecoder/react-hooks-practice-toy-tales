import React, { useEffect,useState } from "react";

function ToyCard(props) {
  const [like,setLikes]=useState(props.toy.likes);
  function likefunction(id){
      fetch(`http://localhost:3001/toys/${id}`,{
      method:"PATCH",
      headers:{
        "Content-Type":"application/json"
      }})
        setLikes(like+1)
    }
     function deletebtn(id){
       fetch(`http://localhost:3001/toys/${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json"
      }})
     const toyFilter= props.toys.filter((toy)=>toy.id !==id)
          console.log("toyFilter",toyFilter)
          props.setStoreData(toyFilter)
      }
  return (
    <div className="card">
      <h2>{props.toy.name}</h2>
      <img
        src={props.toy.image}
        alt={props.toy.name}
        className="toy-avatar"
      />
      <p>{like} Likes </p>
      <button className="like-btn" onClick={()=>likefunction(like)}>Like {"<3"}</button>
      <button className="del-btn" onClick={()=> deletebtn(props.toy.id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
