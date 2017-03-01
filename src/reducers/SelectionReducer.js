export default (state = null, action) => {
  // boilerplate for reducers
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }

  // console.log(action);
  // return null;
  // cannot return undefined, so even null will be better otherwise Error will show.
};
