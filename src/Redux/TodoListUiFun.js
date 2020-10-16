import React from 'react';
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";

const ToDoListUiFun = (props) => {
    return (
        <div style={{ margin: "10px" }}>
            <div>
                <Input
                    placeholder="React"
                    style={{ width: "250px" }}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button type="primary" onClick={props.btnClick}>增加</Button>
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => <List.Item onClick={() => { props.deleteItem(index) }}>{item}</List.Item>}
                />
            </div>
        </div>
    )
}


export default ToDoListUiFun