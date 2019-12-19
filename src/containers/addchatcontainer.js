import { connect } from "react-redux";
import { addChatRecord, clearHistory, setEmail } from "../actions";
import AddRecord from "../components/addRecord";

const mapDispatchToProps = dispatch => ({
  addChatRecord: val => dispatch(addChatRecord(val)),
  clearHistory: () => dispatch(clearHistory()),
  setEmail: val => dispatch(setEmail(val))
});

export default connect(
  null,
  mapDispatchToProps
)(AddRecord);
