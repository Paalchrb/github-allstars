import React from "react";
import { useStyles } from "../../services/styles";
import { columns } from "../../services/tabledata";
import { 
  TableHead,
  TableRow,
  TableCell,
} from "@material-ui/core";

const TableHeader = () => {
  const classes = useStyles(); //assign imported styles from services/styles

  return (
    <TableHead>
      <TableRow className={classes.thead}>
        {
          columns.map((column, index) => (
            <TableCell
              key={index}
              align={column.align}
              style={{ 
                width: column.width
              }}
              className={classes.tHeadCell}
            >
              {column.label}
            </TableCell>
          ))
        }
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;