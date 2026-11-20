import { AppShowcase, type Screen } from '../components/AppShowcase'
import homeImg from '../assets/app/home.jpg'
import solicitarImg from '../assets/app/solicitar.jpg'
import misImg from '../assets/app/mis.jpg'

const screens: Screen[] = [
  {
    icon: 'phone',
    title: 'Todo a un toque',
    text: 'Desde el inicio, el operario solicita una herramienta, reporta una rotura o mira sus solicitudes.',
    img: homeImg,
    alt: 'Inicio de la app del operario con accesos para solicitar herramienta, reportar rotura y ver solicitudes',
  },
  {
    icon: 'box',
    title: 'Pedí desde la obra',
    text: 'Elegís una herramienta disponible y el responsable recibe la solicitud para aprobarla.',
    img: solicitarImg,
    alt: 'Pantalla para solicitar una herramienta disponible desde la app del operario',
  },
  {
    icon: 'wrench',
    title: 'Lo que tenés a cargo',
    text: 'Tus herramientas y kits en custodia, con la fecha de asignación, y la devolución al depósito con un toque.',
    img: misImg,
    alt: 'Mis herramientas: tres herramientas en custodia con el botón para devolverlas al depósito',
  },
]

export function OperarioApp() {
  return (
    <AppShowcase
      id="app-operario"
      kicker="App del operario"
      title="Pedí, usá y devolvé desde el celular."
      lead="La app para el operario en la obra: sin llamados ni planillas, cada pedido y cada devolución quedan registrados."
      screens={screens}
      device="phone"
      tone="oscuro"
      reverse
    />
  )
}
