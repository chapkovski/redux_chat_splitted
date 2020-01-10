import { connect } from "react-redux";
import { addChatRecord, setFormInput } from "../actions";
import MainForm from "../components/mainform";
import { formMessage } from "../components/chat/structures";
const mapStateToProps = (state, ownProps) => ({
  form_data: state.form_data
});

const mapDispatchToProps = dispatch => ({
  logFormChange: (input_name, val) => {
    const form_message = formMessage({ input_name: input_name, text: val });
    return dispatch(addChatRecord(form_message));
  },
  setFormInput: (input_name, val) => dispatch(setFormInput(input_name, val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);
