import { useState,useEffect } from 'react';
import ListTask from './Components/ListTask';
import './App.css';
import {Paper } from '@mui/material';
 
function App() {
  
  return (
   <Paper elevation={3} style={{width:600,marginTop:80,backgroundColor:"beige",position:"absolute",left:450}}>
      
      <ListTask/>
      </Paper>
     
      
  );
}

export default App;
