// Reducer 必须是纯函数
import { ADD_ITEM, CHANGE_INPUT_VALUE, DELETE_ITEM } from "./actionTypes";

//默认数据
const defaultState = {
  inputValue: "React SomeThing",
  list: ["第一周，深入理解React", "第二周，深入理解Redux"],
};

// state：整个项目中需要管理的数据信息，这里没有数据，所以用空对象表示
export default (state = defaultState, action) => {
  //方法函数
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      {
        let newState = JSON.parse(JSON.stringify(state)); //深度拷贝
        newState.inputValue = action.value;
        return newState;
      }
    case ADD_ITEM:
      {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
      }
    case DELETE_ITEM:{
      let newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index,1)
      return newState
    }
    default:
      return state;
  }
};
