import React from 'react'
import Rightcard from './Rightcard'
const Rightcontent = (props) => {
  return (
    <div className=' overflow-x-auto no-scrollbar  h-full flex flex-nowrap w-2/3'>
      {props.users.map((val,idx)=>{
        return <Rightcard color={val.color}  id={idx} img={val.img} tag={val.tag}  />
        
      })}
    </div>
  )
}

export default Rightcontent