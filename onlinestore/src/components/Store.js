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

  <div className='heading'>
    <h1>  Store: Action Figures </h1>
  </div>

  <div className="row" style={{paddingLeft:"10px"}}>

  {action_figures? action_figures.map((item,index)=>{
    return (
      <div className="col-md-3" style={{border:'2px',paddingTop: '10px'}}>
      <div className="card">

        <h3 id={index} className={"btn btn-primary"}> {item.name} </h3>

        <center>
        <img src={process.env.PUBLIC_URL +'/action_figures/'+item.img}  width={'300px'} height={'300px'}/>
        </center>

        <h4> Pric $:{item.price} </h4>

        <br/>


          <table>

            <tr>

                <td>
                  <button className='minusButton'> - </button>
                <input width='100% !important' type="number" name={item.id} value={0} />
                  <button className='plusButton'> + </button>
               </td>

          </tr>

          </table>

      </div>
      </div>
    )
  }):""

  }


  </div>


  </>
  )
}
