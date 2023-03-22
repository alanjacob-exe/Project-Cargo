import {
  Avatar,
  Button,
  ButtonBase,
  Divider,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Navigate, useNavigate } from "react-router-dom";

export default function MuiModal({
  open,
  handleclose,
  heading,
  content,
  cancel,
  cont,
}) {
  const navigate = useNavigate();
  /////////////////////   variable to be declared in home page   //////////
  // const [open, setOpen] = React.useState(false);
  // const handleOpen =  () => setOpen(true);
  // const handleClose = () => setOpen(false);

  ///////////////    Component Declaration  ////////
  // <MuiModal open={open} handleclose={() => setOpen(false)}></MuiModal>

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

  return (
    <div>
      <Modal
        sx={{ backgroundColor: "none" }}
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleclose}
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
            {heading}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
          <Divider sx={{ mt: 2 }} />
          <div className="flex">
            <div className="mx-auto relative right-0 mt-2 ">
              <Button
                sx={{ marginRight: "8px" }}
                variant="contained"
                onClick={handleclose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => {
                  navigate("/adminbuses");
                }}
              >
                Continue
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
