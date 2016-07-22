//Message的Controller层，只负责保存状态，并将状态发给子组件
import React from 'react';
import ListStore from '../../stores/ListStore';
import Message from './Message';

class MessageController extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'MessageController';
        this.state = {
        	items: ListStore.getAll()
        }
    }
    //添加监听
    componentDidMount() {
          ListStore.addChangeListener(this._onChange.bind(this));
    }
    //删除监听
    componentWillUnmount() {
          ListStore.removeChangeListener(this._onChange.bind(this));
    }
    //数据发生改变时触发
    _onChange(){
    	this.setState({
    		items: ListStore.getAll()
    	})
    }

    render() {
        return (
        	<Message
        	items = {this.state.items}
        	/>
        )
    }
}

export default MessageController;
