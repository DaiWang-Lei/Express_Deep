//默认数据
const defaultState = {
  inputValue: "React ahhhhh",
  list: ["第一周，深入理解React", "第二周，深入理解Redux"],
};

// state：整个项目中需要管理的数据信息，这里没有数据，所以用空对象表示
export default (state = defaultState, action) => {
  //方法函数
  switch (action.type) {
    case "change_input_value":
      let newState = JSON.parse(JSON.stringify(state));
      newState.inputValue = action.value;
      return newState;
    default:
      return state;
  }
};
