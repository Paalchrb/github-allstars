import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableCell, TableRow } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";


const useStyles = makeStyles({
  name: {
    width:"25%"
  },
  language: {
    width: "16.3%"
  },
  stars: {
   width: "9%"
  },
  forks: {
    width: "9%"
  },
  checkout: {
    width: "45%"
  }
});


const TableSkeleton = () => {
  const classes = useStyles();
  
  return (
    <Fragment>
      {
        //Creates skeleton markup for 20 rows
        Array.from(new Array(20)).map((element, index) => {
          return(
            <TableRow key={index}>
              <TableCell className={classes.name}>
                <Skeleton variant="text" width="83%" />
              </TableCell>
              <TableCell className={classes.language}>
                <Skeleton variant="text" width="83%" />
              </TableCell>
              <TableCell className={classes.stars}>
                <Skeleton variant="text" width="83%" />
              </TableCell>
              <TableCell className={classes.forks}>
                <Skeleton variant="text" width="83%" />
              </TableCell>
              <TableCell className={classes.checkout}>
                <Skeleton variant="text" width="83%" />
              </TableCell>
            </TableRow>
          );
        })
      }
    </Fragment>
  ); 
};

export default TableSkeleton;
