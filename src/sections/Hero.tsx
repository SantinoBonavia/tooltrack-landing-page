import { useRef, type CSSProperties, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Nav } from './Nav'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import adminImg from '../assets/app/admin.jpg'
import homeImg from '../assets/app/home.jpg'

gsap.registerPlugin(ScrollTrigger)

/*
 * La composición está diseñada a 1120 px de ancho. Cada medida va en "unidades de diseño":
 *  --u  escala con la pantalla (panel)
 *  --pu y --cu igual que --u pero con piso (celular y notificaciones), ver index.css
 */
const u = (n: number) => `calc(${n} * var(--u))`
const pu = (n: number) => `calc(${n} * var(--pu))`
const cu = (n: number) => `calc(${n} * var(--cu))`

const heroBg: CSSProperties = {
  background: [
    'radial-gradient(42% 46% at 82% 18%, rgba(255,122,0,.20), transparent 70%)',
    'radial-gradient(36% 40% at 10% 40%, rgba(255,122,0,.10), transparent 70%)',
    'var(--color-gris)',
  ].join(','),
}

const dots: CSSProperties = {
  backgroundImage: 'radial-gradient(rgba(13,27,42,.10) 1px, transparent 1.2px)',
  backgroundSize: '26px 26px',
  maskImage: 'linear-gradient(180deg, #000 0%, transparent 70%)',
  WebkitMaskImage: 'linear-gradient(180deg, #000 0%, transparent 70%)',
}

