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

export const createIdea = (ideaData, id, history) => {
    return(dispatch) => {
      const strongParams = {
        idea:{
          idea_id: id,
          category: ideaData.category,
          title: ideaData.title,
          how_to: ideaData.how_to,
          items: ideaData.items
        }
      }
      fetch(BASEURL, {
        method: "POST",
                 headers: {
                     'Accept': 'application/json',
                     'Content-Type': 'application/json'
             },
             body: JSON.stringify(strongParams)
         })
         .then(resp => resp.json())
         .then(idea => {
           dispatch({type: "ADD_IDEA", idea})
            history.push('/ideas') 
         }) 
      }
  }
  
  export const getIdea = (ideaId) => {
      return(dispatch) => {
        fetch(BASEURL + ideaId)
        .then(resp => resp.json())
        .then(idea => dispatch({type: "GET_IDEA", idea}))
      }
  }