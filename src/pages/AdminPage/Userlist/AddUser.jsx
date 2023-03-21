import { Avatar, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "../../../firebase";
import Logo from "../../../Photos/bus2.png";
import MuiModal from "../../../Components/Modal/MuiModal";

export default function Just(props) {
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
            <h4 className="font-semibold">Buses Currently Running </h4>
            <p className="text-secondary text-sm"></p>
          </div>
          <IconButton color="primary" component="label">
            <IoMdLogOut />
          </IconButton>
        </div>{" "}
        <Button variant="outlined" onClick={handleOpen}>
          TestButton
        </Button>
      </div>
      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