function Chip({
  icon,
  tone,
  title,
  children,
  style,
}: {
  icon: 'check' | 'pin'
  tone: 'verde' | 'naranja'
  title: string
  children: ReactNode
  style: CSSProperties
}) {
  return (
    <div data-chip className="absolute z-10 max-md:hidden" style={style}>
      <div
        data-chip-in
        className="flex items-center bg-blanco font-semibold whitespace-nowrap shadow-[0_20px_44px_rgba(13,27,42,0.18)]"
        style={{ gap: cu(12), borderRadius: cu(16), padding: `${cu(12)} ${cu(18)} ${cu(12)} ${cu(12)}`, fontSize: cu(14) }}
      >
        <span
          className={`grid flex-none place-items-center ${tone === 'verde' ? 'bg-[#E7F7F0] text-[#178A5F]' : 'bg-[#FFF1E5] text-naranja-ink'}`}
          style={{ width: cu(40), height: cu(40), borderRadius: cu(12) }}
        >
          <Icon name={icon} style={{ width: cu(20), height: cu(20) }} />
        </span>
        <span className="leading-snug">
          {title}
          <small className="block font-medium text-texto" style={{ fontSize: cu(12.5), lineHeight: 1.35 }}>
            {children}
          </small>
        </span>
      </div>
    </div>
  )
}

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Sin preferencia de movimiento reducido: animamos. Si no, todo queda en su lugar final.
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.from('[data-nav]', { y: -20, opacity: 0, duration: 0.7 })
          .from('[data-pill]', { y: 16, opacity: 0, duration: 0.6 }, '<0.1')
          .from('[data-line]', { yPercent: 110, duration: 1, ease: 'power4.out', stagger: 0.12 }, '<0.1')
          .from('[data-fade]', { y: 20, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=0.6')
          .from('[data-screen-in]', { y: 90, opacity: 0, duration: 1.2 }, '-=0.5')
          .from('[data-phone-in]', { y: 140, opacity: 0, duration: 1.2 }, '<0.2')
          .from('[data-chip-in]', { y: 18, scale: 0.85, opacity: 0, duration: 0.6, ease: 'back.out(1.7)', stagger: 0.18 }, '-=0.4')

        // Flotación suave y continua del celular y las notificaciones
        gsap.to('[data-phone]', { y: -12, duration: 3, ease: 'sine.inOut', yoyo: true, repeat: -1 })
        gsap.utils.toArray<HTMLElement>('[data-chip]').forEach((el, i) => {
          gsap.to(el, { y: i ? 10 : -10, duration: 2.6 + i * 0.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.4 })
        })

        // Al bajar, el panel se endereza y el celular sube un poco más rápido (paralaje)
        gsap.to('[data-screen]', {
          rotationX: 0,
          ease: 'none',
          scrollTrigger: { trigger: '[data-show]', start: 'top 85%', end: 'bottom 40%', scrub: true },
        })
        gsap.to('[data-phone-wrap]', {
          y: () => -80 * (Math.min(1120, window.innerWidth) / 1120),
          ease: 'none',
          scrollTrigger: { trigger: '[data-show]', start: 'top 85%', end: 'bottom top', scrub: true, invalidateOnRefresh: true },
        })
      })

      return () => mm.revert()
    },
    { scope: root },
  )

  return (
    // flow-root: evita que el margen negativo de la composición se escape del header
    <header id="inicio" ref={root} className="relative z-20 flow-root" style={heroBg}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={dots} />

      <div className="relative mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <Nav />

        <div className="relative z-10 pt-10 text-center sm:pt-14">
          <span
            data-pill
            className="inline-flex items-center gap-2.5 rounded-full border border-linea bg-blanco py-[7px] pr-4 pl-2 text-left text-[13px] font-semibold shadow-[0_6px_20px_rgba(13,27,42,0.06)] sm:text-sm"
          >
            <b className="flex-none rounded-full bg-naranja px-[9px] py-[3px] text-xs text-acero">Nuevo</b>
            Control de herramientas para constructoras
          </span>

          <h1 className="mx-auto mt-6 mb-5 max-w-[17ch] font-display text-[clamp(40px,10vw,84px)] leading-none font-extrabold tracking-[-0.035em] text-balance">
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <span data-line className="block">
                Cada herramienta,
              </span>
            </span>
            <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
              <span data-line className="block text-naranja">
                en su lugar.
              </span>
            </span>
          </h1>

          <p data-fade className="mx-auto mb-8 max-w-[46ch] text-lg text-texto sm:text-xl">
            Controlá el pañol desde la oficina y dejá que el operario pida desde la obra. Cada préstamo,
            devolución y rotura queda registrado.
          </p>

          <div data-fade className="flex flex-col justify-center gap-3.5 sm:flex-row">
            <Button href="#">Pedí una demo →</Button>
            <Button href="#funciones" variant="linea">
              Ver funciones
            </Button>
          </div>
        </div>
      </div>

      {/* Composición: panel admin en perspectiva, celular del operario y notificaciones */}
      <div
        data-show
        className="relative z-30 mx-auto"
        style={
          {
            width: 'var(--show-w)',
            height: u(660),
            marginTop: 'clamp(48px, 7vw, 70px)',
            marginBottom: 'calc(var(--show-overlap) * -1)',
            perspective: u(2200),
          } as CSSProperties
        }
      >
        <div
          data-screen
          className="absolute top-0 left-0 origin-bottom"
          style={{ width: u(960), transform: 'rotateX(9deg)' }}
        >
          <div
            data-screen-in
            className="bg-blanco shadow-[0_60px_120px_rgba(13,27,42,0.30),0_0_0_1px_rgba(13,27,42,0.06)]"
            style={{ borderRadius: u(20), padding: u(10) }}
          >
            <div aria-hidden="true" className="flex" style={{ gap: u(7), padding: `${u(4)} ${u(6)} ${u(10)}` }}>
              {[0, 1, 2].map((i) => (
                <i key={i} className="rounded-full bg-linea" style={{ width: u(10), height: u(10) }} />
              ))}
            </div>
            <img
              src={adminImg}
              width={2000}
              height={1250}
              alt="Panel de inicio del administrador de TOOLTRACK con obras activas, herramientas disponibles y últimos movimientos"
              className="block h-auto w-full"
              style={{ borderRadius: u(12) }}
            />
          </div>
        </div>

        <div data-phone-wrap className="absolute right-0 z-[5]" style={{ top: u(120), width: pu(270) }}>
          <div data-phone>
            <div
              data-phone-in
              className="bg-acero shadow-[0_50px_90px_rgba(13,27,42,0.40)]"
              style={{ borderRadius: pu(42), padding: pu(10) }}
            >
              <img
                src={homeImg}
                width={600}
                height={1290}
                alt="Inicio de la app del operario con accesos para solicitar herramienta y reportar rotura"
                className="block h-auto w-full"
                style={{ borderRadius: pu(33) }}
              />
            </div>
          </div>
        </div>

        <Chip icon="check" tone="verde" title="Solicitud aprobada" style={{ left: u(-40), top: u(250) }}>
          Amoladora angular 115 mm
          <br />
          ahora la tiene Martín Sosa
        </Chip>
        <Chip icon="pin" tone="naranja" title="Edificio Mitre 1450" style={{ left: u(640), top: u(-34) }}>
          4 herramientas en obra
        </Chip>
      </div>
    </header>
  )
}
