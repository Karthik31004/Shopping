const initialState = {
    activeTab: "Home"
}

function rootReducer(state = initialState , action) {
    switch(action.type)
    {
        case "TAB_CHANGE":
            return {...state , activeTab: action.tab }
        default:
            return state;
    }   
}

export default rootReducer;