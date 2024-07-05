import { useRef, useCallback, useEffect } from 'react'

function useClickOuside(cb) {
    const sectionRef = useRef(null)
    const clickOuside = useCallback((e) => {
        if(sectionRef?.current && !sectionRef?.current.contains(e.target)){
            cb()
        }
    },[cb])
    const handleKeyPress = useCallback((e) => {
        if(e.key === 'Escape'){
            cb()
        }
    },[cb])
    useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('mousedown', clickOuside)
    return () => {
        window.removeEventListener('keydown', handleKeyPress)
        window.removeEventListener('mousedown', clickOuside)
    }
    },[])
  return {sectionRef, clickOuside}
}

export default useClickOuside