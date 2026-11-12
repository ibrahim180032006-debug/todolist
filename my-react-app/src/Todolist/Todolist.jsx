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
import { useContext, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Todo from './Todo';
import { TodosUseContext } from '../Context/Todocontext';

// خارج المكوّن: يُنشأ مرة واحدة
const theme = createTheme({
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
  palette: { primary: { main: '#0288d1' } },
});

export default function Todolist() {
  const { todos, setTodos } = useContext(TodosUseContext);
  const [myInput, setMyInput] = useState('');
  const [displayedTodos, setDisplayedTodos] = useState('all');

  // فلترة محسوبة مرة واحدة
  const filteredTodos = useMemo(() => {
    if (displayedTodos === 'completed') return todos.filter((t) => t.isconfirme);
    if (displayedTodos === 'non-completed') return todos.filter((t) => !t.isconfirme);
    return todos;
  }, [todos, displayedTodos]);

  // toggle
  function handleToggle(todoId) {
    setTodos(
      todos.map((t) =>
        t.id === todoId ? { ...t, isconfirme: !t.isconfirme } : t
      )
    );
  }

  // إضافة
  function handleAdd() {
    const title = myInput.trim();
    if (!title) return;

    const newTodo = {
      id: uuidv4(),
      title,
      details: '',
      isconfirme: false,
    };

    setTodos([...todos, newTodo]);
    setMyInput('');
  }

  return (
    <Container maxWidth="sm">
      <Card sx={{ minWidth: 275, maxHeight: '80vh', overflowY: 'auto' }}>
        <ThemeProvider theme={theme}>
          <CardContent>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                textAlign: 'center',
                fontSize: 28,
                fontWeight: 'bold',
                color: 'text.secondary',
              }}
            >
              to-Do-list
              <Divider variant="inset" />

              <ToggleButtonGroup
                value={displayedTodos}
                onChange={(e, value) => value && setDisplayedTodos(value)}
                exclusive
                sx={{ mt: 1 }}
              >
                <ToggleButton color="primary" value="all">all</ToggleButton>
                <ToggleButton color="primary" value="completed">finished</ToggleButton>
                <ToggleButton color="primary" value="non-completed">not finished</ToggleButton>
              </ToggleButtonGroup>
            </Typography>

            {filteredTodos.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onToggle={handleToggle}
              />
            ))}

            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <Button
                  onClick={handleAdd}
                  variant="contained"
                  sx={{ width: '100%', height: '100%' }}
                >
                  Add
                </Button>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  value={myInput}
                  onChange={(e) => setMyInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
                  label="mission"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
        </ThemeProvider>
      </Card>
    </Container>
  );
}