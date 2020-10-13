import React, { useEffect, useRef, useState } from 'react';

export const UseRef = () => {
    const inputEl = useRef(null)
    const onButtonClick = () => {
        inputEl.current.value = 'Hello,React'
        console.log(inputEl);
    }

    const [text, setText] = useState('DaiWang')
    const textRef = useRef()
    useEffect(()=>{
        textRef.current = text
        console.log('textRef.current:',textRef.current);
    })
    return (
        <>
            {/* 保存input的ref到inputEl */}
            <input type="text" ref={inputEl} />
            <button onClick={onButtonClick}>在input上展示文字</button>
            <br/>
            <br/>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
        </>
    )
}
