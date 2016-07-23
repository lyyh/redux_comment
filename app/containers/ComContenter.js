import {connect} from 'react-redux'
import {addMsg} from '../actions'
import ComContent from '../components/comment_content/ComContent'

const mapStateToProps = (state) => {
  let itemsList = JSON.parse(JSON.stringify(state.MsgList))
  
	return {
			items: itemsList
		}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMsgHandler: (msgList,msgObj) => {
      msgList.push(msgObj)	
      dispatch(addMsg(msgList))
    }
  }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ComContent)