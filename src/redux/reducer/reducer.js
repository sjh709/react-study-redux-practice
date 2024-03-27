let initialState = {
  count: 0,
  id: '',
  password: '',
  countOpen: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + action.payload.num };
    case 'DECREMENT':
      return { ...state, count: state.count - action.payload.num };
    case 'LOGIN':
      return {
        ...state,
        id: action.payload.id,
        password: action.payload.password,
        countOpen: true,
      };
    default:
      return { ...state };
  }
}

export default reducer;
