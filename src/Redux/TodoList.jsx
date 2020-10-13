import React, { Component } from "react";
import { Input, Button, List } from "antd";
import store from "./store";
import "antd/dist/antd.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.changeInputValue = this.changeInputValue.bind(this);

    this.storeChange = this.storeChange.bind(this) //改变this指向
    store.subscribe(this.storeChange)   //订阅Redux的状态
  }
  state = {};
  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="React"
            style={{ width: "250px" }}
            onChange={this.changeInputValue}
          />
          <Button type="primary">增加</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
          <List
            bordered
            dataSource={this.state.list}
            renderItem={(item) => <List.Item>{item}</List.Item>}
          />
        </div>
      </div>
    );
  }

  changeInputValue(e) {
    const action = {
      type: "change_input_value",
      value: e.target.value,
    };
    store.dispatch(action);
  }
  storeChange(){
      this.setState(store.getState())
  }
}

export default TodoList;
