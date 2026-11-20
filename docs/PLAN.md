# Plan de armado de la landing

Diseño elegido como base: **opción 5** (landing clásica con movimiento).

- Imagen de referencia: [`diseno-landing.jpg`](./diseno-landing.jpg)
- Maqueta HTML estática: [`maqueta/index.html`](./maqueta/index.html), abrirla en el navegador.

La maqueta es la guía visual, no el código final: la landing se arma en React dentro de `src/`.

## Identidad

- Logo oficial: `public/logo-mark.png` (pin con llave y grúa) y `public/logo.png` (con el texto).
- En la web, la marca va como el ícono + "Tool" en naranja y "Track" en azul (Poppins 700).
- Paleta de Branding, sin colores extra: Azul Acero `#0D1B2A`, Azul Profundo `#1B263B`, Naranja `#FF7A00`, Gris Claro `#F1F5F9`, Blanco `#FFFFFF`.
- Para texto naranja sobre fondo claro usar `#A84E00`, que tiene buen contraste.
- Tipografías: Poppins (títulos) e Inter (texto).

## Imágenes

Capturas reales de la app con datos de ejemplo en `src/assets/app/`:

| Archivo | Pantalla |
|---|---|
| `admin.jpg` | Inicio del panel admin |
| `herr.jpg` | Listado de herramientas |
| `cierre.jpg` | Cierre de obra |
| `home.jpg` | Inicio de la app del operario |
| `solicitar.jpg` | Solicitar herramienta (operario) |
| `mis.jpg` | Mis herramientas (operario) |

## Secciones (en orden)

Cada una va en su propio archivo dentro de `src/sections/`.

1. **Nav**: logo, links (Inicio, Funciones, Cómo funciona, App del operario, Contacto) y botón "Pedí una demo".
2. **Hero**: fondo gris claro con brillos naranjas y grilla de puntos. Pill "Control de herramientas para constructoras", título "Cada herramienta, / en su lugar." (la segunda línea en naranja), bajada, dos botones. Abajo, el panel admin en perspectiva, el celular del operario y dos notificaciones flotantes ("Solicitud aprobada" y "Edificio Mitre 1450").
3. **Tres preguntas** (fondo Azul Acero): ¿Dónde está?, ¿Quién la tiene?, ¿En qué estado está?, cada una con un ejemplo de la app. Anillos naranjas del logo de fondo.
4. **Funciones** (fondo blanco, grilla bento): inventario (captura grande), app del operario (tarjeta naranja con el celular), cierre de obra (tarjeta oscura) y tres tarjetas chicas: historial, roturas y reparaciones, reportes PDF/Excel.
5. **Cómo funciona** (fondo Azul Profundo): 3 pasos unidos por una línea punteada naranja.
6. **CTA** (tarjeta naranja): "Dejá de buscar herramientas.", botones "Pedí una demo" y "Escribinos", con el celular asomando.
7. **Footer**: logo, links y "Cada herramienta, en su lugar. © 2026".

## Movimiento (GSAP + Lenis)

- Hero: el título se revela por líneas; el panel y el celular entran flotando; las notificaciones aparecen después.
- Tres preguntas y funciones: las tarjetas suben y aparecen al entrar en pantalla.
- Cómo funciona: la línea punteada se dibuja y los pasos aparecen en orden.
- Respetar `prefers-reduced-motion`: sin animaciones, la página se ve completa.

## Pendientes conocidos de la maqueta

- El celular de la tarjeta final (CTA) se ve mal: rehacerlo.
- Revisar que en el hero el panel cruce mejor hacia la banda oscura.
- Adaptar todo a celular (la maqueta está pensada para escritorio).
- Definir qué hacen "Pedí una demo" y "Escribinos" (por ahora sin backend: mail o WhatsApp a definir).
