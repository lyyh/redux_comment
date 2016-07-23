import * as types from '../constants/ActionTypes'
const initialState = [{
	id: 0,
	name: '作者',
	text: '欢迎给我留言',
	time: '2016/7/7'
}]
const msgListState = (state = initialState,action) => {
	switch(action.type){
		case 'ADD_MSG':
		return action.msgList
		case 'DEL_MSG':
		return action.msgList
		default:
		return state
	}
}

export default msgListState

