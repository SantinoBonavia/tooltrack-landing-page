import { useRef, useState } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { useReveal } from '../lib/useReveal'

// Lo que no se ve en las secciones de cada app, como complemento del video
const extras: { icon: IconName; title: string; text: string }[] = [
  { icon: 'clock', title: 'Historial completo', text: 'Cada alta, préstamo y devolución queda registrada.' },
  { icon: 'alert', title: 'Roturas y reparaciones', text: 'El operario reporta y vos seguís el arreglo.' },
  { icon: 'doc', title: 'Reportes en PDF y Excel', text: 'Listos para compartir con tu equipo.' },
]

export function VideoSection() {
  const root = useRef<HTMLElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  useReveal(root)

  const play = () => {
    setStarted(true)
    video.current?.play()
  }

  return (
    <section id="como-funciona" ref={root} aria-labelledby="video-titulo" className="scroll-mt-4 bg-blanco py-24 md:py-30">
      <div className="mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <div data-reveal className="text-center">
          <span className="text-[13px] font-bold tracking-[0.16em] text-naranja-ink uppercase">Cómo funciona</span>
          <h2
            id="video-titulo"
            className="mx-auto mt-3.5 mb-4.5 max-w-[18ch] font-display text-[clamp(34px,5vw,50px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance"
          >
            TOOLTRACK en un minuto
          </h2>
          <p className="mx-auto mb-12 max-w-[52ch] text-texto md:mb-14">
            Del Excel y los mensajes sueltos a un solo lugar: así se usa en la oficina y en la obra.
          </p>
        </div>

        <div
          data-reveal
          className="relative mx-auto aspect-video max-w-[1040px] overflow-hidden rounded-[20px] bg-acero shadow-[0_50px_100px_rgba(13,27,42,0.25),0_0_0_1px_rgba(13,27,42,0.08)] sm:rounded-[28px]"
        >
          <video
            ref={video}
            src="/video/tooltrack.mp4"
            poster="/video/tooltrack-poster.jpg"
            preload="none"
            playsInline
            controls={started}
            onPlay={() => setStarted(true)}
            className="block size-full object-cover"
            aria-label="Video de presentación de TOOLTRACK, 58 segundos, con subtítulos incrustados"
          />
          {!started && (
            <button
              type="button"
              onClick={play}
              className="group absolute inset-0 flex items-end bg-gradient-to-t from-acero via-acero/95 via-20% to-transparent to-50% p-4 text-left focus-visible:outline-none sm:p-8"
            >
              <span className="flex items-center gap-3 sm:gap-4">
                <span
                  aria-hidden="true"
                  className="grid size-12 flex-none place-items-center rounded-full bg-naranja text-acero shadow-[0_16px_40px_rgba(255,122,0,0.45)] ring-6 ring-naranja/25 transition-transform duration-300 group-hover:scale-110 group-focus-visible:outline-3 group-focus-visible:outline-offset-4 group-focus-visible:outline-blanco sm:size-18"
                >
                  <Icon name="play" className="ml-0.5 size-5 sm:size-7" />
                </span>
                <span className="text-blanco">
                  <span className="block font-display text-base leading-tight font-bold sm:text-xl">Mirá el video</span>
                  <span className="block text-xs text-suave sm:text-sm">58 segundos · con subtítulos</span>
                </span>
              </span>
            </button>
          )}
        </div>

        <div className="mx-auto mt-12 grid max-w-[1040px] gap-5 md:mt-16 md:grid-cols-3">
          {extras.map((m) => (
            <article key={m.title} data-reveal className="flex items-start gap-4.5 rounded-[24px] bg-gris p-6">
              <span className="grid size-12 flex-none place-items-center rounded-2xl bg-blanco text-naranja-ink shadow-[0_8px_20px_rgba(13,27,42,0.06)]">
                <Icon name={m.icon} className="size-6" />
              </span>
              <div>
                <h3 className="mt-0.5 mb-1 font-display text-lg leading-[1.15] font-bold">{m.title}</h3>
                <p className="text-[15px] leading-normal text-texto">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
