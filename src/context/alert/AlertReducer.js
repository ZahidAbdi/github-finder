// Reducers to dispatch actions to make an alert show in the state
const alertReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload;
    case 'REMOVE_ALERT':
      return null;
    default:
      return state;
  }
};

export default alertReducer;
