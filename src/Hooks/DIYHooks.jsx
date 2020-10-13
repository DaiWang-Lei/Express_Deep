import React, { useCallback, useEffect, useState } from 'react';


const useWinSize = () => {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })

    // useCallback 是为了缓存方法, tips:useMemo是为了缓存变量
    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])
    return size
}

export const DIYHook = () => {
    const size = useWinSize()
    return (
        <div>页面Size:{size.width}x{size.height}</div>
    )
}