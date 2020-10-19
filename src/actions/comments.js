//     const baseURL = "http://localhost:3001"

// export const createComment = (commentData, id) => {
//     return(dispatch) => {
//         const strongParams = {
//             comment: {
//                 idea_id: id,
//                 name: commentData.name,
//                 comment: commentData.comment
//             }
//         }
//         fetch(baseURL + "/comments", {
//             method: "POST",
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(strongParams)
//     })
//     .then(resp => resp.json())
//     .then(comment => {
//             dispatch({type: "ADD_COMMENT", comment})  
//         })
//     }
// }