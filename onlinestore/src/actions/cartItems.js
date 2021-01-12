export const increment =(id)=>{

return  {
  type: 'Increment',
  id: id
};

};

export const decrement=(id)=>{

return {
  type: 'Decrement',
  id: id
};

};
