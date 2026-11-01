// App.jsx
import './App.css';
// import Button from '@mui/material/Button';
// import Icons from './Items'
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Todolist from './Todolist/Todolist';
import { v4 as uuidv4 } from 'uuid';
import { TodosUseContext } from './Context/Todocontext';
import Test from './Todolist/Test';
import { useState } from 'react';
import Product from './Product';
const initialtodos = [
  {
    id:uuidv4(),
    title:'write your first misson',
    details :'ex:i need sleep at 20:00pm',
    isconfirme : false ,
  }
] 

function App () {
  const [number, setNumber] = useState(5);
  const [dark, setDark] = useState(false);

  const result = number * 2;

  console.log("Calculating!");
   const [todos , useTodos] =  useState(initialtodos);
return(  
     <div className="App" style={{display:'flex',
      background:'#191d1f', justifyContent:"center"
      , alignItems:"center",
      height:"100vh"}}>
        <TodosUseContext.Provider value={{todos , useTodos  }}>
           <Todolist/>
        </TodosUseContext.Provider>
    <div>
      <h1>Result: {result}</h1>

      <button onClick={() => setNumber(number + 1)}>
        Change Number
      </button>

      <button onClick={() => setDark(!dark)}>
        Change Color
      </button>
    </div>


          
     <Test></Test>
     <Product/>
   </div>
  )
}
export default App;
