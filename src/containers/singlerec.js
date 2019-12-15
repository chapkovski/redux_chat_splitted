import { connect } from "react-redux";
import { delItem } from "../actions";
import Rec from "../components/record";



const mapDispatchToProps = dispatch => ({
  deletion: id => dispatch(delItem(id)),
});

export default connect(
  null,
  mapDispatchToProps
)(Rec);
