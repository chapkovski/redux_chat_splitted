import { connect } from "react-redux";
import { addChatRecord, setFormInput } from "../actions";
import MainForm from "../components/mainform";

const mapStateToProps = (state, ownProps) => ({
  form_data: state.form_data
});

const mapDispatchToProps = dispatch => ({
  logFormChange: (input_name, val) =>
    dispatch(addChatRecord(input_name + ":" + val)),
  setFormInput: val => dispatch(setFormInput(val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);
