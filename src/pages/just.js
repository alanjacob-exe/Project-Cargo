// import {
//   Avatar,
//   Button,
//   ButtonBase,
//   Divider,
//   IconButton,
//   Modal,
//   Typography,
// } from "@mui/material";
// import emailjs from "@emailjs/browser";

// import React, { useEffect, useState, useRef } from "react";
// import { IoMdLogOut } from "react-icons/io";
// import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
// import { DataGrid } from "@mui/x-data-grid";
// import {
//   collection,
//   query,
//   orderBy,
//   onSnapshot,
//   getDocs,
//   doc,
//   getDoc,
//   deleteDoc,
//   getFirestore,
// } from "firebase/firestore";
// // import { db } from "../../firebase";
// import Logo from "../Photos/bus2.png";
// import { IoAddOutline } from "react-icons/io5";
// import { useNavigate } from "react-router-dom";

// export default function Just(props) {
//   const form = useRef();

//   const db = getFirestore();
//   const navigate = useNavigate();
//   const [User, setUser] = useState("");
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   const [removeBus, setremoveBus] = useState("");
//   useEffect(() => {
//     console.log("useeffect" + removeBus[0]?.busName);
//   }, [removeBus]);

//   const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: "50%",
//     height: "35%",
//     // border: "2px solid #000",
//     backgroundColor: "white",
//     boxShadow: 24,
//     borderRadius: "12px",
//     p: 4,
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_c6if2zk",
//         "template_88dkltf",
//         templateParams,
//         form.current,
//         "4qTu7peXWZ3e5BmWv"
//       )
//       .then(
//         (result) => {
//           alert("Message Sent Successfully");
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }

//       );
//   };
// to_email=localStorage.getItem("userEmail")
//   templateParams={
//     to:toEmail,
//   }

//   const [toEmail, settoEmail] = useState()
//   return (
//     <main className="bg-slate-50 min-h-screen flex justify-center py-12 ">
//       <div className="h-[8vh] absolute top-0 bg-sky-900 w-screen">
//         <div className="flex">
//           <div className=" left-0 w-5 h-5 mt-2 ml-8 flex">
//             <Avatar alt="project Cargo" src={Logo} />
//           </div>
//           <div className="text-white right-20  font-bold text-lg   top-0 absolute mt-3 ">
//             Project Cargo
//           </div>
//         </div>
//       </div>
//       <div className="rounded-xl bg-white w-[90%] flex flex-col p-10 min-h-[50vh] space-y-4 border mt-5 ">
//         <div className="flex justify-between">
//           <div>
//             <h4 className="font-semibold">User details</h4>
//             <p className="text-secondary text-sm"></p>
//           </div>
//           <div className="flex">
//             <Button
//               variant="text"
//               onClick={() => {
//                 navigate("/adminadduser");
//               }}
//               startIcon={<IoAddOutline />}
//               sx={{ color: "black" }}
//             >
//               Add user
//             </Button>
//             {/* <IconButton color="primary" component="label">
//               <IoAddOutline></IoAddOutline> 
//             </IconButton> */}
//             {/* <div className="inline-block my-auto text-black font-semibold">
//                 Add Bus
//               </div> */}
//           </div>
//         </div>
//         {/* <DataGrid
//             rows={appointments}
//             columns={columns}
//             pageSize={10}
//             rowsPerPageOptions={[10]}
//             disableSelectionOnClick
//           /> */}
//         <div>
//           <form ref={form} onSubmit={handleSubmit}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" value={toEmail} onChange={(e)=>settoEmail(e.target.value)}/>
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//           </form>
//         </div>
//         <Divider />
//         <div className="w-[70%] h-full m-auto"></div>
//       </div>
//       <Modal
//         sx={{ backgroundColor: "none" }}
//         aria-labelledby="spring-modal-title"
//         aria-describedby="spring-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         //   slots={{ backdrop: Backdrop }}
//         //   slotProps={{
//         //     backdrop: {
//         //       TransitionComponent: Fade,
//         //     },
//         //   }}
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Are You Sure?
//           </Typography>
//           <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Proceeding with this action will result in the data being removed
//             from the database permanantly.
//             <Typography sx={{ mt: 2, color: "red" }}>
//               Do you want to continue?
//             </Typography>
//           </Typography>
//           <Divider sx={{ mt: 2 }} />
//           <div className="flex">
//             <div className="mx-auto relative right-0 mt-2 ">
//               <Button
//                 sx={{ marginRight: "8px" }}
//                 variant="contained"
//                 onClick={handleClose}
//               >
//                 Cancel
//               </Button>
//               <Button
//                 variant="contained"
//                 color="error"
//                 onClick={() => {
//                   handleClose();
//                 }}
//               >
//                 Continue
//               </Button>
//             </div>
//           </div>
//         </Box>
//       </Modal>
//     </main>
//   );
// }
