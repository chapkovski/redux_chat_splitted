import { connect } from "react-redux";
import { addChatRecord,clearHistory } from "../actions";
import AddRecord from "../components/addRecord";

const mapDispatchToProps = dispatch => ({
  addChatRecord: val => dispatch(addChatRecord(val)),
  clearHistory: ()=> dispatch(clearHistory())
});

export default connect(
  null,
  mapDispatchToProps
)(AddRecord);
