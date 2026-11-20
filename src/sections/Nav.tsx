import { useState } from 'react'
import { Brand } from '../components/Brand'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#app-administrador', label: 'App del administrador' },
  { href: '#app-operario', label: 'App del operario' },
  { href: '#contacto', label: 'Contacto' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav aria-label="Principal" className="relative z-30 flex items-center justify-between py-6" data-nav>
      <a href="#inicio" aria-label="TOOLTRACK, ir al inicio">
        <Brand />
      </a>

      <ul className="hidden gap-7 text-[15px] font-medium text-texto lg:flex xl:gap-9">
        {links.map((l, i) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`transition-colors hover:text-acero ${i === 0 ? 'font-semibold text-acero' : ''}`}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Button href="#" className="!px-[22px] !py-3 text-[15px] max-sm:hidden">
          Pedí una demo
        </Button>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          className="grid size-11 place-items-center rounded-xl border border-linea bg-blanco text-acero lg:hidden"
        >
          <Icon name={open ? 'close' : 'menu'} className="size-5" />
        </button>
      </div>

      {open && (
        <div
          id="menu-movil"
          className="absolute inset-x-0 top-full rounded-2xl border border-linea bg-blanco p-3 shadow-[0_20px_44px_rgba(13,27,42,0.14)] lg:hidden"
        >
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 font-medium text-acero hover:bg-gris"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href="#" className="mt-2 w-full sm:hidden">
            Pedí una demo
          </Button>
        </div>
      )}
    </nav>
  )
}
