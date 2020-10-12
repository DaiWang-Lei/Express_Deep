import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShow: true
        }
        this.toToggole = this.toToggole.bind(this)
    }
    render() {
        return (
            <>
                {/*
                    普通手写动画
                    <div className={this.state.isShow ? 'show' : 'hide'}>宇宙级英雄-琦玉老师</div>
                */}
                {/* CSSTransition动画 */}
                <CSSTransition
                    in={this.state.isShow} //用于判断是否出现的状态
                    timeout={2000} //动画持续时间
                    classNames='boss-text' //className值，防止重复
                    unmountOnExit
                >
                    <div>宇宙级英雄-琦玉老师</div>
                </CSSTransition>
                <div><button onClick={this.toToggole}>召唤打手</button></div>
            </>
        );
    }
    toToggole() {
        this.setState({
            isShow: this.state.isShow ? false : true
        })
    }
}

export default Boss;