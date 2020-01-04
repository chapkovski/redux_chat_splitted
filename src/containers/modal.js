import { connect } from "react-redux";
import { changeModalVisibility, loadFromStorage } from "../actions";
import Modal from "../components/startingModal";

const mapStateToProps = (state, ownProps) => ({
  open: state.modal_status
});

const mapDispatchToProps = dispatch => ({
  setOpen: open => dispatch(changeModalVisibility(open)),
  loadFromStorage: () => dispatch(loadFromStorage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
