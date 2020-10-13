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

export const createIdea = (ideaData, history) => {
    return(dispatch) => {
      fetch(BASEURL, {
        method: "POST",
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
             },
             body: JSON.stringify(ideaData)
         })
         .then(resp => resp.json())
         .then(idea => {
           dispatch({type: "ADD_IDEA", idea})
            history.push('/ideas') 
         }) 
      }
  }