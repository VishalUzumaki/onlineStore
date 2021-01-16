import React,{useState,useEffect} from 'react';

import {useSelector,useDispatch} from 'react-redux';
import {Card} from 'react-bootstrap';

import {increment,decrement} from '../actions/cartItems';

export default function Cart(){


const cartItems = useSelector(state => state)

console.log(cartItems);


const dispatch = useDispatch();

const [cart,setCart] = useState();

const [totalItems,setTotalItems] = useState();
const [totalPrice,setTotalPrice] = useState();


useEffect(()=>{
  setCart(cartItems)

  let items=0;
  let price=0;

  for(var i=0;i<cartItems.length;i++){
    if(cartItems[i].quantity > 0)
    {
      items=items+cartItems[i].quantity;
      price = price+ (cartItems[i].quantity * cartItems[i].price)
    }
  }

  setTotalItems(items);
  setTotalPrice(price);
})



return (
  <>
    <div style={{paddingTop:'20px',paddingLeft:'10px'}}> <h3>  Checkout Page:  </h3> </div>
    <div class='card' style={{paddingTop:'30px',paddingLeft:'50px'}}>
        <h5> Your Items </h5>

        {cart? cart.map((item,id)=>{

          if (item.quantity > 0) {
          return (



            <Card    style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title> {item.name}
                <div style={{float:'right'}}>
                  <button  className='btn btn-success' onClick={()=>dispatch(increment(item.id))}> + </button>
                  {" "}
                  <button  className='btn btn-danger' onClick={()=>dispatch(decrement(item.id))}> - </button>
                </div>
                </Card.Title>
                <Card.Text>
                   Quantity  {item.quantity}

                  <br/> Price: {item.price}
                </Card.Text>

                <div style={{float:'right'}}>

                  Total : {item.quantity * item.price}

                </div>

              </Card.Body>
            </Card>


          )
        }
        }): null}

      <br/>
      <br/>
      <Card bg={'Success'.toLowerCase()}  text={'white'} style={{width:'80%'}}>

        <Card.Body>
          Total Items: {totalItems?totalItems:'No Items added in the cart'}
          <br/>

          Total Price: {  totalPrice?totalPrice:0}
        </Card.Body>
      </Card>



    </div>
  </>
)


}
