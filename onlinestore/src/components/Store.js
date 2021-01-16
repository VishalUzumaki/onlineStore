import React,{useState,useEffect} from 'react';

import {useSelector , useDispatch} from 'react-redux';
import {increment,decrement} from '../actions/cartItems';


export default function Store(){


const[data,setData]=useState();

const reduxstore = useSelector(state => state);
const[action_figures,setActionFigures] = useState(reduxstore);

const dispatch = useDispatch();


return (

  <>

  <div className='heading'>
    <h1>  Store: Action Figures </h1>
  </div>

  <div className="row" style={{paddingLeft:"10px"}}>

  {reduxstore? reduxstore.map((item,index)=>{


    return (
      <div className="col-md-3" style={{border:'2px',paddingTop: '10px' ,paddingBottom:'10px'}}>
      <div className="card">

        <h3 id={index} className={"btn btn-primary"}> {item.name} </h3>

        <center>
        <img src={process.env.PUBLIC_URL +'/action_figures/'+item.img}  width={'300px'} height={'300px'}/>
        </center>

        <h4> Price: ${item.price} </h4>

        <br/>


          <table>

            <tr>

                <td>
                  <button  className='btn btn-danger' onClick={()=>dispatch(decrement(item.id))}> - </button>
                  <label style={{paddingLeft:'10px',width:'60px'}}> {item.quantity} </label>
                  <button  className='btn btn-success' onClick={()=>dispatch(increment(item.id))}> + </button>
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
