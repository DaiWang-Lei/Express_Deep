import React, { useState } from 'react';
import ChildComponent from './ChildComponent'

const UseMemo = () => {
    const [libai, setLibai] = useState('李白劝酒状态')
    const [dufu, setDufu] = useState('杜甫捡草状态')
    return (
        <>
            <button onClick={() => { setLibai(new Date().getTime()) }}>李白</button>
            <button onClick={() => { setDufu(new Date().getTime() + '杜甫开始作诗') }}>杜甫</button>
            <ChildComponent name={libai}>{dufu}</ChildComponent>
        </>
    )
}
export default UseMemo