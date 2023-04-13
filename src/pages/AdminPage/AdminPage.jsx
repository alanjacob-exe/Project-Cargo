import {
  Avatar,
  Button,
  Divider,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  collection,
  query,
  onSnapshot,
  doc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";
import Logo from "../../Photos/bus2.png";
import { IoAddOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import "./adminpage.css";


export default function Just(props) {
  const db = getFirestore();
  const navigate = useNavigate();
  const [Bus, setBus] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  var deleteRecord = async (e) => {
    var deleteBus = String(removeBus[0].busNumber);

    var docRef = doc(db, "buses", deleteBus);
    deleteDoc(docRef)
      .then(() => {
        console.log("Entire Document has been deleted successfully.");
      })
      .catch((error) => {
        console.log(error);
      });
    // const res = await deleteDoc(doc(db, "buses", removeBus)).then(() => {
    //   console.log("Document Deleted").catch((e) => {
    //     console.log();
    //   });
    // });
  };

  const [removeBus, setremoveBus] = useState("");
  useEffect(() => {
    // console.log("useeffect" + removeBus[0]?.busName);
  }, [removeBus]);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "35%",
    // border: "2px solid #000",
    backgroundColor: "white",
    boxShadow: 24,
    borderRadius: "12px",
    p: 4,
  };

  useEffect(() => {
    const q = query(collection(db, "buses"));
    onSnapshot(q, (querySnapshot) => {
      setBus(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "busName",
      headerName: "Bus name",
      width: 150,
      editable: true,
    },
    {
      field: "startCity",
      headerName: "Start city",
      width: 150,
      editable: true,
    },
    {
      field: "destinationCity",
      headerName: "End city",
      width: 150,
      editable: true,
    },
    {
      field: "busNumber",
      headerName: "Bus number",
      type: "number",
      width: 150,
      editable: false,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
      //   valueGetter: (params) =>
      //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
      field: "totalSeats",
      headerName: "Seat Capacity",

      width: 150,
      editable: true,
    },
    {
      field: "Edit",
      headerName: "Edit",
      width: 100,
      renderCell: (params) => {
        return (
          <Link
            to="/adminedit"
            state={{
              busname: Bus.filter((item) => item.id === params.id),
            }}
          >
            <Button variant="contained" size="small">
              Edit
            </Button>
            {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
              Uploaded
            </Button> */}
          </Link>
        );
      },
    },
    {
      field: "remove",
      headerName: "Remove",
      width: 100,
      renderCell: (params) => {
        return (
          <Link to="" state={{}}>
            <Button
              variant="outlined"
              color="error"
              size="small"
              onClick={() => {
                handleOpen();
                setremoveBus(Bus.filter((item) => item.id === params.id));
              }}
            >
              Remove
            </Button>
            {/* <div className="my-auto left-0 top-0 w-[40%] h-[60%] absolute"></div> */}
            {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
              Uploaded
            </Button> */}
          </Link>
        );
      },
    },
  ];

  return (
    <main className="main ">
      <div className="navcontainer">
        <div style={{ display: "flex" }}>
          <div className=" logoholder">
            <Avatar alt="project Cargo" src={Logo} />
          </div>
          <div className="cargoholder">Voyage</div>
        </div>
      </div>
      <div className="align-container">
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
              <Link
              to="/registration"
              state={
                {
                  // busname: Bus.filter((item) => item.id === params.id),
                }
              }
            >
              <Button
              sx={{color:"black"}}
                variant="text"
                size="small"
                startIcon={<IoAddOutline />}
              >
                Add Bus
              </Button>
              {/* <Button variant="contained" size="small" color="success" disabled startIcon={ <IoIosDoneAll />}>
              Uploaded
            </Button> */}
            </Link>
              <Divider />
            </div>
          </div>
          <Divider />
          <div className="sub-container">
            <div style={{ width: "100%", marginTop: "2%" }}>
              <DataGrid
                sx={{ height: "20%" }}
                autoHeight
                rows={Bus}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 6,
                    },
                  },
                }}
                pageSizeOptions={[6]}
              />
            </div>
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
            Are You Sure?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Proceeding with this action will result in the data being removed
            from the database permanantly.
            <Typography sx={{ mt: 2, color: "red" }}>
              Do you want to continue?
            </Typography>
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <div className="flex">
            <div className="mx-auto relative right-0 mt-2 ">
              <Button
                sx={{ marginRight: "8px" }}
                variant="contained"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  deleteRecord();
                  handleClose();
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Box>
      </Modal>{" "}
    </main>
  );
}
