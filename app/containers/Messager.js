import {connect} from 'react-redux'
import {delMsg} from '../actions'
import Message from '../components/message/Message'

const mapStateToProps = (state) => {
	let itemsList = JSON.parse(JSON.stringify(state.MsgList))
	return {
			items: itemsList
		}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		delMsgHandler:(index,msgList) => {
			msgList.splice(index,1)
			dispatch(delMsg(msgList))
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Message)