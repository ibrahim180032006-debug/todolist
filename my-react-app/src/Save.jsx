// // App.jsx
// import { Routes, Route , Link } from 'react-router-dom';
// import Navbar  from './Navbar';
// import Home from './Hello';
// import PostListe from './PostListe';
// import Footer from './Footer';
// import PostFDetails from './PostFDetails';
// import { UseContext } from './Context/PostContext';
// import NotFound from './NotFound';
// import './App.css';
// import NewPost from './NewPost';
// import DeletePost from './DeletePost'
// import Postlayout from './Postlayout';
// import Informatiom from './Informatiom';
// function App() {
//    let postsData = [
//    {
//       id:1 , title: 'hello world' ,
//        body:'brahim rami kehal'
//    },{
//       id:2 , title:'brahim' ,
//       body:'islam '
//    } ,{
//       id:3 , title:'hhh' ,
//         body :'hhh'
//    }


//  ]
//   return (
//     <UseContext.Provider value={postsData}>
//     <>
//      <div style={{display:'flex' , justifyContent:'center' , gap:'20px'}}>
//       <Link to={"/"}>
//       <button>Home</button>
//       </Link>
//       <Link to={"/yes"}>
//       <button>about</button>
//       </Link>
//       <Link to={"/post"}>
//       <button>posts</button>
//       </Link>
//       <Link to={'/footer'}>
//        <button>Footer</button>

//       </Link>
//     <Link to={"/Informatiom"}> <button>informtaiom</button></Link>
     
      
//      <PostFDetails></PostFDetails>
//      </div>
//     <Routes>
//       {/* Define your application pages here */}
//       <Route path="/" element={<h1>Home Page</h1>} />
//       <Route path="/about" element={<h1>About Page</h1>} />
//       <Route path="/home" element = {<Navbar/>}></Route>
// <Route path='/post' element = {<Postlayout/>}>
// <Route index={true} element={<PostListe/>}></Route>
//       <Route path ="deleted" element = {<DeletePost/>}></Route>
//  <Route path='new' 
//   element = {<NewPost/>}></Route>
// </Route>
//       <Route path='/yes' element ={ <Home/>}></Route>

//       <Route path='/footer' element = {<Footer/>}></Route>
 
//   <Route path='*' element = {<NotFound/>}></Route>
//       </Routes>
//     </>
//     </UseContext.Provider>
//   );
// }

// export default App;

// import { Link } from "react-router-dom";

// export default function Home () {
//       return (
//         <>
//         <Link to={'/home'}>
//         <ul>
//             <li>home</li>
//             <li>about</li>
//             <li>concat</li>
//             <button>click me</button>
//         </ul>
//         </Link>
//         </>
//       )
// }
//  UI 
// App.jsx
// import './App.css';
// import Matreil from './Button'
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { green, orange } from '@mui/material/colors';
// const theme = createTheme({
// status: {
//    danger : orange[500]},

//     palette: {
          
//               primary: {
//                 main: green[900],}
// }})
// function App () {
//   return(
//      <ThemeProvider theme={theme}>
//   <>
//     <Matreil/>
//   </>
//   </ThemeProvider>
//   )
// }
// export default App;
// +import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// export default function Matreil() {
//      function  hi() {
//         alert("click");
//      }
//   return (
//     <Stack direction="row" spacing={2}>
        
//       <Button  color="primary">Secondary</Button>
//       <Button variant="outline" size = "large" color="success">
//         Success
//       </Button>
//       <Button onClick = {hi} variant="outlined" color="error">
//         Error
//       </Button>
//     </Stack>
//   );
// }
// +import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import Container from '@mui/material/Container';
