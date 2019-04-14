const initialState = {};

function rootReducer(state = initialState, action) {
  if (action.type === 'SUBMIT') {
    console.log(action.values);
  }
  return state;
}

export default rootReducer;
