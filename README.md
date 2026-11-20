# TOOLTRACK Landing Page

Landing page de **TOOLTRACK**, el sistema para saber dónde está cada herramienta, quién la tiene y en qué estado.
La página es animada y se arma mientras bajás: cada sección entra y encaja con el scroll.

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) con los tokens de marca en `src/index.css`
- [GSAP](https://gsap.com/) + ScrollTrigger para las animaciones atadas al scroll
- [Lenis](https://lenis.darkroom.engineering/) para el scroll suave

## Cómo correrlo

Requiere Node.js 20 o superior y pnpm.

```sh
pnpm install
pnpm dev
```

Otros comandos:

```sh
pnpm build     # compila a dist/
pnpm preview   # sirve el build
pnpm lint
```

## Estructura

```text
src/
  App.tsx                 # arma la página con las secciones
  index.css               # Tailwind y tokens de marca (colores, tipografías)
  lib/useSmoothScroll.ts  # Lenis sincronizado con ScrollTrigger
  sections/               # una sección por archivo (Hero.tsx, …)
prototipos/               # los 4 prototipos de dirección visual (HTML sueltos)
public/                   # favicon y archivos estáticos
```

## Prototipos

En `prototipos/` están las cuatro direcciones visuales que evaluamos. Se abren directo en el navegador
(por ejemplo con `pnpm dlx serve prototipos`):

1. **Vuelo 3D**: la cámara recorre el depósito, la obra y la herramienta (Three.js).
2. **Del caos al orden**: herramientas tiradas que se acomodan en el panel.
3. **La interfaz se arma**: las piezas del panel y del celular encajan en su lugar.
4. **Cinemático**: cuatro escenas de película que avanzan con el scroll.

La dirección elegida es la **opción 5** (clásica con movimiento). El plan de armado está en [`docs/PLAN.md`](docs/PLAN.md).

## Identidad

| Token | Valor |
|---|---|
| Naranja | `#FF7A00` |
| Azul oscuro | `#1B263B` |
| Azul casi negro | `#0D1B2A` |
| Gris claro | `#F1F5F9` |
| Tipografías | Poppins (títulos) e Inter (texto) |

## Cómo trabajamos

- Una sección por persona, cada una en su rama (`feat/hero`, `feat/escenas`, …).
- Cambios por Pull Request hacia `main`.
- Respetar `prefers-reduced-motion`: si el usuario lo pide, la página se ve completa sin animaciones.

## Equipo

TOOLTRACK nació como proyecto del Seminario de Analista. Esta landing la hacemos entre los tres integrantes del equipo.
