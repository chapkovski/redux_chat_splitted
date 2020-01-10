import { connect } from "react-redux";
import { addChatRecord, setFormInput } from "../actions";
import MainForm from "../components/mainform";
import moment from "moment";
const mapStateToProps = (state, ownProps) => ({
  form_data: state.form_data
});

const mapDispatchToProps = dispatch => ({
  logFormChange: (input_name, val) => {
    const m = moment().format("HH:mm:ss");

    const message = {
      input_type: "message",
      source: "user",
      text: input_name+":"+val,
      timestamp: m
    };
    return dispatch(addChatRecord(message));
  },
  setFormInput: (input_name, val) => dispatch(setFormInput(input_name, val))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainForm);
