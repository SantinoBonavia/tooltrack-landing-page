import type { SVGProps } from 'react'

// Íconos de la maqueta (24×24). Heredan el color con currentColor.
const paths = {
  check: (
    <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  ),
  pin: (
    <>
      <path d="M12 2.5c-4.1 0-7.5 3.3-7.5 7.4 0 5.6 7.5 11.6 7.5 11.6s7.5-6 7.5-11.6c0-4.1-3.4-7.4-7.5-7.4z" fill="currentColor" />
      <circle cx="12" cy="10" r="3" fill="#0D1B2A" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="currentColor" />
    </>
  ),
  wrench: (
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.1L3.5 17.2a1.8 1.8 0 0 0 2.5 2.5l5.8-5.8a4 4 0 0 0 5.1-5.4l-2.5 2.5-2.2-.4-.4-2.2z" fill="currentColor" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M12 7.5V12l3 2" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  alert: (
    <>
      <path d="M12 3.5l9 16H3z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M12 10v4M12 17v.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  doc: (
    <>
      <path d="M7 3h7l4 4v14H7z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M10 12h5M10 16h5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  box: (
    <>
      <path d="M3.5 7.5L12 3l8.5 4.5v9L12 21l-8.5-4.5z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M3.5 7.5L12 12l8.5-4.5M12 12v9" fill="none" stroke="currentColor" strokeWidth="2.2" />
    </>
  ),
  phone: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
  close: <path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />,
} as const

export type IconName = keyof typeof paths

export function Icon({ name, ...props }: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" {...props}>
      {paths[name]}
    </svg>
  )
}
