"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  // console.log(user);
  // console.log(userData);
  const handleSignOut = async() => {
    await authClient.signOut()
  }
  const links = (
    <>
      <li>
        <Link href={"/"} className="text-lg hover:text-red-700">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/all-courses"} className="text-lg hover:text-red-700">
          Courses
        </Link>
      </li>
      <li>
        <Link href={"/my-profile"} className="text-lg hover:text-red-700">
          My Profile
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#080431] text-white shadow-sm py-3 border-b border-gray-600">
      <div className="navbar-start lg:ml-15">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content text-black bg-white rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href={"/"} className="text-2xl md:text-3xl">
          <span className="">Skill</span>
          <span className="text-red-700">Sphere</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-3 lg:mr-15">
        {!user && (
          <ul className="flex gap-5">
            <li>
              <Link
                href={"/signup"}
                className="text-sm md:text-lg hover:text-red-700"
              >
                SignUp
              </Link>
            </li>
            <li>
              <Link
                href={"/signin"}
                className="text-sm md:text-lg hover:text-red-700"
              >
                SignIn
              </Link>
            </li>
          </ul>
        )}
        {user && (
          <div className="flex items-center gap-3">
            <Avatar size='sm'>
              <Avatar.Image
                alt={user?.name}
                src={user?.image}
                
                
              />
              <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleSignOut} size="sm" className={"bg-red-700 text-white hover:scale-[1.02]"}>Sign Out</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
