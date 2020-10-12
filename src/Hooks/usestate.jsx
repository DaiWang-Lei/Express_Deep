import React, { useState } from 'react';
export const Example = () => {
    const [count, setCount] = useState(0)

    const [age, setAge] = useState(18)
    const [sex, setSex] = useState('男')
    const [work, setWork] = useState('前端程序员')
    return (
        <div>
            <p>DaiWang 今年:{age}岁</p>
            <p>性别是：{sex}</p>
            <p>工作是:{work}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>点我</button>
        </div>
    )
}
