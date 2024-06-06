import React from "react";
import { Box, Modal } from "@mui/material";
import RegisterFrom from "./RegisterFrom";

import { useLocation } from "react-router-dom";
import LoginForm from "./LoginForm.jsx";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -60%)",
  width: 500,
  bgcolor: "background.paper",

  boxShadow: 24,
  BorderAllRounded: "20px",

  p: 4,
};
const AuthModal = ({ handleClose, open }) => {
  const location = useLocation();
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="  rounded-lg" sx={style}>
          {location.pathname === "/login" ? <LoginForm /> : <RegisterFrom />}
        </Box>
      </Modal>
    </div>
  );
};

export default AuthModal;
