import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
import { Icon } from "react-icons-kit";
import { navicon } from "react-icons-kit/fa/navicon";
import keshari from "../images/KeshariTimes.jpg";
import axios from 'axios';

export default function Nav() {
  const[data,setdata]=useState([]);
  const handleclick=(e)=>{
     e.preventDefault();
     async function asyncall(){
        const res=await axios.get('http://blockchain.info/ticker')
        setdata(res.data)
     }
     asyncall();
   
   alert(JSON.stringify(data));
     console.log(JSON.stringify(data))
  }
  const [data2,setdata2]=useState([]);
  const handleclick1=(e)=>{
    e.preventDefault();
    async function asyncall(){
       const res=await axios.get('https://api.blockchain.info/stats')
       setdata2(res.data)
    }
    asyncall();
    alert(JSON.stringify(data2));
    console.log(JSON.stringify(data2))
    
    console.log(data2)
 }
  return (
    <nav class="navbar navbar-expand-lg navbar-light p-0 container">
      <Link to="/" className="navbar-brand">
        <span className="brand-text">KeshariTimes</span>
        <img
              src={keshari}
              width="50em"
              alt="Contact"
              className="ml-1 md-5 navbar-brand"
            />
      </Link>
      <button
        className="navbar-toggler mr-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <Icon size="32" icon={navicon} />
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto text-dark text-uppercase">
        
          <NavLink onClick={handleclick} to="/" className="navlink nav-item">
          currency exchange calculator
          <hr className="hr-4" />
          </NavLink>
          <NavLink  onClick={handleclick1} to="/" className="navlink nav-item">
           transactional data Visualizer
           <hr className="hr-4" />
           
          </NavLink>
        
        </ul>
      </div>
    </nav>
  );
}
