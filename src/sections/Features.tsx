import { useRef, type ReactNode } from 'react'
import { Icon, type IconName } from '../components/Icon'
import { useReveal } from '../lib/useReveal'
import herrImg from '../assets/app/herr.jpg'
import solicitarImg from '../assets/app/solicitar.jpg'

const tileBase = 'relative overflow-hidden rounded-[28px] p-7 lg:p-[34px]'
const tileTitle = 'mt-2 mb-2 font-display text-[clamp(24px,2.4vw,28px)] leading-[1.15] font-bold'
const kicker = 'text-[13px] font-bold tracking-[0.16em] uppercase'

const minis: { icon: IconName; title: string; text: string }[] = [
  { icon: 'clock', title: 'Historial completo', text: 'Cada alta, préstamo y devolución queda registrada.' },
  { icon: 'alert', title: 'Roturas y reparaciones', text: 'El operario reporta y vos seguís el arreglo.' },
  { icon: 'doc', title: 'Reportes en PDF y Excel', text: 'Listos para compartir con tu equipo.' },
]

// Valores tal cual la captura del cierre del Edificio Mitre 1450 (datos de ejemplo de la app)
const cierre = [
  { label: 'Recuperadas', value: 2, dot: 'bg-[#2F8F5B]' },
  { label: 'Asignadas', value: 0, dot: 'bg-[#D99A0B]' },
  { label: 'Dañadas', value: 1, dot: 'bg-[#D64545]' },
  { label: 'No encontradas', value: 0, dot: 'bg-[#D64545]' },
]

function Kicker({ className, children }: { className: string; children: ReactNode }) {
  return <span className={`${kicker} ${className}`}>{children}</span>
}

export function Features() {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  return (
    <section id="funciones" ref={root} aria-labelledby="funciones-titulo" className="bg-blanco py-24 md:py-30">
      <div className="mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <div data-reveal className="text-center">
          <Kicker className="text-naranja-ink">Funciones</Kicker>
          <h2
            id="funciones-titulo"
            className="mx-auto mt-3.5 mb-4.5 max-w-[16ch] font-display text-[clamp(34px,5vw,50px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance"
          >
            Todo el pañol en una sola plataforma
          </h2>
          <p className="mx-auto mb-12 max-w-[50ch] text-texto md:mb-15">
            Un panel para la oficina y una app para la obra, conectados en tiempo real.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12 lg:grid-rows-[330px_330px_auto]">
          {/* Inventario: captura grande */}
          <article data-reveal className={`${tileBase} flex flex-col bg-gris lg:col-span-7 lg:row-span-2`}>
            <Kicker className="text-naranja-ink">Panel del administrador</Kicker>
            <h3 className={`${tileTitle} max-w-[16ch]`}>Inventario completo y siempre al día</h3>
            <p className="max-w-[30ch] text-base text-texto">Estado, custodio, obra y ubicación de cada herramienta.</p>
            <img
              src={herrImg}
              width={1600}
              height={1000}
              loading="lazy"
              alt="Listado de herramientas con marca, categoría, estado, custodio y ubicación"
              className="-mr-24 -mb-10 mt-8 w-[calc(100%+80px)] max-w-none rounded-2xl shadow-[0_30px_70px_rgba(13,27,42,0.18),0_0_0_1px_rgba(13,27,42,0.06)] lg:mt-auto"
            />
          </article>

          {/* App del operario: tarjeta naranja con el celular */}
          <article
            data-reveal
            className={`${tileBase} min-h-[330px] bg-naranja text-acero lg:col-span-5 lg:min-h-0`}
          >
            <Kicker className="text-acero">App del operario</Kicker>
            <h3 className={`${tileTitle} max-w-[10ch]`}>Pedí desde la obra</h3>
            <p className="max-w-[17ch] text-base">Elegís la herramienta y el responsable recibe la solicitud.</p>
            <img
              src={solicitarImg}
              width={600}
              height={1290}
              loading="lazy"
              alt="Pantalla para solicitar una herramienta disponible"
              className="absolute top-24 right-5 w-36 rounded-[30px] border-8 border-acero shadow-[0_30px_60px_rgba(13,27,42,0.30)] sm:right-[30px] sm:w-44"
            />
          </article>

          {/* Cierre de obra: tarjeta oscura */}
          <article data-reveal className={`${tileBase} min-h-[330px] bg-profundo text-blanco lg:col-span-5 lg:min-h-0`}>
            <Kicker className="text-naranja">Cierre de obra</Kicker>
            <h3 className={`${tileTitle} max-w-[16ch]`}>Cerrá sin faltantes</h3>
            <p className="max-w-[34ch] text-base text-suave">Verificá cada herramienta antes de terminar.</p>
            {/* Resumen de verificación, con los datos de la captura real del cierre de obra */}
            <div
              aria-label="Resumen de verificación: 3 de 4 herramientas revisadas, 2 recuperadas, 0 permanecen asignadas, 1 dañada y 0 no encontradas"
              role="img"
              className="mt-6 rounded-2xl bg-blanco p-4 text-acero shadow-[0_30px_60px_rgba(0,0,0,0.35)] lg:absolute lg:inset-x-[34px] lg:bottom-[34px] lg:mt-0"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-display text-[15px] font-bold">Resumen de verificación</span>
                <span className="text-xs text-texto">3 de 4 revisadas</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-linea">
                <div className="h-full w-3/4 rounded-full bg-[#2F8F5B]" />
              </div>
              <dl className="mt-3 grid grid-cols-4 gap-2">
                {cierre.map((c) => (
                  <div key={c.label} className="rounded-lg border border-linea px-2 py-1.5">
                    <dt className="flex items-center gap-1 text-[10.5px] leading-tight text-texto">
                      <i className={`size-1.5 flex-none rounded-full ${c.dot}`} />
                      {c.label}
                    </dt>
                    <dd className="font-display text-lg font-bold">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>

          {/* Tres tarjetas chicas */}
          {minis.map((m) => (
            <article
              key={m.title}
              data-reveal
              className="flex items-start gap-4.5 rounded-[28px] bg-gris p-7 lg:col-span-4"
            >
              <span className="grid size-13 flex-none place-items-center rounded-2xl bg-blanco text-naranja-ink shadow-[0_8px_20px_rgba(13,27,42,0.06)]">
                <Icon name={m.icon} className="size-6" />
              </span>
              <div>
                <h3 className="mt-0.5 mb-1 font-display text-xl leading-[1.15] font-bold">{m.title}</h3>
                <p className="text-[15px] text-texto">{m.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
