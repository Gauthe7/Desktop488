import React from "react";
import logo from "./Images/logo-14 new 1.png";
import notification from "./Images/notification (2) 1.png";
import account from "./Images/account 1.png";
import quality from "./Images/quality (3) 1.png";
import Calendar from "react-calendar";
import save from './Images/save 1.png'
import Approve from './Images/aprrovals 2.png'
import Publish from './Images/publish 3.png'
import Pull from './Images/pull 2.png'
import Copy from './Images/copy 2.png'
import Paste from './Images/paste 3.png'
import Delete from './Images/delete 1.png'
import Preview from './Images/preview 1.png'
import { useState } from "react";
// import 'react-calendar/dist/Calendar.css';

function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="home">
      <div className="sidebar">
        <img className="logo" src={logo}></img>

        <div className="sidet">
            <pre >Save        </pre>
            <pre>Approve</pre>
            <pre>Publish</pre>
            <pre>Pull</pre>
            <pre>Preview</pre>
            <pre>Copy</pre>
            <pre>Paste</pre>
            <pre>Delete</pre>
            <img className="save" src={save}></img>
            <img className="Approve" src={Approve}></img>
            <img className="Publish" src={Publish}></img>
            <img className="Preview" src={Preview}></img>
            <img className="Pull" src={Pull}></img>
            <img className="Copy" src={Copy}></img>
            <img className="Paste" src={Paste}></img>
            <img className="Delete" src={Delete}></img>
        
        </div>
      </div>
      <div className="navs">
        <pre  className="navtext">Projects > FutureIK - Cinemas > Campaigns </pre>
      </div>
      <img className="notification" src={notification}></img>
      <img className="account" src={account}></img>
      <img className="quality" src={quality}></img>
      <button className="rectangle1">WHAT</button>
      <button className="rectangle2">WHEN</button>
      <button className="rectangle3">WHERE</button>
      <button className="rectangle4">SETTINGS</button>
      <button className="rectangle5">HISTORY</button>

      <button className="basic">Basic</button>
      <button className="advance">Advanced</button>

      <button className="Adiition">+ Addition</button>

      <button className="Exclusion">- Exclusion </button>

      <button className="Remove">x Remove all</button>

      <pre className="std">Start Date  16/03/2023 </pre>
      
      <pre className="etd">End Date 23/03/2023 </pre>

      <pre className="st">Start Time  09:00:00 </pre>
      <pre className="et"> End Time  18:00:00 </pre>



      <div className="cal1-h"></div>

      <div className="cal2">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Home;
