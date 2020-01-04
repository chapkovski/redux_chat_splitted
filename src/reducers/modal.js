const modal_status = (state = false, action) => {
  switch (action.type) {
    case "SET_MODAL":
      return action.visible;
    default:
      return state;
  }
};

export default modal_status;
