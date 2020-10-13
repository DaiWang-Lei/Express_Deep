import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

const data = [
    '第一周,重新学习React',
    '第二周,重新学习Vue',
    '第三周,重新学习Node'
]
class TodoList extends Component {
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
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>
            </div>
        );
    }
}




export default TodoList;