import React from "react";
import { Snackbar, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNotification } from "../Hooks/NotificationContext";

const Notification = () => {
  const { notification, closeNotification } = useNotification();

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={notification.open}
      autoHideDuration={6000}
      onClose={closeNotification}
      message={notification.message}
      action={
        <IconButton size="small" color="inherit" onClick={closeNotification}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
    />
  );
};

export default Notification;
