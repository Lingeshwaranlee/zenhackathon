import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";

export function Error() {
  const his = useHistory();
  return (
    <div className="container-fluid">
      {/* <!-- 404 Error Text --> */}
      <div className="text-center">
        <img src="https://c.tenor.com/IHdlTRsmcS4AAAAC/404.gif" alt="error" />

        <p className="lead text-gray-800 mb-5">Page Not Found</p>
        <p className="text-gray-500 mb-0">
          It looks like you found a glitch in the matrix...
        </p>
        <Button
          onClick={() => his.goBack()}
          variant="contained"
          startIcon={<ArrowBackIosIcon />}
        >
          Back
        </Button>
      </div>
    </div>
  );
}