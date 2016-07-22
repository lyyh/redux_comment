//每一个action都是一个对象，包含一个actionType属性（说明动作的类型）和一些其他属性（用来传递一些数据）

import AppDispatcher from '../dispatcher/AppDispatcher'

let MsgActions = {

  addNewMsg(obj){
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_MSG',
      text: obj
    });
  },

};

module.exports = MsgActions;