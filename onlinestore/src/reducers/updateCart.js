import Data from '../components/data';

const newData = [];
for (var i = 0; i < Data.action_figures.length; i++) {
  let temp= Data.action_figures[i];
  newData.push({id:temp.id, name: temp.name, quantity : 0, img : temp.img,price: temp.price});
}

const store = ( state = newData,action)=>{

  switch (action.type) {
    case 'Increment':

      for (var i = 0; i < state.length; i++) {
        if (state[i].id == action.id){
          state[i].quantity = state[i].quantity + 1
        }
      }

      return state + +action.payload


    default:
      return state

  }


}

export default store;
