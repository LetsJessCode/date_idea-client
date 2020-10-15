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
          category: ideaData.category,
          title: ideaData.title,
          how_to: ideaData.how_to,
          items: ideaData.items,
          comments: ideaData.comments
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
  let localURL = "http://localhost:3001/ideas/:id"
   
  export const getComments = (id) => {
      return(dispatch) => {
        fetch(localURL + '/comments')
          .then(resp => resp.json())
          .then(comments => dispatch({type: "GET_COMMENTS", comments}))  
      }
  }
  export const createComment = (commentData, id, history) => {
    return(dispatch) => {
        const strongParams = {
            comment: {
                idea_id: id,
                name: commentData.name,
                comment: commentData.comment
            }
        }
      fetch(localURL + '/comments/new', {
          method: "POST",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
      },
      body: JSON.stringify(strongParams)
  })
  .then(resp => resp.json())
  .then(comment => {
    dispatch({type: "ADD_COMMENT", comment})
     history.push('/ideas/:id') 
      })
  }
}