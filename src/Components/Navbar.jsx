"use client";
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

  const links = <>
    <li><Link href={"/"}>Home</Link></li>
    <li><Link href={"/courses"}>Courses</Link></li>
    <li><Link href={"/my-profile"}>My Profile</Link></li>
  </>

  return (
   <div className="navbar bg-[#080431] text-white shadow-sm ">
  <div className="navbar-start lg:ml-15">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content text-black rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">SkillSphere</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end lg:mr-15">
    <ul className='flex gap-2'>
      <li><Link href={"/signup"}>SignUp</Link></li>
    <li><Link href={"/signin"}>SignIn</Link></li>
    </ul>
  </div>  
</div>
  );
};

export default Navbar;