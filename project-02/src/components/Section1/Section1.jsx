import React from 'react'
import NavBar from './NavBar'
import PageContent from './PageContent'
const Section1 = (props) => {
  console.log(props);
  
  return (
    <div className='h-screen w-full bg-blend-darken dark:bg-gray-800'>
        <NavBar/>
        <PageContent users={props.users} />
    </div>
  )
}

export default Section1