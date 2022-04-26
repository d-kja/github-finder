const githubReducer = (state, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                users: action.payload.users,
                loading: action.payload.loading,
            };
        case "GET_USER":
            return {
                ...state,
                user: action.payload.user,
                loading: action.payload.loading,
            };
        case "RESET_USERS":
            return {
                ...state,
                users: [],
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload.loading,
            };

        default:
            return state;
    }
};

export default githubReducer;