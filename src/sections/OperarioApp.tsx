import { useRef } from 'react'
import { useReveal } from '../lib/useReveal'
import homeImg from '../assets/app/home.jpg'
import solicitarImg from '../assets/app/solicitar.jpg'
import misImg from '../assets/app/mis.jpg'

const screens = [
  {
    step: '01',
    title: 'Todo a un toque',
    text: 'Desde el inicio solicita una herramienta, reporta una rotura o mira sus solicitudes.',
    img: homeImg,
    alt: 'Inicio de la app del operario con accesos para solicitar herramienta, reportar rotura y ver solicitudes',
  },
  {
    step: '02',
    title: 'Pide desde la obra',
    text: 'Elige una herramienta disponible y el responsable recibe la solicitud para aprobarla.',
    img: solicitarImg,
    alt: 'Pantalla para solicitar una herramienta disponible desde la app del operario',
  },
  {
    step: '03',
    title: 'Sabe qué tiene a cargo',
    text: 'Ve sus herramientas en custodia y las devuelve al depósito con un toque.',
    img: misImg,
    alt: 'Mis herramientas: tres herramientas en custodia con el botón para devolverlas al depósito',
  },
]

/**
 * App del operario: las tres pantallas a la vista, una al lado de la otra.
 * En celular se deslizan de costado.
 */
export function OperarioApp() {
  const root = useRef<HTMLElement>(null)
  useReveal(root)

  return (
    <section
      id="app-operario"
      ref={root}
      aria-labelledby="operario-titulo"
      className="relative scroll-mt-4 overflow-hidden bg-profundo py-24 text-blanco md:py-30"
    >
      {/* Anillos naranjas del logo */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-60 -left-60 size-180">
        <i className="absolute inset-0 rounded-full border-2 border-naranja/10" />
        <i className="absolute inset-[120px] rounded-full border-2 border-naranja/14" />
        <i className="absolute inset-[260px] rounded-full bg-naranja/8" />
      </div>

      <div className="relative mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <div data-reveal className="mb-12 flex flex-col justify-between gap-5 md:mb-16 md:flex-row md:items-end md:gap-10">
          <div>
            <span className="text-[13px] font-bold tracking-[0.16em] text-naranja uppercase">App del operario</span>
            <h2
              id="operario-titulo"
              className="mt-3.5 max-w-[16ch] font-display text-[clamp(34px,5vw,50px)] leading-[1.06] font-bold tracking-[-0.025em] text-balance"
            >
              Pedí, usá y devolvé desde el celular.
            </h2>
          </div>
          <p className="max-w-[40ch] text-suave">
            La app para el operario en la obra: sin llamados ni planillas, cada pedido y cada devolución quedan registrados.
          </p>
        </div>

        <ol className="-mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:gap-12">
          {screens.map((s) => (
            <li key={s.step} data-reveal className="w-[72%] flex-none snap-center sm:w-[46%] md:w-auto">
              <div className="mx-auto max-w-[330px] rounded-[40px] bg-acero p-2.5 shadow-[0_40px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)]">
                <img
                  src={s.img}
                  width={600}
                  height={1290}
                  loading="lazy"
                  alt={s.alt}
                  className="block h-auto w-full rounded-[31px]"
                />
              </div>
              <div className="mx-auto mt-7 max-w-[330px]">
                <span className="font-display text-sm font-bold tracking-[0.1em] text-naranja">{s.step}</span>
                <h3 className="mt-1 mb-1.5 font-display text-[22px] leading-tight font-bold">{s.title}</h3>
                <p className="text-[15px] leading-normal text-suave">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
