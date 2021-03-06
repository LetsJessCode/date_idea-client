const initState = {
    loading: true,
        ideas: [],
        // idea: {
        //     title: '',
        //     category: '',
        //     how_to: '',
        //     items: '',
        //     comments: []
        // }
    }

    const ideaReducer = (state = initState, action) => {
        
        switch(action.type) {
            case "LOADING":
                
                return {...state,
                    loading: true
                }
            case "LOAD_IDEAS":
                return {...state,
                    loading: false, 
                    ideas: action.ideas,
                    }

            case "ADD_IDEA":
                return {...state, 
                    idea: action.idea
                }

            case "GET_IDEA":
                console.log('retrieved idea', action.idea)
                return {...state, 
                    title: action.idea.idea.title,
                    category: action.idea.idea.category,
                    how_to: action.idea.idea.how_to,
                    items: action.idea.idea.items,
                    loading: true
                }

            case "ADD_COMMENT":
                // debugger;
                console.log('retrieved comment', action.comment)
                let comments = [...state.idea.comments];
                comments.push(action.ideas)
                return {...state,
                    reload: true
                }
                    default:
                    return state;
                }     
            }
    export default ideaReducer