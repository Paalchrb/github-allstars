import React, { Fragment } from "react";
import { useStyles } from "../../services/styles";
import { 
  TableRow,
  TableCell,
  Link
} from "@material-ui/core";

const TableRows = ({ repos }) => {
  const classes = useStyles(); //assign imported styles from services/styles

  return (
    <Fragment>
      {
        repos.map(repo => (
          <TableRow key={repo.id}>
            <TableCell className={classes.tBodyCell}>{repo.name}</TableCell>
            <TableCell className={classes.tBodyCell}>{repo.language}</TableCell>
            <TableCell className={classes.tBodyCell} align="right">{repo.stargazers_count}</TableCell>
            <TableCell className={classes.tBodyCell} align="right">{repo.forks_count}</TableCell>
            <TableCell className={classes.tBodyCell}>
              <Link href={repo.html_url} target="_blank">
                {repo.html_url}
              </Link>
            </TableCell>
          </TableRow>
        ))
      }
    </Fragment>
  )
}

export default TableRows;