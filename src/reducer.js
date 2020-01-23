export function reducer(state, action){
    switch(action.type){
        case 'IS_TITLE': return {...state, isTitle: action.isTitle};
        case 'ID_TITLE': return {...state, idTitle: action.idTitle};
        default: return state;
    }
}