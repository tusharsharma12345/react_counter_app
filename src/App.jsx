import { useState } from 'react'
import Count from './count'
import './styles/app.css'
function App() {
  let [curr,setCurr] = useState(0);

  function increase_value(){
    if(curr<20){
    setCurr(curr+1);}
  }
  function decrease_value(){
    if(curr>0){
    setCurr(curr-1);}
  }
  return (
    <>
    <center class = "main_element">
     <Count current_value={curr} />
     <button onClick={increase_value}>Increase value + {curr}</button>
     <button onClick={decrease_value}>Decrease value - {curr}</button>
    </center>
    </>   
  )
}

export default App
