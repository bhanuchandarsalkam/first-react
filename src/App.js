import React from 'react';
import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import Section from "./components/section.js";
import Sectiondata from "./data/sectiondata.js";
import "./index.css";
const App=()=>{
  return(
    <div>
    <Navbar/>
    <About/>
    {
      Sectiondata.map(value=>{
        return <Section x={value.title} 
        y={value.description}
         />
      })
    }
   </div>
  )
    
}
export default App;