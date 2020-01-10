import { connect } from "react-redux";
import { addChatRecord, clearHistory, setFormInput } from "../actions";
import AddRecord from "../components/addRecord";

const mapDispatchToProps = dispatch => ({
  addChatRecord: val => dispatch(addChatRecord(val)),
  clearHistory: () => dispatch(clearHistory()),
  setFormInput: (input_name, val) => dispatch(setFormInput(input_name, val))
});

export default connect(
  null,
  mapDispatchToProps
)(AddRecord);
