import { useRef } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { useReveal } from '../lib/useReveal'

const questions: {
  q: string
  text: string
  icon: IconName
  title: string
  detail: string
  status?: string
}[] = [
  { q: '¿Dónde está?', text: 'En el depósito o en qué obra, siempre ubicada.', icon: 'pin', title: 'Edificio Mitre 1450', detail: 'Rotomartillo SDS Plus' },
  { q: '¿Quién la tiene?', text: 'El custodio, con fecha y quién lo aprobó.', icon: 'user', title: 'Martín Sosa', detail: 'Desde el 31 oct 2026' },
  {
    q: '¿En qué estado está?',
    text: 'Disponible, asignada o en reparación.',
    icon: 'wrench',
    title: 'Nivel láser de línea',
    detail: 'Bosch',
    status: 'Asignada',
  },
]

export function Questions() {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  return (
    <section
      ref={root}
      aria-labelledby="preguntas-titulo"
      className="relative z-10 overflow-hidden bg-acero pb-24 text-blanco md:pb-30"
      // El panel del hero se mete en esta banda: dejamos lugar para él y un poco más
      style={{ paddingTop: 'calc(var(--show-overlap) + var(--phone-extra) + 80px)' }}
    >
      {/* Anillos naranjas del logo */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-45 -bottom-65 size-190">
        <i className="absolute inset-0 rounded-full border-2 border-naranja/10" />
        <i className="absolute inset-[110px] rounded-full border-2 border-naranja/10" />
        <i className="absolute inset-[220px] rounded-full border-2 border-naranja/16" />
        <i className="absolute inset-[310px] rounded-full bg-naranja/10" />
      </div>

      <div className="relative mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <div data-reveal className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end md:gap-10">
          <div>
            <span className="text-[13px] font-bold tracking-[0.16em] text-naranja uppercase">Lo que siempre querés saber</span>
            <h2
              id="preguntas-titulo"
              className="mt-3.5 max-w-[14ch] font-display text-[clamp(34px,5vw,50px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance"
            >
              Tres preguntas, una sola respuesta.
            </h2>
          </div>
          <p className="max-w-[34ch] text-suave">TOOLTRACK registra cada movimiento, así la respuesta está siempre a mano.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {questions.map((item) => (
            <article
              key={item.q}
              data-reveal
              className="flex flex-col rounded-3xl border border-blanco/8 bg-blanco/4 p-7 backdrop-blur-[2px] lg:p-8"
            >
              <h3 className="mb-3 font-display text-[clamp(24px,2.3vw,28px)] leading-[1.1] font-bold text-naranja">{item.q}</h3>
              <p className="mb-6 text-base text-suave">{item.text}</p>
              {/* mt-auto: las tres respuestas quedan alineadas abajo aunque el texto tenga distinto largo */}
              <div className="mt-auto flex items-center gap-3 rounded-[14px] bg-profundo px-3.5 py-3 text-sm font-semibold">
                <span className="grid size-9 flex-none place-items-center rounded-[10px] bg-naranja/16 text-naranja">
                  <Icon name={item.icon} className="size-[18px]" />
                </span>
                <span>
                  {item.title}
                  <small className="block text-[12.5px] font-medium text-suave">{item.detail}</small>
                </span>
                {item.status && (
                  <span className="ml-auto rounded-full bg-[#2FB487]/18 px-2.5 py-1 text-xs font-bold text-[#5FD6AC]">
                    {item.status}
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
