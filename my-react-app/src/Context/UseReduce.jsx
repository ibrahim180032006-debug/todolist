import { v4 as uuidv4 } from 'uuid';
export default  function reducer(currentstate  , action){
switch (action.type){
    case 'added'  :{
 const newTodo = {
      id: uuidv4(),
      title: currentstate.payload.newTitle,
      details: '',
      isconfirme: false,
      
    };

    const updatedTodos = [...currentstate, newTodo];
    
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
   
    return updatedTodos;
  }
    
     default : {
          throw Error("umkown aaction"  + action.type);
     }
    
    }
}

