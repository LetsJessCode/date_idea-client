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
            return {...state, 
                loading: false, 
                comments: action.idea.idea.comments
            }
            
        case "ADD_COMMENT":
            return {...state,
                comment: 
                action.idea.idea.comment,
            }
            default:
               return state
        }
    }