import { useSmoothScroll } from './lib/useSmoothScroll'
import { Hero } from './sections/Hero'

// Base de la landing. Cada sección vive en src/sections/ y la arma una persona del equipo.
export default function App() {
  useSmoothScroll()

  return (
    <main>
      <Hero />
    </main>
  )
}
