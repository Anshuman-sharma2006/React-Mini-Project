import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'
const PageContent = (props) => {
  return (
    <div className=' p-10 gap-25 flex h-[90vh]  '>
    <Leftcontent/>
    <Rightcontent users={props.users} />
    </div>
  )
}

export default PageContent