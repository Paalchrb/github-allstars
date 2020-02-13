const API_URL = "https://api.github.com/search/repositories";

/***** 
* Function fetches 100 most stared javascript github repos 
* Returns an object containing an array of repos or an error object
*****/
export const getRepos = async() => {
  try {
    const response = await fetch(`${API_URL}?q=language:javascript&sort=stars&order=desc&per_page=100`);
    const result = await response.json();

    return {
      repos: result.items,
      error: null,
    };
  } catch (error) {
    return {
      repos: null,
      error: {
        msg: error.message
      },
    };
  }
}