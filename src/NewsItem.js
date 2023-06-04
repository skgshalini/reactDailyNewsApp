import React from 'react'

const NewsItem =  (props)=> {
    
 
    const {title,description, imageUrl,newsUrl,date,author,source}= props;
    return (
    
        <div className="card" style={{width : "18rem"}} >
         <sup><span style={{color : "white" , backgroundColor:"red" , zIndex:1, position:"absolute"}} className="badge badge-danger">{source}</span></sup>
  <img src={imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    
    <h5 className="card-title">{title}  </h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" 
    className="btn btn-dark">Read More</a>
  </div>
</div>
    
    )
  
}

export default NewsItem
