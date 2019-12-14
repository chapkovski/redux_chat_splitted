import { connect } from "react-redux";
import { clearHistory } from "../actions";
import ClearHistoryBtn from "../components/clearHistory";

const mapDispatchToProps = dispatch => ({
  clearHistoryTrigger: val => dispatch(clearHistory())
});

export default connect(
  null,
  mapDispatchToProps
)(ClearHistoryBtn);
