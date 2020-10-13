import React, { Component } from 'react';
import { Input, Button, List } from 'antd'
import store from './store'
import 'antd/dist/antd.css'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState();
    }
    state = {}
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input placeholder='React' style={{ width: '250px' }} />
                    <Button type='primary'>增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}




export default TodoList;