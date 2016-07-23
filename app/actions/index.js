import * as types from '../constants/ActionTypes'

export const addMsg = (msgList) => {
	return{
		type: types.ADD_MSG,
		msgList
	}
}

export const delMsg = (msgList) => {
	return{
		type: types.DEL_MSG,
		msgList
	}
}

