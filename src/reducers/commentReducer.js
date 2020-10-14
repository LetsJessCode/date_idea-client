const initState = {
    comments: [],
    comment: {
        name: '',
        comment: '',
        idea_id: ''
    }
}

const commentReducer = (state = initState, action) => {
    switch (action.type){
        case "GET_COMMENTS":
            return {...state, comments: action.comments}
        case "ADD_COMMENT":
            return {...state, comment: action.comment}   
            default:
                return state
        }
    }