import {
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./adminhome.css";

import Logo from "../../../Photos/bus2.png";

export default function AdminHome(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  return (
    <main className="main ">
      <div className="navcontainer">
        <div style={{ display: "flex" }}>
          <div className=" logoholder">
            <Avatar alt="project Cargo" src={Logo} />
          </div>
          <div className="cargoholder">Project Cargo</div>
        </div>
      </div>
      <div className="main-container">
        <div style={{ display: "flex" }}>
          <div>
            <h4 style={{ fontWeight: 600 }}>Welcome Administrator!</h4>
            <p
              style={{
                color: "black",
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                right: "0px",
                display: "flex",
              }}
              className="text-secondary text-sm"
            ></p>
          </div>

          <div
            style={{ right: "0px", position: "relative", marginLeft: "auto" }}
          >
            <IconButton color="primary" component="label">
              <IoMdLogOut />
            </IconButton>
          </div>
        </div>
        <Divider />
        <div className="sub-container">
          {/* <div className="mx-auto bg-black w-full relative flex ">
            
          </div> */}
          <div
            className="content-container"
            onClick={() => {
              navigate("/adminuser");
            }}
          >
            <div className="content">Manage Users</div>
          </div>
          <div
            className="content-container"
            onClick={() => {
              navigate("/adminbuses");
            }}
          >
            <div className="content">Manage Buses</div>
          </div>
          <div
            className="content-container"
            onClick={() => {
              navigate("/admin-conductor");
            }}
          >
            <div className="content">Manage Conductors</div>
          </div>
        </div>
      </div>

      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
