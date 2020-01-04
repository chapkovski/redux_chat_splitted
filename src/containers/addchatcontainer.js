import { connect } from "react-redux";
import { addChatRecord, clearHistory, setFormInput } from "../actions";
import AddRecord from "../components/addRecord";
const addTime = () => {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  return hr + ":" + min + ":" + sec+": ";
};
const mapDispatchToProps = dispatch => ({
  addChatRecord: val => dispatch(addChatRecord(addTime()+val)),
  clearHistory: () => dispatch(clearHistory()),
  setFormInput: (input_name, val) => dispatch(setFormInput(input_name, val))
});

export default connect(
  null,
  mapDispatchToProps
)(AddRecord);
