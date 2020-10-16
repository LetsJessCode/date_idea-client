const initState = {
    comments: [],
    comment: {
        name: '',
        comment: '',
        idea_id: ''
    },
    errors: []
}

const commentReducer = (state = initState, action) => {
    switch (action.type){
        case "GET_COMMENTS":
            return {...state, 
                loading: false, 
                comments: action.comments
            } 
        case "ADD_COMMENT":
            return {...state,
                comments: [...state.comments, action.newComment] 
                }
        case "CREATE_COMMENT_ERROR":
            alert('Comment Name:' + action.errors.name)
                return{...state,
                    errors: action.errors
                }
            default:
               return state
        }
    }