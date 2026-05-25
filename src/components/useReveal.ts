import { useEffect } from 'react'

export function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, i * 60)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    reveals.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}
