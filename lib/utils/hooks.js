import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { sizes } from './layout'
import ResizeObserver from 'resize-observer-polyfill'

export const useMeasure = () => {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect))
  )
  React.useEffect(() => {
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [ro])
  return [{ ref }, bounds]
}

export const useViewPort = () => {
  const [width, setWidth] = useState(sizes.desktop)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize, { passive: true })
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { width }
}

export const useLayoutBreakpoint = () => {
  const { width } = useViewPort()

  let key = 'screen'
  Object.keys(sizes)
    .reverse()
    .forEach((size) => {
      if (width <= sizes[size]) {
        key = size
      }
    })

  return key
}
