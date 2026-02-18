import React from 'react'
import { MoveUpRight } from 'lucide-react';
const Leftcontent = () => {
  return (
    <div className=' flex text-white justify-between flex-col h-full w-1/3'>
        <div className='p-5'>
            <h3 className='text-2xl  font-extrabold'> prospective <br />customer<br /> segmentation</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam asperiores a vel repellendus nobis autem laborum. Aut temporibus, delectus corrupti labore suscipit quaerat totam veritatis amet quia perspiciatis assumenda recusandae.</p>
        </div>
       <div className='text-8xl'>
        <MoveUpRight size={50} />
        </div> 
    </div>
  )
}

export default Leftcontent