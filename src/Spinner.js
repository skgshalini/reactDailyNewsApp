import React  from 'react'
import loading from './loading.gif'
const Spinner= () =>{
  
    return (
      <div className="text-center">
        <img src={loading} style={{height:'50px',width:'50px'}} alt="loading"/>
      </div>
    )
  
}

export default Spinner
