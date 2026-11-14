import { useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      gsap.from('[data-line]', { yPercent: 110, duration: 1.1, ease: 'power4.out', stagger: 0.12 })
    },
    { scope: root },
  )

  return (
    <section ref={root} className="flex min-h-svh flex-col justify-center px-5 py-28 md:px-12">
      <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-brand uppercase">TOOLTRACK</p>
      <h1 className="font-display text-[clamp(48px,11vw,180px)] leading-[0.88] font-black tracking-tight">
        <span className="block overflow-hidden"><span data-line className="block">Cada</span></span>
        <span className="block overflow-hidden"><span data-line className="block text-brand">herramienta,</span></span>
        <span className="block overflow-hidden"><span data-line className="block">en su lugar.</span></span>
      </h1>
      <p className="mt-8 max-w-[40ch] text-lg text-mute">
        Sabé dónde está cada herramienta, quién la tiene y en qué estado.
      </p>
    </section>
  )
}
