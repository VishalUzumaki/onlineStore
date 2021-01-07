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


  <div className="row">

  {action_figures? action_figures.map((item,index)=>{
    return (
      <div className="col-md-4">
      <div className="card">


        <h3 id={index}> {item.name} </h3>

        <center>
        <img src={process.env.PUBLIC_URL +'/action_figures/'+item.img}  width={'400px'} height={'300px'}/>
        </center>
        
      </div>
      </div>
    )
  }):""

  }

  </div>


  </>
  )
}
