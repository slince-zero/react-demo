import { useCallback, useState } from 'react'

export default function Redpoint() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const handleMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const container = e.currentTarget as HTMLElement
    const rect = container.getBoundingClientRect()

    // 获取容器的边界，确保圆点不超出容器
    const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width)
    const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height)

    setPosition({ x, y })
  }, [])
  return (
    <div
      className='relative w-[500px] h-[500px] border-2'
      onPointerMove={handleMove}>
      <div
        className='absolute w-12 h-12 rounded-full bg-red-500'
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}></div>
    </div>
  )
}
