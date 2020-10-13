const BASEURL = "http://localhost:3001/ideas"
const LOADING = {type: "LOADING"}

export const fetchIdeas = () => {
    return(dispatch) => {

        dispatch(LOADING);
      fetch(BASEURL)
        .then(resp => resp.json())
        .then(ideas => dispatch({type: "LOAD_IDEAS", ideas}))  
    }
}