import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const[ showLink , setShowLink]=useState();
  const linkContainerRef =useRef(null);
  const linkRef =useRef(null);

  useEffect(()=>{
    const linksHight= linkRef.current.getBoundingClientRect().hight;
    if(showLink){
      linkContainerRef.current.style.hight=`${linksHight}px`;
    }else{
      linkContainerRef.current.style.hight=`0px`;
    }
  },[showLink]);
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="name" />
        <button className='nav-toggle' onClick={()=>{setShowLink(!showLink)}}> <FaBars/> </button>
      </div>
      <div className='links-container' ref={linkContainerRef}>
        <ul className='links' ref={linkRef}> 
          {links.map((link)=>{
            const {id,url, text }=link;
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((socialIcon)=>{
          const {id, url ,icon}=socialIcon;
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li> 
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
