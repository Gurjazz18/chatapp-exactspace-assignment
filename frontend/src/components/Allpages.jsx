import React from 'react';
import { Routes,Route} from "react-router-dom";
import Join from './join/Join';
import Chat from './chat/Chat';

const Allpages = () => {
  return (
    <Routes>
     <Route path="/" element={<Join/>}></Route>
     <Route path="/chat" element={<Chat/>}></Route>
      
    </Routes>
  )
}

export default Allpages
