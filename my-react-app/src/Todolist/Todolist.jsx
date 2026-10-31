// // import * as React from 'react';
// import Container from '@mui/material/Container';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ToggleButton from '@mui/material/ToggleButton';

// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// // news import
// import { createTheme  , ThemeProvider} from '@mui/material/styles';
// import Todo from './Todo';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import { useContext, useEffect } from 'react';
// import { TodosUseContext } from '../Context/Todocontext';
// import { useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
// export default function Todolist() {
//   const theme = createTheme({
//     status: {
//       Typography: {
//         fontFamily: ['a']
//       }
//     }
//   });

// const {todos , useTodos} = useContext(TodosUseContext);
//  const [myinput , setinput] = useState('');
//  const mytodos = todos.map((event)=>{
//    return (<Todo key={event.id} handelclick = {handelclickbutton}  todo ={event}/>)
//  })  

//   function handelclickbutton (todoId){
//     const upadetTodos =  todos.map((t)=>{
//        if(t.id === todoId ){
         
//            t.isconfirme = !t.isconfirme ;
     
         
//        }
//        return t ;
       
//     })
     
//     useTodos(upadetTodos);
  
//       localStorage.setItem("todos",JSON.stringify(upadetTodos));
//   }

//   useEffect(()=>{
//     console.log("calling use effect");
//     const StorageTodos = JSON.parse(localStorage.getItem('todos'));
//      useTodos(StorageTodos);
//      console.log("use context realod");
//   },[]);

  
//  function allertme(){
//   const newtodos = {
//     id :uuidv4() ,
//     title:myinput,
//     details:'',
//     isconfirme:false,
 
//   }
//       if(newtodos.title === ""){
//     return false ;
//   }
  
//   const updetTodos = [...todos , newtodos];
//   useTodos(updetTodos); // Changed to parentheses ()
//   localStorage.setItem("todos",JSON.stringify(updetTodos));
//   setinput('');

//  }

//   return (
  
     
//       <Container maxWidth="md">
//       <Card sx={{ minWidth: 275 }}>
//       <ThemeProvider theme={theme}>
//         <CardContent>
//           <Typography style={{fontFamily:'a'}} variant="h3" gutterBottom sx={{ textAlign:'center', display: 'block', color: 'text.secondary', fontSize: 28, fontWeight: 'bold' }} component="div">
//             todolist
//             <Divider variant="inset" />
//             {/* fiilter toggell button  */}
//             <ToggleButtonGroup
//            style={{marginTop:'9px'}}
   
//       exclusive
    
//       aria-label="text alignment">
//       <ToggleButton value="left" aria-label="left aligned">
//         all
//       </ToggleButton>
//       <ToggleButton value="center" aria-label="centered">
//        finished
//       </ToggleButton>
//       <ToggleButton value="right" aria-label="right aligned">
//      deleted
//       </ToggleButton>
    
//     </ToggleButtonGroup>
  
//         </Typography>
//         <Typography variant="h5" component="div">
//         </Typography>
//         <Typography variant="body2">
//           <br />
//         </Typography>
//         {/* mytodo */}
//         {mytodos}
//         {/* final todo */}
//         {/* input + add button */}
           
//        <Grid style= {{marginTop:'10px'}}  container >
//         <Grid  size={4}>
//     <Button onClick={()=>{
// allertme();

//     }} style={{width:'100%'  ,  height:'100%'}}variant="contained">Contained</Button>
//       </Grid>
//        <Grid  size={8}>
//      <TextField value={myinput} onChange={(e)=>{
// setinput(e.target.value);
//      }} style={{width:'100%' ,  margin:'2px',  border :  '1px #000  solid'  }} id="standard-basic" label="misson" variant="standard" />
//       </Grid>
//       </Grid> 
   
//  {/* finished */}
//        </CardContent>


//             </ThemeProvider>
//  </Card> 
   
//       </Container>
   
