import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./pages/Home";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Certificates from "./pages/Certificates";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Header from "./components/Header";


const App = () => {
  return (
  
    <BrowserRouter>
     <Header/>
     
    <Routes>
      <Route exact path="/" element={<Home/>}> </Route>
      <Route path="/education" element={<Education/>}> </Route>
      <Route path="/skills" element={<Skills/>}> </Route>
      <Route path="/experience" element={<Experience/>}> </Route>
      <Route path="/certificates" element={<Certificates/>}> </Route>
      <Route path="/projects" element={<Projects/>}> </Route>
    </Routes>
    </BrowserRouter>  
    )
}

export default App
