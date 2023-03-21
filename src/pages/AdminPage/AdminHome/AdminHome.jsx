import {
  Avatar,
  Button,
  Card,
  Divider,
  IconButton,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import Logo from "../../../Photos/bus2.png";

export default function AdminHome(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate=useNavigate()

  return (
    <main className="bg-slate-50 min-h-screen flex justify-center py-12 ">
      <div className="h-[8vh] absolute top-0 bg-sky-900 w-screen">
        <div className="flex">
          <div className=" left-0 w-5 h-5 mt-2 ml-8 flex">
            <Avatar alt="project Cargo" src={Logo} />
          </div>
          <div className="text-white right-20  font-bold text-lg   top-0 absolute mt-3 ">
            Project Cargo
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-white w-[70%] flex flex-col p-10 min-h-[50vh] space-y-4 border mt-5 shadow-md ">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">Welcome Administrator!</h4>
            <p className="text-secondary text-sm"></p>
          </div>
          
          
          <div><IconButton color="primary" component="label">
            <IoMdLogOut />
          </IconButton>
          <Divider/></div>
        </div>
        <Divider/>
        <div className="w-[50%]  h-[70%] border rounded-xl flex m-auto shadow-xl">
          {/* <div className="mx-auto bg-black w-full relative flex ">
            
          </div> */}
          <div className="w-[30%]  h-[50%] rounded-xl m-auto inline-block border flex shadow-md hover:border-black transition ease-in-out hover:cursor-pointer hover:shadow-2xl" onClick={()=>{navigate("#")}}>
            <div className="m-auto font-semibold">Manage Users</div>
          </div>
          <div className="w-[30%]  h-[50%] rounded-xl m-auto  border flex shadow-md hover:border-black transition ease-in-out hover:cursor-pointer hover:shadow-2xl" onClick={()=>{navigate("/adminbuses")}}>
          <div className="m-auto font-semibold">Manage Buses</div>
          </div>
        </div>
      </div>

      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
