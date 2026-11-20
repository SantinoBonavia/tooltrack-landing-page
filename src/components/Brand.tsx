// Marca en la web: el ícono + "Tool" en naranja y "Track" en azul (Poppins 700).
export function Brand({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-3 font-display text-2xl font-bold tracking-[-0.01em] ${className}`}>
      <img src="/logo-mark.png" alt="" width={44} height={44} className="size-11 rounded-xl" />
      <span className={dark ? 'text-blanco' : 'text-acero'}>
        <span className="text-naranja">Tool</span>Track
      </span>
    </span>
  )
}
