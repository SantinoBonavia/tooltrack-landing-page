import { useSmoothScroll } from './lib/useSmoothScroll'
import { Hero } from './sections/Hero'
import { Questions } from './sections/Questions'
import { VideoSection } from './sections/VideoSection'
import { AdminApp } from './sections/AdminApp'
import { OperarioApp } from './sections/OperarioApp'
import { Contact } from './sections/Contact'

// Cada sección vive en su archivo de src/sections/, en el orden de docs/PLAN.md.
export default function App() {
  useSmoothScroll()

  return (
    <div className="overflow-x-clip">
      <Hero />
      <main>
        <Questions />
        <VideoSection />
        <AdminApp />
        <OperarioApp />
        <Contact />
      </main>
    </div>
  )
}
