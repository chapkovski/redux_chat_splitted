import { connect } from "react-redux";
import { addChatRecord, setFormInput } from "../actions";
import MainForm from "../components/mainform";
const addTime = () => {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  return hr + ":" + min + ":" + sec+": ";
};
const mapStateToProps = (state, ownProps) => ({
  form_data: state.form_data
});

const mapDispatchToProps = dispatch => ({
  logFormChange: (input_name, val) =>
    dispatch(addChatRecord(addTime()+input_name + ":" + val)),
  setFormInput: (input_name, val) => dispatch(setFormInput(input_name, val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);
