import './CoreConcept.css'

export default function CoreConcept(props){
    return ( 
      <>
        <li>
          <img src={props.image} alt=''/>
          <h3>{props.title}</h3>
          <p> {props.description} </p>
        </li>
      </>
     )
  }
  
  
  /* 
  function CoreConept( {image,title,description} ){
    return ( 
      <>
        <li>
          <img src={image} alt=''/>
          <h3>{title}</h3>
          <p> {description} </p>
        </li>
      </>
     )
  }
  
  */