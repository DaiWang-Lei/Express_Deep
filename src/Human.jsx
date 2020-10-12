import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import HumanItem from './HumanItem'
import Boss from './Boss'
import axios from 'axios'
import './style.css'
class Human extends Component {
    // js的构造函数，用于其他任何函数执行？

    constructor(props) {
        super(props) //调用父类的构造函数，固定写法
        this.state = {
            inputValue: 'React', //input中的值
            //----------主要 代码--------start
            list: ['吃饭', '睡觉'] //技能列表
            //----------主要 代码--------end
        }
    }
    render() {
        console.log('3-render----组件挂载中.....')

        return (
            <Fragment>
                {/* 开始 */}
                <div>
                    <label htmlFor='add'>增加技能点：</label>
                    <input
                        id='add'
                        className='input'
                        value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.addList.bind(this)}>增加技能</button>
                </div>
                <ul ref={(ul) => { this.ul = ul }}>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    // 初学者
                                    // <li
                                    //     onClick={this.deleteItem.bind(this, index)}
                                    //     key={index + item}>{item}
                                    // </li>

                                    // 组件化
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >
                                        <HumanItem
                                            key={index}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                            addList={this.addList.bind(this)}
                                        // username='代罔'
                                        />
                                    </CSSTransition>
                                )
                            })
                        }
                    </TransitionGroup>
                </ul>
                <Boss />
            </Fragment>
        )
    }


    // 生命周期函数
    componentWillMount() {
        console.log('componentWillMount----组件将要挂载到页面的时刻')
    }
    componentDidMount() {
        console.log('componentDidMount----组件挂载完成的时刻执行')
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
            .then((res) => { console.log(`axios 获取数据成功：${JSON.stringify(res)}`) })
            .catch((err) => { console.log(`axios 获取数据失败 ${err}`) })
    }
    shouldComponentUpdate() {
        console.log('1-shouldComponentUpdate----组件发生改变前执行')
        // 要求碧玺返回一个boolean
        return true //true表示，同意更新，false不同意更新
    }

    componentWillUpdate() {
        console.log('2-componentWillUpdate----组件更新前，shouldComponentUpdate函数之后执行')
    }
    componentDidUpdate() {
        console.log('4-componentDidUpdate----组件更新之后执行')
    }
    inputChange(e) {
        // console.log(e.target.value);
        //  Do not mutate state directly. Use setState()
        // this.state.inputValue=e.target.value
        this.setState({
            inputValue: this.input.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: '    '
        }, () => {
            console.log(this.ul.querySelectorAll('div').length)
        })
    }
    // 删除单项技能
    deleteItem(i) {
        let list = this.state.list
        list.splice(i, 1)
        this.setState({
            list: list
        })

        // 这样写会造成很多麻烦，React禁止直接操作state
        // this.state.list.splice(index,1)
        // this.setState({
        //     list:this.state.list
        // }) 
    }
}

export default Human