import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import default from 'd'
// import Human from './Human';
class HumanItem extends Component {
    state = {}
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.addList = this.addList.bind(this)
    }
    render() {
        return (
            <>
                <div onClick={this.handleClick}>
                    {this.props.username} 学会了- {this.props.content}
                </div>
                {/* <button onClick={this.addList}>添加小技能</button> */}
            </>
        );
    }
    handleClick() {
        const i = this.props.index
        this.props.deleteItem(i)
        // this.props.list= []
    }
    addList() {
        this.props.addList()
    }
    // 生命周期函数
    componentWillReceiveProps() {
        // 子组件接收到父组件传递过来的参数，父组件render函数重新被执行，这个生命周期就会被执行。
        console.log('child - componentWillReceiveProps')
    }
    componentWillUnmount() {
        console.log('child - componentWillUnmount')
    }
    // nextProps：变化后的属性
    // nextState：变化后的状态
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.content !== this.props.content) {
            return true
        } else {
            return false
        }
    }
}

// 类型校验
HumanItem.propTypes = {
    content: PropTypes.string,
    deleteItem: PropTypes.func,
    addList: PropTypes.func,
    index: PropTypes.number,
    username: PropTypes.string.isRequired
}

// 默认值
HumanItem.defaultProps = {
    username: 'Robuta'
}

export default HumanItem;