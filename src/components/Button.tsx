import type { AnchorHTMLAttributes } from 'react'

type Variant = 'naranja' | 'linea' | 'oscuro'

const variants: Record<Variant, string> = {
  naranja: 'bg-naranja text-acero shadow-[0_14px_34px_rgba(255,122,0,0.32)]',
  linea: 'border-[1.5px] border-acero/20 bg-blanco/60 text-acero',
  oscuro: 'bg-acero text-blanco',
}

export function Button({
  variant = 'naranja',
  className = '',
  ...props
}: { variant?: Variant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2.5 rounded-[14px] px-7 py-4 text-base font-bold transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acero ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
