import React from 'react'
import {Bookmark} from 'lucide-react'
// props carry that elemntt only that have passed on card not eeacch element and export default so u can just pass the any name with that but remeber the template should be in ccaptilize form no on export only u can only default by taht name during export that name should be same and around that put these bracket{} 
const Card = (props) => {
  console.log();
  
  return (
      <div className="card">
        <div className="head">
          <img src={props.logo} alt="" srcset="" />
          <button>SAVE<Bookmark/></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>5 day  ago</span></h3>
          <h2>{props.title}</h2>
          <div className="tag">
            <h4 className="tag-prt">{props.fr}</h4>
            <h4 className="tag-prt">{props.sc}</h4>
            
          </div>
        </div>
        <div className="bottom">
          
            <div>
              <h3>$12</h3>
              <p>Up,kanpur</p>
            </div>
            <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card