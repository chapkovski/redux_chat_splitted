
const form_data = (state = {}, action) => {
  switch (action.type) {
    case "SET_FORM_INPUT":
      return {...state,[action.input_name]:action.value}
    default:
      return state;
  }
};

export default form_data;
