import React from "react";
import TableSkeleton from "./TableSkeleton";
import { useStyles } from "../../services/styles";
import TableRows from "./TableRows";
import TableHeader from "./TableHeader";
import { 
  Table,
  TableBody,
} from "@material-ui/core";


const RepoTable = ({ repos, loading }) => {
  const classes = useStyles(); //assign imported styles from services/styles

  return (
    <section className="table-container">
      <Table stickyHeader aria-label="sticky table" className={classes.table}>
        <TableHeader />
        <TableBody className={classes.tbody}>
          {
            loading ? (
              <TableSkeleton />
            ) : (
              <TableRows repos={repos} />
            )
          }
        </TableBody>
      </Table>
    </section>
  );
};

export default RepoTable;