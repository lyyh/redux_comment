//保存应用的状态，类似于MVC架构中的Model
import events from 'events';
import assign from 'object-assign';

let EventEmitter = events.EventEmitter;
let ListStore = assign({},EventEmitter.prototype,{
	//初始化
	items: [{
		name: '作者',
		text: '欢迎大家给我留言',
		time: '2016/7/22'
	}],

	getAll(){
		return this.items;
	},

	addNewMsgHandler(obj){
		this.items.push(obj);
	},

	delMsgHandler(obj){
		this.items.pop(obj);
	},

	//触发事件
	emitChange(){
		this.emit('change');
	},

	//监听数据改变
	addChangeListener(callback){
		this.on('change',callback)
	},

	//删除监听
	removeChangeListener(callback){
		this.remove('change',callback);
	}
})

module.exports = ListStore;