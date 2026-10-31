import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { createTheme  , ThemeProvider} from '@mui/material/styles';
// import { useContext } from 'react';
// import { TodosUseContext } from '../Context/Todocontext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useContext , useState } from 'react';
import { TodosUseContext } from '../Context/Todocontext';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
 

export default function Todo ({todo , handelclick }) {
  const {todos , useTodos} = useContext(TodosUseContext);

const [showdeletedalert  , setdeletedalter] =  useState(false);
const [updetdialog  , setupdetDialog] =  useState(false);
  const [updateTodolist , setupdateTodolist] = useState({title:todo.title , details:todo.details});
  const theme = createTheme({
  status: {
     Typography: {
      fontFamily : ['a']
     }
  }

});


function handel (){

  handelclick(todo.id);
}
 function handelclickdeletedconfirme(){
 const updetedtodos = todos.filter((t)=>{
   return t.id !== todo.id ;
 })
 useTodos(updetedtodos);
  localStorage.setItem('todos', JSON.stringify(updetedtodos));
 }


  function handelupdetconfirme(){
    const updettodos = todos.map((t)=>{
      if(t.id === todo.id){
 return{...t,title:updateTodolist.title  , details:updateTodolist.details};
      }else{
        return t ;
      }
    })
 useTodos(updettodos);
 localStorage.setItem('todos', JSON.stringify(updettodos));
 setupdetDialog(false);
 }


function handeclick(){
 setdeletedalter(true);
}
function handelclose(){
   setdeletedalter(false);
}
function handelupdetclick(){
  setupdetDialog(true); 
}

function handelupdetclose(){
setupdetDialog(false);
}
 return (
    <>
<Dialog

    onClose={handelclickdeletedconfirme}
    open={showdeletedalert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"are you need to delted your misson?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           deletd this misson
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handelclose} autoFocus>
            Disagree
          </Button>
          <Button onClick={handelclickdeletedconfirme} >Agree</Button>
        </DialogActions>
      </Dialog>
      {/* dialog of add */}
      <Dialog

    onClose={handelupdetclose}
    open={updetdialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        role="alertdialog"
      >
        <DialogTitle id="alert-dialog-title">
          {"are you need to change your list?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           edit your misson
          </DialogContentText>
          <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="text"
              label="misson title"
              type="email"
              fullWidth
              variant="standard"
              value={updateTodolist.title}
              onChange={(e)=>{
                setupdateTodolist({...updateTodolist , title:e.target.value})
              }}
            />
                <TextField
              autoFocus
              required
              margin="dense"
              id="name"
              name="text"
              label="my new updet"
              type="email"
              fullWidth
              variant="standard"
              value={updateTodolist.details}
              onChange={(e)=>{
                setupdateTodolist({...updateTodolist , details:e.target.value});
              }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handelupdetclose}>close</Button>
          <Button autoFocus onClick={handelupdetconfirme}>accept</Button>
        </DialogActions>
      </Dialog>
      {/* finished dialog */}



{/* card */}
   <Card style={{background:"#7e7e7cc7" , marginTop:'5px'}} sx={{ minWidth: 275 }}>
    <ThemeProvider theme={theme}>
      <CardContent  className='brahim'>
         <Box  sx={{ flexGrow: 1 }}>
      <Grid style={{display: 'flex'  , justifyContent:'space-around' ,  alignItems:'center'}} container spacing={2}>
        <Grid  size={4}>
            <IconButton onClick={()=>{
              handel();
            }} 
            style={{color:'8bc34a',backgroundColor:todo.isconfirme  ? 'green'  :"#8bc34a"   , margin:'4px', padding:"5px", border:'2px solid #8bc34a' }} >
       <CheckIcon className='red'  />
        
      </IconButton> 
          <IconButton onClick={handelupdetclick} style={{ color:'8bc34a', backgroundColor:'aqua' , margin:'4px', padding:"5px", border:'2px solid #189abb' }} >
       <EditIcon  />
        
      </IconButton> 
      

      {/* deleted button */}
          <IconButton  onClick={handeclick} style={{color:'#000',backgroundColor:'red' , margin:'4px', padding:"5px", border:'2px solid #b31212' }} >
            
       <DeleteForeverIcon  />
       {/* final deleted button */}
        
      </IconButton> 
      
<hr />
       

      
        </Grid>
        <Grid  size={8}>
              <Typography style={{fontFamily:'a'  , color:'#c5cae9',   textDecoration: todo.isconfirme ? 'line-through #fff 3px' : 'none' }} variant="h4" gutterBottom sx={{  
                textAlign:'left', display: 'block', color: 
                'text.secondary', fontSize: 17, fontWeight: '14px' }} component="div">
{/* my title lorem */}
{todo.title}
        </Typography>
      
                  <Typography style={{fontFamily:'a'  }} variant="h4" gutterBottom sx={{  
                textAlign:'left', display: 'block', color: 
                'text.secondary', fontSize: 18, fontWeight: 'bold' }} component="div">
                 {todo.details}
                         </Typography>
        </Grid>
      </Grid>
    </Box>
        
      </CardContent>
   </ThemeProvider>
    </Card> 

    </>
    )
    }