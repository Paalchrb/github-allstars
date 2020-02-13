import React, { Fragment, useState, useEffect } from "react";
import { getRepos } from "../services/repos";
import RepoTable from "../components/RepoTable/RepoTable";
import Pagination from "../components/Pagination";
import { Typography } from "@material-ui/core";


const App = () => {
  const [state, setState] = useState({
    repos: [],
    page: 0,
    reposPrPage: 20,
    error: null,
    loading: true
  });

  useEffect(
    () => {
      (async () => {
        const response = await getRepos();
        setState(state => ({
          ...state,
          repos: response.repos,
          error: response.error,
          loading: false,
        }));
      })();
    },
    [] //makes useEffect behave like componentDidMount()
  );
  
  const { repos, page, reposPrPage, loading, error } = state;
  
  const reposByPage = repos.slice(page*reposPrPage, (page+1)* reposPrPage);   //Slice out 20 repos based on chosen page

  const handlePageChange = (value) => {
    setState({
      ...state,
      page: state.page + value,
    });
  };

  return (
    <Fragment>
      <Typography variant="h1" component="h1" id="main-heading">GitHub Allstars</Typography>
      {
        error ? (
          <Typography variant="h2" component="h2">Something went wrong. Please try again later...</Typography>
        ) : (
          <Fragment>
            <RepoTable repos={reposByPage} loading={loading}/>
            <Pagination handlePageChange={handlePageChange} currentPage={page} perPage={reposPrPage}/>
          </Fragment>
        )
      }
    </Fragment>
  );
};

export default App;
