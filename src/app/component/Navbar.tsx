"use client";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/new-logo.png";
import { useState } from 'react';
 
function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

const switchMenu = ()=>{
  setMenuOpen(!menuOpen)
}

  return (
    <div className="nav-parent">
      <div className="logo">
        <Link href={"/"}>
          <Image src={logo} alt="Logo Image" height={45} width={50}></Image>
        </Link>
      </div>

       <ol className={`nav-item  ${menuOpen ? "active" : ""}`}>

        <Link href={"/"} className='nav-item-child'>Home</Link>
         <Link href={"/about"} className='nav-item-child'>About</Link>
        <Link href={"/contact"} className='nav-item-child'>Contact</Link>
      </ol>

      <button className="sidebar-icon" onClick={switchMenu}>
        <MenuRoundedIcon />
      </button>
    </div>
  );
}

export default Navbar;
