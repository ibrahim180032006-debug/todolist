// App.jsx
import './App.css';
// import Button from '@mui/material/Button';
// import Icons from './Items'
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Todolist from './Todolist/Todolist';
import { v4 as uuidv4 } from 'uuid';
import { TodosUseContext } from './Context/Todocontext';
import { useState } from 'react';
const initialtodos = [
  {
    id:uuidv4(),
    title:'',
    details :'',
    isconfirme : false ,
  }
]
function App () {
   const [todos , useTodos] =  useState(initialtodos);
return(  
     <div className="App" style={{display:'flex',
      background:'#191d1f', justifyContent:"center"
      , alignItems:"center",
      height:"100vh"}}>
        <TodosUseContext.Provider value={{todos , useTodos  }}>
           <Todolist/>
        </TodosUseContext.Provider>
    
          
     
   </div>
  )
}
export default App;
