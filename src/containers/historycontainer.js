import { connect } from 'react-redux'
import { addChatRecord } from '../actions'
import ChatHistory from '../components/chathistory'

const mapStateToProps = (state, ownProps) => ({
  history: state.history
})


export default connect(
  mapStateToProps,
  null
)(ChatHistory)