const initState = {
    loading: true,
    ideas: []
}

export default (state= initState, action) => {
    switch(action.type) {
        case "LOADING":
            return {...state, loading: true}
        case "LOAD_IDEAS":
            return {...state, loading: false, ideas: action.ideas}
        default:
            return state;
    }
}