import { useSmoothScroll } from './lib/useSmoothScroll'
import { Hero } from './sections/Hero'
import { Questions } from './sections/Questions'
import { Features } from './sections/Features'

// Cada sección vive en su archivo de src/sections/, en el orden de docs/PLAN.md.
export default function App() {
  useSmoothScroll()

  return (
    <div className="overflow-x-clip">
      <Hero />
      <main>
        <Questions />
        <Features />
      </main>
    </div>
  )
}
