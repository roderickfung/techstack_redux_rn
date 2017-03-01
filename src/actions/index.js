// Action Creators
export const selectLibrary = (libraryId) => {
  return {
    // action
    type: 'select_library',
    payload: libraryId
  };
};
