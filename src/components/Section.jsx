import { useEffect, useRef, useState } from 'react'

// Fades the section in once it scrolls into view.
export default function Section({ id, title, children }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id={id} ref={ref} className={`section reveal ${visible ? 'reveal--in' : ''}`}>
      <div className="container">
        <h2 className="section__title">{title}</h2>
        {children}
      </div>
    </section>
  )
}
