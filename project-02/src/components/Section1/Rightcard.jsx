import React from "react";
// 4:30
import Card from "./RightContentCard";
const Rightcard = (props) => {
  return (
    <div className="shrink-0 capitalize overflow-hidden text-ellipsis relative  p-5 h-full w-80">
      <img
        className="h-full w-full object-cover  rounded-md"
        src={props.img}
        alt="here expirement"
      />
      <Card tag={props.tag} colors={props.colors} id={props.id}/>
     </div>
       
  );
};

export default Rightcard;
