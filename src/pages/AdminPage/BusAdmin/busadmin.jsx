import { Avatar, Divider, IconButton } from "@mui/material";
import React from "react";
import { IoMdLogOut } from "react-icons/io";

import Logo from "../../../Photos/bus2.png";

export default function BusAdmin(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <div className="rounded-xl bg-white w-[90%] flex flex-col p-10 min-h-[50vh] space-y-4 border mt-5 ">
        <div className="flex justify-between">
          <div>
            <h4 className="font-semibold">Welcome Back Bus Admin!</h4>
            <p className="text-black text-sm">View Bookings</p>
          </div>
          <IconButton color="primary" component="label">
            <IoMdLogOut />
          </IconButton>
        </div>{" "}
        <Divider />
        <div className="h-full w-full bg-black">
          <div className="w-[20%] h-full bg-white border"> 11</div>
        </div>
        <div></div>
      </div>
      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
