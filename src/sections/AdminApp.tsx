import { AppShowcase, type Screen } from '../components/AppShowcase'
import adminImg from '../assets/app/admin.jpg'
import herrImg from '../assets/app/herr.jpg'
import cierreImg from '../assets/app/cierre.jpg'

const screens: Screen[] = [
  {
    icon: 'box',
    title: 'Todo de un vistazo',
    text: 'Obras activas, herramientas disponibles y asignadas, solicitudes por aprobar y los últimos movimientos.',
    img: adminImg,
    alt: 'Inicio del panel del administrador con obras activas, herramientas disponibles y asignadas, acciones pendientes y últimos movimientos',
  },
  {
    icon: 'wrench',
    title: 'Inventario con filtros',
    text: 'Cada herramienta con su marca, categoría, estado, custodio y ubicación. Buscás y filtrás en segundos.',
    img: herrImg,
    alt: 'Listado de herramientas con filtros por marca, categoría, estado y custodio',
  },
  {
    icon: 'check',
    title: 'Cierre de obra sin faltantes',
    text: 'Revisás herramienta por herramienta: recuperada, dañada o no encontrada. Sin pendientes, no se cierra.',
    img: cierreImg,
    alt: 'Cierre de obra del Edificio Mitre 1450 con el resumen de verificación y la lista de herramientas a revisar',
  },
]

export function AdminApp() {
  return (
    <AppShowcase
      id="app-administrador"
      kicker="App del administrador"
      title="El pañol entero, desde la oficina."
      lead="El panel web para quien maneja el inventario: aprobás pedidos, seguís cada herramienta y cerrás las obras con todo en orden."
      screens={screens}
      device="browser"
      tone="claro"
    />
  )
}
