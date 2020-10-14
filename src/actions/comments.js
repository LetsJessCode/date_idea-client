const BASEURL = "http://localhost:3001"
const LOADING = {type: "LOADING"}

export const fetchComments = (id) => {
    return(dispatch) => {

        dispatch(LOADING);
      fetch(BASEURL + "ideas" + id + '/comments')
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
        fetch(BASEURL + "ideas" + id + '/comments/new', {
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