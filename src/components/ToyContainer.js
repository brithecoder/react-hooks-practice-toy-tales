import React, {useEffect} from "react";
import ToyCard from "./ToyCard";


function ToyContainer(props) {
      console.log(props.toys)
  return (
    <div id="toy-collection">{props.toys.map((toy)=> <ToyCard key={toy.id} toy={toy} toys={props.toys} setStoreData={props.setStoreData} />)}</div>
  );
}

export default ToyContainer;
