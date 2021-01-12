import Data from '../components/data';

const newData = [];
for (var i = 0; i < Data.action_figures.length; i++) {
  let temp= Data.action_figures[i];
  newData.push({id:temp.id, name: temp.name, quantity : 0, img : temp.img,price: temp.price});
}


const store = ( state = newData,action)=>{

  switch (action.type) {
    case 'Increment':

      let incrementCopy = JSON.parse(JSON.stringify(state));

      for(var i=0;i<incrementCopy.length;i++){
        if(incrementCopy[i].id == action.id){
          incrementCopy[i].quantity = incrementCopy[i].quantity + 1
        }
      }

      return incrementCopy;

   case 'Decrement':

        let decrementCopy = JSON.parse(JSON.stringify(state));

        for(var i=0;i<decrementCopy.length;i++){
          if(decrementCopy[i].id == action.id && decrementCopy[i].quantity > 0){
            decrementCopy[i].quantity = decrementCopy[i].quantity -1
          }
        }
        return decrementCopy;

    default:
      return state

  }


}

export default store;
