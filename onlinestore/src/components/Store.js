import React,{useState,useEffect} from 'react';
import Data from './data';

export default function Store(){
console.log(Data);

const[data,setData]=useState();
const[action_figures,setActionFigures] = useState();


useEffect(()=>{
  setData(Data);
  setActionFigures(Data.action_figures);
},[])


return (

  <>

  <h1>  Store </h1>


  {action_figures? action_figures.map((item,index)=>{
    return (
      <p id={index}> {item.name} </p>
    )
  }):""

  }

  </>
  )
}
