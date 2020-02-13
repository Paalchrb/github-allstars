import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import { Typography } from "@material-ui/core";


const Pagination = ({ handlePageChange, currentPage, perPage }) => {
  return (
    <footer className="pagination-container">
        {currentPage > 0 && <ArrowBackIos className="page-arrow back" onClick={() => handlePageChange(-1)} />}
        <Typography variant="h6" component="p" className="pagination-text">
          showing repos  {currentPage * perPage || 1}  -  {(currentPage+1) * perPage}  of 100
        </Typography>
        {currentPage < 4 && <ArrowForwardIos className="page-arrow forward" onClick={() => handlePageChange(1)} />}
    </footer>
  )
}

export default Pagination;
