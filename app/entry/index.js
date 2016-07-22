import React from 'react';
import ReactDOM from 'react-dom';
import Comment from '../containers/comment/Comment';
// import Message from '../containers/message/Message';
import MessageController from '../containers/message/MessageController';
import './reset.css'; 
import './index.less';


ReactDOM.render(
	<section className='wrap'>
	<MessageController/>
	<Comment/>
	</section>,
	document.getElementById('container')
	)