import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { useReveal } from '../lib/useReveal'
import adminImg from '../assets/app/admin.jpg'
import herrImg from '../assets/app/herr.jpg'
import cierreImg from '../assets/app/cierre.jpg'

const screens: { icon: IconName; title: string; text: string; img: string; alt: string }[] = [
  {
    icon: 'box',
    title: 'Todo de un vistazo',
    text: 'Obras activas, herramientas disponibles y asignadas, pedidos por aprobar y últimos movimientos.',
    img: adminImg,
    alt: 'Inicio del panel del administrador con obras activas, herramientas disponibles y asignadas, acciones pendientes y últimos movimientos',
  },
  {
    icon: 'wrench',
    title: 'Inventario con filtros',
    text: 'Marca, categoría, estado, custodio y ubicación de cada herramienta, con búsqueda y filtros.',
    img: herrImg,
    alt: 'Listado de herramientas con filtros por marca, categoría, estado y custodio',
  },
  {
    icon: 'check',
    title: 'Cierre de obra sin faltantes',
    text: 'Revisás herramienta por herramienta: recuperada, dañada o no encontrada.',
    img: cierreImg,
    alt: 'Cierre de obra del Edificio Mitre 1450 con el resumen de verificación y la lista de herramientas a revisar',
  },
]

/**
 * Panel del administrador: tres pestañas arriba y la captura grande, a todo el ancho, abajo.
 */
export function AdminApp() {
  const root = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const uid = useId()
  useReveal(root)

  // Flechas del teclado para moverse entre pestañas (patrón de tabs accesible)
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const delta = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : e.key === 'ArrowLeft' || e.key === 'ArrowUp' ? -1 : 0
    if (!delta) return
    e.preventDefault()
    const next = (active + delta + screens.length) % screens.length
    setActive(next)
    document.getElementById(`${uid}-tab-${next}`)?.focus()
  }

  return (
    <section
      id="app-administrador"
      ref={root}
      aria-labelledby={`${uid}-titulo`}
      className="scroll-mt-4 overflow-hidden bg-gris py-24 md:py-30"
    >
      <div className="mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <div data-reveal className="mb-10 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-10">
          <div>
            <span className="text-[13px] font-bold tracking-[0.16em] text-naranja-ink uppercase">App del administrador</span>
            <h2
              id={`${uid}-titulo`}
              className="mt-3.5 max-w-[16ch] font-display text-[clamp(34px,5vw,50px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance"
            >
              El pañol entero, desde la oficina.
            </h2>
          </div>
          <p className="max-w-[40ch] text-texto">
            El panel web para quien maneja el inventario: aprobás pedidos, seguís cada herramienta y cerrás las obras con todo en orden.
          </p>
        </div>

        <div
          data-reveal
          role="tablist"
          aria-label="Pantallas del panel del administrador"
          className="mb-6 grid gap-2.5 md:mb-8 md:grid-cols-3 md:gap-4"
        >
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
                className={`flex items-start gap-4 rounded-2xl border p-4 text-left transition-[background-color,border-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-naranja md:p-5 ${
                  on
                    ? 'border-naranja/40 bg-blanco shadow-[0_12px_30px_rgba(13,27,42,0.08)]'
                    : 'border-transparent hover:bg-blanco/60'
                }`}
              >
                <span
                  className={`grid size-11 flex-none place-items-center rounded-xl transition-colors ${
                    on ? 'bg-naranja text-acero' : 'bg-blanco text-naranja-ink'
                  }`}
                >
                  <Icon name={s.icon} className="size-5" />
                </span>
                <span>
                  <span className="block font-display text-lg leading-snug font-bold">{s.title}</span>
                  <span className="mt-0.5 block text-[15px] leading-normal text-texto">{s.text}</span>
                </span>
              </button>
            )
          })}
        </div>

        {/* Ventana del navegador con la captura a todo el ancho */}
        <div
          data-reveal
          className="rounded-[14px] bg-blanco p-1.5 shadow-[0_50px_100px_rgba(13,27,42,0.22),0_0_0_1px_rgba(13,27,42,0.06)] sm:rounded-[22px] sm:p-3"
        >
          <div aria-hidden="true" className="flex gap-[7px] px-1.5 pt-1 pb-2 sm:pb-3">
            <i className="size-2 rounded-full bg-linea sm:size-2.5" />
            <i className="size-2 rounded-full bg-linea sm:size-2.5" />
            <i className="size-2 rounded-full bg-linea sm:size-2.5" />
          </div>
          <div className="relative" role="tabpanel" id={`${uid}-panel`} aria-labelledby={`${uid}-tab-${active}`}>
            {screens.map((s, i) => (
              <img
                key={s.title}
                src={s.img}
                alt={i === active ? s.alt : ''}
                aria-hidden={i !== active}
                loading="lazy"
                className={`block aspect-[1.6] w-full rounded-lg object-cover object-top transition-opacity duration-500 motion-reduce:transition-none sm:rounded-xl ${
                  i === 0 ? 'relative' : 'absolute inset-0'
                } ${i === active ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
