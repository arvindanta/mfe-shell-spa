import React,{ useEffect, useState} from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { MFEController } from "./controller";
import './App.css';

import ReactApp from "./ReactApp";
import Wc from "./Wc";
import NotFound from "./NotFound"
import Redirect from "./Redirect";

function App() {

  let navigate = useNavigate();
  let [to,setTo] = useState('');
  
  useEffect(() =>{
    console.log("xxx ", MFEController)
    MFEController?.__mfe_subscribe('root', (ev) => {
      console.log('root ', ev);

      if (ev) {
        const { action, payload } = ev;
        if (action.type === 'navigate') {
          const {  to } = payload;
          console.log("to ", to)
          navigate(to);
          setTo(to);

          //document.querySelector('#reactForm').remove();
        //  window.history.pushState(null, '', to);
        
        }
      }
    });
  }, [navigate])
  console.log("xlskdk")
  return (
    <div className="App">
      <h1> Common app shell coude</h1>
     <Routes>
          <Route path="/accounts/react1/*" element={<ReactApp route={to}/>}/>
          <Route path="/accounts/wc/*" element={<Wc />} />
          <Route path="/redirect" element={<Redirect />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

    </div>
  );
}

export default React.memo(App);
