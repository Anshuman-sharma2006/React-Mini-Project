import React from 'react'

const RightContentCard = (props) => {
  return (
<div>
      <div className="absolute top-0  overflow-hidden text-ellipsis h-full  flex flex-col justify-between  p-5 ">
        <h1 className=" bg-white leading-relaxed h-12 w-12 p-3 rounded-full mt-6 flex items-center justify-center">
          {props.id+1}
        </h1>
        <div>
          <p className=" text-sm  mt-10 leading-snug  text-amber-200 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            iste libero modi accusantium inventore? Laudantium quisquam deleniti
          </p>
        </div>
        <div className="flex font-bold text-white text-sm justify-between text-center p-3 gap-1/4 ">
          <button  className=" rounded-full px-2 py-2 ">{props.tag}</button>
          <button className="  rounded-full p-2 flex justify-center ">@</button>
        </div>
      </div>
    </div>
  )
}

export default RightContentCard