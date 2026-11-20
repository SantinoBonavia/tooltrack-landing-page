import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Icon, type IconName } from './Icon'
import { useReveal } from '../lib/useReveal'

export type Screen = {
  icon: IconName
  title: string
  text: string
  img: string
  alt: string
}

type Props = {
  id: string
  kicker: string
  title: string
  lead: string
  screens: Screen[]
  /** browser: captura de escritorio en una ventana. phone: captura en un celular. */
  device: 'browser' | 'phone'
  tone: 'claro' | 'oscuro'
  /** Pone la pantalla a la izquierda y el texto a la derecha */
  reverse?: boolean
}

/**
 * Sección de una app: a un lado, las funciones (cada una es una pestaña); al otro, la pantalla
 * de la función elegida. Las capturas se apilan y se cruzan con un fundido.
 */
export function AppShowcase({ id, kicker, title, lead, screens, device, tone, reverse = false }: Props) {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const uid = useId()
  useReveal(root)

  const dark = tone === 'oscuro'
  const textCol = reverse ? 'lg:col-start-2' : 'lg:col-start-1'
  const deviceCol = reverse ? 'lg:col-start-1' : 'lg:col-start-2'

  // Flechas del teclado para moverse entre pestañas (patrón de tabs accesible)
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const delta = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + screens.length) % screens.length
    setActive(next)
    document.getElementById(`${uid}-tab-${next}`)?.focus()
  }

  const stack = (
    <div className="relative" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`}>
      {screens.map((s, i) => (
        <img
          key={s.title}
          src={s.img}
          alt={i === active ? s.alt : ''}
          aria-hidden={i !== active}
          loading="lazy"
          className={`block w-full object-cover object-top transition-opacity duration-500 motion-reduce:transition-none ${
            device === 'browser' ? 'aspect-[1.6] rounded-xl' : 'aspect-[600/1290] rounded-[33px]'
          } ${i === 0 ? 'relative' : 'absolute inset-0'} ${i === active ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  )

  return (
    <section
      id={id}
      ref={root}
      aria-labelledby={`${uid}-titulo`}
      className={`scroll-mt-4 overflow-hidden py-24 md:py-30 ${dark ? 'bg-profundo text-blanco' : 'bg-gris text-acero'}`}
    >
      <div
        className={`mx-auto grid w-[min(1200px,100%)] gap-y-10 px-4 sm:px-6 lg:grid-rows-[auto_auto] lg:gap-x-16 lg:gap-y-8 ${
          device === 'browser' ? 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]' : 'lg:grid-cols-2'
        }`}
      >
        {/* En celular el orden es: título, pantalla y pestañas (así se ve el cambio al tocar una) */}
        <div data-reveal className={`${textCol} lg:row-start-1 lg:self-end`}>
          <span className={`text-[13px] font-bold tracking-[0.16em] uppercase ${dark ? 'text-naranja' : 'text-naranja-ink'}`}>
            {kicker}
          </span>
          <h2
            id={`${uid}-titulo`}
            className="mt-3.5 mb-4 max-w-[16ch] font-display text-[clamp(34px,5vw,50px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance"
          >
            {title}
          </h2>
          <p className={`max-w-[44ch] ${dark ? 'text-suave' : 'text-texto'}`}>{lead}</p>
        </div>

        <div data-reveal className={`${textCol} max-lg:order-last lg:row-start-2 lg:self-start`}>
          <div role="tablist" aria-label={`Pantallas de ${kicker.toLowerCase()}`} aria-orientation="vertical" className="flex flex-col gap-2.5">
            {screens.map((s, i) => {
              const on = i === active
              return (
                <button
                  key={s.title}
                  id={`${uid}-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls={`${uid}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={onKey}
                  className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja ${
                    on
                      ? dark
                        ? 'border-naranja/50 bg-blanco/8'
                        : 'border-naranja/40 bg-blanco shadow-[0_12px_30px_rgba(13,27,42,0.08)]'
                      : dark
                        ? 'border-transparent hover:bg-blanco/4'
                        : 'border-transparent hover:bg-blanco/60'
                  }`}
                >
                  <span
                    className={`grid size-11 flex-none place-items-center rounded-xl transition-colors ${
                      on ? 'bg-naranja text-acero' : dark ? 'bg-blanco/8 text-naranja' : 'bg-blanco text-naranja-ink'
                    }`}
                  >
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block font-display text-lg leading-snug font-bold">{s.title}</span>
                    <span className={`mt-0.5 block text-[15px] leading-normal ${dark ? 'text-suave' : 'text-texto'}`}>{s.text}</span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div data-reveal className={`${deviceCol} lg:row-span-2 lg:row-start-1 lg:self-center`}>
          {device === 'browser' ? (
            <div className="rounded-[20px] bg-blanco p-2.5 shadow-[0_40px_90px_rgba(13,27,42,0.22),0_0_0_1px_rgba(13,27,42,0.06)]">
              <div aria-hidden="true" className="flex gap-[7px] px-1.5 pt-1 pb-2.5">
                <i className="size-2.5 rounded-full bg-linea" />
                <i className="size-2.5 rounded-full bg-linea" />
                <i className="size-2.5 rounded-full bg-linea" />
              </div>
              {stack}
            </div>
          ) : (
            <div className="relative mx-auto w-[min(300px,78%)]">
              {/* Anillos del logo detrás del celular */}
              <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 aspect-square w-[190%] -translate-1/2">
                <i className="absolute inset-0 rounded-full border-2 border-naranja/10" />
                <i className="absolute inset-[18%] rounded-full border-2 border-naranja/14" />
                <i className="absolute inset-[34%] rounded-full bg-naranja/8" />
              </div>
              <div className="relative rounded-[42px] bg-acero p-2.5 shadow-[0_50px_90px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)]">
                {stack}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
