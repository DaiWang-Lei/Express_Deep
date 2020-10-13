import React, { useMemo } from 'react';
function ChildComponent({ name, children }) {
    const changeLibai = (name) => {
        console.log('看这里，看这里，李白来了');
        return `${name},李白来喝酒了`
    }
    // useMemo 性能优化
    // 给useMemo传递第二个参数,参数匹配成功,才会执行前面的函数
    const actionLibai = useMemo(() => changeLibai(name), [name])
    return (
        <>
            <div>{actionLibai}</div>
            <div>{children}</div>
        </>
    )
}
export default ChildComponent