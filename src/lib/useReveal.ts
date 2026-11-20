import type { RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

/**
 * Los elementos con [data-reveal] dentro de `scope` suben y aparecen al entrar en pantalla,
 * de a uno cuando entran juntos. Con prefers-reduced-motion no se anima nada: quedan visibles.
 */
export function useReveal(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-reveal]')
        gsap.set(items, { y: 48, opacity: 0 })
        ScrollTrigger.batch(items, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12, overwrite: true }),
        })
      })
      return () => mm.revert()
    },
    { scope },
  )
}
