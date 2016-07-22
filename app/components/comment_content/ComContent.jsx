//留言内容
import React from 'react';
import StyleSheet from './comContent.less';
import MsgActions from '../../actions/MsgActions';
import $ from 'jquery';

class ComContent extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ComContent';
    }

    publishHandler(){
        let localTime = new Date();
        let now = localTime.getFullYear()+'/'+(localTime.getMonth() + 1)+'/'+localTime.getDate()+
                    '\t'+localTime.getHours()+':'+localTime.getMinutes();
        
        //增加留言信息
        MsgActions.addNewMsg({
            name: $('.com-name').val(),
            text: $('.com-content').val(),
            time: now
        });
    }

    render() {
    	return (
                <section>
    				<div>
    					<p>
    						<label className='text' >您的留言：(HTML标签部分可用）</label>
    					</p>
    					<textarea rows='10' cols='50' id='com-text' className='com-content'></textarea>
    				</div>
    				<div>
    					<p>
    						<label className='text'>您的大名：</label>
    					</p>
    					<input type='text' className='com-name'/>
    					<span className='hint'>《-必填</span>
    				</div>
    				<div>
    					<input type='button' className='publish' value='发表' onClick={this.publishHandler}/>
    					<span className='clickBtn'>《-点击按钮</span>
    				</div>
                </section>
    		)
    }
}

export default ComContent;
