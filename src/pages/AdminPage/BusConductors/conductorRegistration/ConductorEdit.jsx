import {
  Avatar,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./conductor.css";
import {
  collection,
  query,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../../../firebase";

import Logo from "../../../../Photos/bus2.png";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function AdminHome(props) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [Name, setName] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [busColl, setbusColl] = useState([]);
  const [busid, setbusid] = useState("");

  const [error, setError] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const BusCollection = () => {
    const q = query(collection(db, "buses"));
    onSnapshot(q, (querySnapshot) => {
      setbusColl(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  };

  useEffect(() => {
    BusCollection();
  }, []);

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
        setIsLoading(false);
      }
    }
    return isValid;
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const busCollection = doc(db, "conductors", email);
      await setDoc(busCollection, {
        Name,
        email,
        busid,
        password,
      });

      handleOpen();
    } catch (e) {
      alert(e);
    }
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "30%",
    // border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };



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
            <h4 style={{ fontWeight: 600 }}>Edit Conductor</h4>
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
          <div className="login-holder ">
            {error && (
              <div className="error-holder">
                {error}
              </div>
            )}

            <form name="registration_form" onSubmit={handleSubmit}>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Enter Name
                </label>
                <input
                  onChange={(e) =>
                    setName(capitalizeFirstLetter(e.target.value))
                  }
                  value={Name}
                  style={{width:"100%"}}

                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label for="text" className="text-style mb-2">
                  Select bus
                </label>
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Bus</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Bus"
                      style={{width:"100%"}}

                      required
                      onChange={handleChange}
                      className="h-[50%]"
                    >
                      {busColl?.map((value) => (
                        <MenuItem
                          key={value.id}
                          value={value.id}
                          onClick={() => {
                            setbusid(value.id);
                          }}
                        >
                          {value.data.busName}
                        </MenuItem>
                      ))}
                      {/* <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </Box>
              </div>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Enter Email
                </label>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  required
                  style={{width:"100%"}}

                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Enter Password
                </label>
                <input
                  onChange={(e) => setpassword(e.target.value)}
                  value={password}
                  required
                  style={{width:"100%"}}

                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>
              <div className="mb-2">
                <label for="text" className="text-style">
                  Confirm Password
                </label>
                <input
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  value={confirmPassword}
                  required
                  style={{width:"100%"}}
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
              </div>

              <div>
                <Button
                sx={{width:"100%"}}
                  className="w-full mt-2 bg-black"
                  variant="contained"
                  type="submit"
                >
                  {isLoading ? "Loading.." : "Update"}{" "}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Modal
        sx={{ backgroundColor: "none" }}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        //   slots={{ backdrop: Backdrop }}
        //   slotProps={{
        //     backdrop: {
        //       TransitionComponent: Fade,
        //     },
        //   }}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Success!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Data has been Updated Successfully!
            <Typography sx={{ mt: 2, color: "red" }}>
            </Typography>
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <div className="flex">
            <div className="mx-auto relative right-0 mt-2 ">
              
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  handleClose();
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Box>
      </Modal>

      {/* <MuiModal open={open} handleclose={() => setOpen(false)} heading="hello" content="Testing content"></MuiModal> */}
    </main>
  );
}
