//留言信息
import React from 'react'
import StyleSheet from './message.less'

const Message = ({items,delMsgHandler}) => {
		const msgList = items.map(function(listItem,i){
			return (
				<section key={i} className='msg-main'>
					<div className='msg-header'>
						<p>
							<span className='msg-name'>{listItem.name}</span>说：
							<a className='msg-delete' value={listItem.id} onClick={
								e => {
									 let index = e.target.getAttribute('value')
									 e.preventDefault()
									 delMsgHandler(index,items)
								}}>删除该评论</a>
						</p>
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
		})

        return (
        		<section>
				<div className='msg-title'>留言(<span className='msg-num'>{items.length}</span>条)</div>
				<div>{msgList}</div>
			</section>
        	)
}

export default Message
