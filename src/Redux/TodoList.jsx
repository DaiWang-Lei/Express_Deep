import React, { Component } from "react";
import store from "./store";
import { addItemAction, changeInputAction, deleteItemAction } from "./store/actionCreators";
import ToDoListUiFun from "./TodoListUiFun";
import axios from 'axios'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeInputValue = this.changeInputValue.bind(this);
        this.btnClick = this.btnClick.bind(this)
        this.storeChange = this.storeChange.bind(this) //改变this指向
        this.deleteItem = this.deleteItem.bind(this)
        store.subscribe(this.storeChange)   //订阅Redux的状态
    }
    state = {};
    render() {
        return (
            <ToDoListUiFun
                inputValue={this.state.inputValue}
                list={this.state.list}
                changeInputValue={this.changeInputValue}
                btnClick={this.btnClick}
                deleteItem={this.deleteItem}

            />
        );
    }

    changeInputValue(e) {
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }

    btnClick() {
        const action = addItemAction()
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    storeChange() {
        this.setState(store.getState())
    }
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList')
            .then((res)=>{
                console.log(res);
            })
    }

}

export default TodoList;
