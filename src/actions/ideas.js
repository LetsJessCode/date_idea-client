const BASEURL = "http://localhost:3001/ideas/"
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
  // debugger;
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
            document.location.reload(true) 
         })
         
      }
  }
  export const getIdea = (id) => {
      return(dispatch) => {
        fetch(BASEURL + id)
        .then(resp => resp.json())
        .then(idea => dispatch({type: "GET_IDEA", idea}))
      }
  }
  export const createComment = (comment, id) => {
    console.log(comment)
    return(dispatch) => {
      
        const strongParams = {
            comment: {
                idea_id: id,
                name: comment.name,
                comment: comment.comment
            }
        }
        fetch(BASEURL + id + "/comments", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
        },
        body: JSON.stringify(strongParams)
    })
    .then(resp => resp.json())
    .then(comment => {
            console.log(comment)
            dispatch({type: "ADD_COMMENT", comment})
        })
    .then(document.location.reload(true))
      }
    }

 