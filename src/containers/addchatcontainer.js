import { connect } from "react-redux";
import { addChatRecord } from "../actions";
import AddRecord from "../components/addRecord";

const mapDispatchToProps = dispatch => ({
  clickHandler: val => dispatch(addChatRecord(val))
});

export default connect(
  null,
  mapDispatchToProps
)(AddRecord);
