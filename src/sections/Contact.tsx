import { useRef, useState, type FormEvent } from 'react'
import { Icon } from '../components/Icon'
import { contacto, whatsappUrl } from '../config/contacto'
import { useReveal } from '../lib/useReveal'

type Estado = 'listo' | 'enviando' | 'enviado' | 'error' | 'sin-conectar'

const mensajes: Record<Exclude<Estado, 'listo' | 'enviando'>, string> = {
  enviado: '¡Gracias! Recibimos tu pedido y te escribimos a la brevedad.',
  error: 'No pudimos enviar el mensaje. Probá de nuevo en un rato o escribinos por WhatsApp.',
  'sin-conectar': 'El formulario todavía no está conectado. Muy pronto vas a poder pedir la demo desde acá.',
}

const campo =
  'mt-1.5 w-full rounded-xl border border-linea bg-gris px-4 py-3 text-base text-acero placeholder:text-texto/60 transition-colors focus:border-naranja focus:bg-blanco focus:outline-none focus:ring-4 focus:ring-naranja/15'
const etiqueta = 'block text-sm font-semibold text-acero'

export function Contact() {
  const root = useRef<HTMLElement>(null)
  const [estado, setEstado] = useState<Estado>('listo')
  useReveal(root)

  const enviar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!contacto.web3formsKey) {
      setEstado('sin-conectar')
      return
    }

    const form = e.currentTarget
    const datos = Object.fromEntries(new FormData(form))
    setEstado('enviando')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...datos,
          access_key: contacto.web3formsKey,
          subject: `Pedido de demo de TOOLTRACK: ${datos.nombre}`,
          from_name: 'Landing TOOLTRACK',
        }),
      })
      const json = (await res.json()) as { success?: boolean }
      if (!json.success) throw new Error('Web3Forms rechazó el envío')
      form.reset()
      setEstado('enviado')
    } catch {
      setEstado('error')
    }
  }

  return (
    <section id="contacto" ref={root} aria-labelledby="contacto-titulo" className="scroll-mt-4 bg-gris py-24 md:py-30">
      <div className="mx-auto w-[min(1200px,100%)] px-4 sm:px-6">
        <div
          data-reveal
          className="relative grid items-center gap-10 overflow-hidden rounded-[28px] bg-naranja p-6 shadow-[0_40px_90px_rgba(255,122,0,0.28)] sm:rounded-[36px] sm:p-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:gap-14 lg:p-16"
        >
          {/* Anillo del logo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -left-30 size-130 rounded-full border-[70px] border-blanco/10"
          />

          <div className="relative">
            <span className="text-[13px] font-bold tracking-[0.16em] text-acero uppercase">Contacto</span>
            <h2
              id="contacto-titulo"
              className="mt-3.5 mb-4 max-w-[13ch] font-display text-[clamp(36px,5.2vw,56px)] leading-[1.04] font-bold tracking-[-0.025em] text-balance text-acero"
            >
              Dejá de buscar herramientas.
            </h2>
            <p className="mb-8 max-w-[36ch] text-lg text-[#3D2410] sm:text-[19px]">
              Pedí una demo: te mostramos TOOLTRACK con datos de ejemplo y lo probás en tu celular.
            </p>

            <a
              href={whatsappUrl ?? '#'}
              {...(whatsappUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="inline-flex items-center gap-3 rounded-[14px] border-[1.5px] border-acero/25 bg-blanco/25 px-6 py-4 font-bold text-acero transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acero"
            >
              <Icon name="chat" className="size-5" />
              Escribinos por WhatsApp
            </a>
          </div>

          <form
            onSubmit={enviar}
            className="relative rounded-[22px] bg-blanco p-6 shadow-[0_30px_60px_rgba(13,27,42,0.18)] sm:p-8"
            aria-describedby="contacto-estado"
          >
            <h3 className="mb-5 font-display text-xl font-bold text-acero">Pedí una demo</h3>

            {/* Trampa para bots: los humanos no la ven */}
            <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className={etiqueta}>
                Nombre
                <input name="nombre" required autoComplete="name" className={campo} placeholder="Laura Benítez" />
              </label>
              <label className={etiqueta}>
                Empresa
                <input name="empresa" autoComplete="organization" className={campo} placeholder="Constructora Delta" />
              </label>
              <label className={`${etiqueta} sm:col-span-2`}>
                Email
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className={campo}
                  placeholder="laura@constructora.com"
                />
              </label>
              <label className={`${etiqueta} sm:col-span-2`}>
                Mensaje <span className="font-normal text-texto">(opcional)</span>
                <textarea
                  name="mensaje"
                  rows={3}
                  className={`${campo} resize-y`}
                  placeholder="Contanos cuántas obras manejan y cómo controlan hoy las herramientas."
                />
              </label>
            </div>

            <button
              type="submit"
              disabled={estado === 'enviando'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-acero px-7 py-4 text-base font-bold text-blanco transition-[transform,opacity] duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acero disabled:translate-y-0 disabled:opacity-60"
            >
              {estado === 'enviando' ? 'Enviando…' : 'Pedí una demo →'}
            </button>

            <p
              id="contacto-estado"
              role="status"
              aria-live="polite"
              className={`text-sm empty:hidden ${
                estado === 'enviado' ? 'mt-4 text-[#178A5F]' : estado === 'listo' || estado === 'enviando' ? '' : 'mt-4 text-naranja-ink'
              }`}
            >
              {estado === 'listo' || estado === 'enviando' ? '' : mensajes[estado]}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