//   );
// }
// import * as React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Todo from './Todo';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { useContext, useEffect, useState } from 'react';
import { TodosUseContext } from '../Context/Todocontext';
import { v4 as uuidv4 } from 'uuid';

export default function Todolist() {
  const theme = createTheme({
    status: {
      Typography: {
        fontFamily: ['a'],
         palette: {
    primary: {
      main: '#0288d1',
    },
  },
      },
    },
  });

  const { todos, useTodos } = useContext(TodosUseContext);
  const [myinput, setinput] = useState('');
  const [displayedtodos , setdisplayedtodos ] = useState("all");



const completedTodos = todos.filter((t)=>{
  if(displayedtodos === "completed"){
    
    return t.isconfirme === true;
 
  } else if (displayedtodos === "non-completed"){
    return t.isconfirme === false;
  }
  return true ;
  
});


  // 1. جلب البيانات من LocalStorage عند فتح التطبيق لأول مرة بأمان
  useEffect(() => {
    const StorageTodos = JSON.parse(localStorage.getItem('todos'));
    if (StorageTodos) {
      useTodos(StorageTodos);
    }
  }, []);

  // دالة لتحديث حالة المهمة (مكتملة أم لا) بطريقة آمنة
  function handelclickbutton(todoId) {
    const updatedTodos = todos.map((t) => {
      if (t.id === todoId) {
        return { ...t, isconfirme: !t.isconfirme }; // استخدام Spread Operator للتعديل الآمن
      }
      return t;
    });

    useTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  // دالة إضافة مهمة جديدة
  function allertme() {
    if (myinput.trim() === '') {
      return; // منع إضافة مهام فارغة
    }


 
    const newTodo = {
      id: uuidv4(),
      title: myinput,
      details: '',
      isconfirme: false,
      
    };

    const updatedTodos = [...todos, newTodo];
    useTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setinput('');
  }

  // رسم قائمة المهام بطريقة آمنة (التأكد أن todos مصفوفة وليست null)
  const mytodos = Array.isArray(todos) ? completedTodos.map((event) => {
    return (<Todo key={event.id} handelclick={handelclickbutton} todo={event} />);
  }) : null;

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275 }} style={{maxHeight:"80vh",overflowY:'scroll'}}>
        <ThemeProvider theme={theme}>
          <CardContent>
            <Typography style={{ fontFamily: 'a' }} variant="h3" gutterBottom sx={{ textAlign: 'center', display: 'block', color: 'text.secondary', fontSize: 28, fontWeight: 'bold' }} component="div">
              to-Do-list
              <Divider variant="inset" />
              {/* filter toggle button */}
              <ToggleButtonGroup
              value={displayedtodos}
            
              onChange={(e)=>{
                setdisplayedtodos(e.target.value)
              }}
                style={{ marginTop: '9px' }}
                exclusive
                aria-label="text alignment"
              >
                <ToggleButton  color='primary' value="all" aria-label="left aligned">
                  all
                </ToggleButton>
                <ToggleButton  color='primary' value="completed" aria-label="centered">
                  finished
                </ToggleButton>
                <ToggleButton  color='primary' value="non-completed" aria-label="right aligned">
                  not finished
                </ToggleButton>
              </ToggleButtonGroup>
            </Typography>

            {/* mytodo */}
            {mytodos}

            {/* input + add button */}
            <Grid style={{ marginTop: '10px' }} container spacing={2}>
              <Grid item xs={4}>
                <Button 
                  onClick={allertme} 
                  style={{ width: '100%', height: '100%' }} 
                  variant="contained"
                 
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={8}>
                <TextField 
                  value={myinput} 
                  onChange={(e) => { setinput(e.target.value); }} 
                  style={{ width: '100%', margin: '2px' }} 
                  id="standard-basic" 
                  label="mission" 
                  variant="standard" 
                />
              </Grid>
            </Grid>
          </CardContent>
        </ThemeProvider>
      </Card>
    </Container>
  );
}