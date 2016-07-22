//Dispatcher的作用是将Action派发到Store。负责View和Store之间，建立Action的正确传递路线。
//Dispatcher是全局的。
import Fulx from 'flux';
import ListStore from '../stores/ListStore';

let Dispatcher = Fulx.Dispatcher;
let AppDispatcher = new Dispatcher();

AppDispatcher.register(function(action){
	switch(action.actionType){
		case 'ADD_NEW_MSG':
		//向store层添加数据
		ListStore.addNewMsgHandler(action.text);
		//触发事件
		ListStore.emitChange();
		break;

		default:
	}
})

module.exports = AppDispatcher;


