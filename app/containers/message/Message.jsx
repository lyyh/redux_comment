//留言信息
import React from 'react';
import StyleSheet from './message.less';
import ListStore from '../../stores/ListStore';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Message';
    }
    render() {

    	let items = this.props.items;		
    	let num = items.length;

		const msgList = items.map(function(listItem,i){
			return (
				<section key={i} className='msg-main'>
					<div className='msg-header'>
						<p><span className='msg-name'>{listItem.name}</span>说：</p>
					</div>
					<div className='msg-content'>
						<p className='msg-content-word'>
						{listItem.text}
						</p>
					</div>
					<div className='msg-footer'>
						<p className='msg-time'>{listItem.time}</p>
					</div>
				</section>
					)
		});

        return (
        		<section>
				<div className='msg-title'>留言(<span className='msg-num'>{num}</span>条)</div>
				<div>{msgList}</div>
			</section>
        	)
    }
}

export default Message;
