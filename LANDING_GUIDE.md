# Guía de Desarrollo — Landing Page TracKing

> Documentación de referencia para construir y mantener la landing page del proyecto TracKing.
> Última actualización: Abril 2026

---

## ¿Qué es TracKing?

TracKing es una plataforma SaaS multi-tenant para gestión de servicios de mensajería y logística. Permite a múltiples empresas gestionar de forma independiente sus operaciones: creación de servicios, asignación de mensajeros, seguimiento GPS en tiempo real, evidencias de entrega y liquidaciones financieras automáticas.

El ecosistema completo está compuesto por:
- Backend API — NestJS + Prisma + PostgreSQL
- App móvil — React Native (Expo) para mensajeros
- Panel web (TracKing-frontend) — Dashboard para admins y auxiliares
- Landing page — Este proyecto

---

## Stack implementado

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js (App Router) | 16.2.4 |
| Lenguaje | TypeScript | 5.x |
| Estilos | Tailwind CSS v4 | 4.x |
| Animaciones | Framer Motion | 12.x |
| Iconos | Lucide React | 1.x |
| Imágenes | next/image | nativo |
| Deploy | Vercel (recomendado) | — |

---

## Estructura de carpetas real

```
Landing-page-TracKing/
├── app/                        # Next.js App Router
│   ├── globals.css             # Variables CSS + reset + Tailwind import
│   ├── layout.tsx              # Layout raíz: fuentes Geist, metadata, OG
│   └── page.tsx                # Página principal — ensambla todas las secciones
├── components/
│   ├── Navbar.tsx              # Navegación fija con scroll behavior y menú mobile
│   ├── Hero.tsx                # Hero con mockup del dashboard real
│   ├── Problem.tsx             # 3 tarjetas problema/solución
│   ├── Features.tsx            # Grid de 8 features con iconos Lucide
│   ├── HowItWorks.tsx          # Timeline de 4 pasos
│   ├── Roles.tsx               # Tabs interactivos Admin / AUX / COURIER
│   ├── CTA.tsx                 # Sección de cierre con fondo azul
│   └── Footer.tsx              # Links, stack tecnológico, copyright
├── lib/
│   └── constants.ts            # NAV_LINKS, FEATURES, STEPS, ROLES, STATS
├── public/
│   ├── Diagrama-Img.png        # Screenshot real del gráfico donut del dashboard
│   ├── Mapa-img.png            # Screenshot real del mapa de tracking
│   └── *.svg                   # SVGs del scaffold de Next.js
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
└── tsconfig.json               # Incluye paths: { "@/*": ["./*"] }
```

---

## Secciones implementadas

### 1. Navbar
Barra de navegación fija (sticky) con:
- Logo TK + nombre "TracKing" en azul primario
- Links de ancla: Funcionalidades, Cómo funciona, Para quién
- CTA derecha: "Crear empresa" (botón primario)
- Menú hamburguesa en mobile con animación
- Fondo transparente → blanco con blur al hacer scroll

### 2. Hero
Sección principal con layout de dos columnas (copy izq / mockup der).

**Copy (izquierda):**
- Badge animado: "SaaS Multi-tenant · Tracking en tiempo real"
- Headline: "Gestiona tu flota de mensajeros en tiempo real"
- Subheadline descriptivo
- CTA principal: "Crear empresa gratis" → `#cta`
- CTA secundario: "Ver cómo funciona" → `#how-it-works`
- 4 stats: Roles de usuario / Endpoints REST / Multi-tenant aislado / Frecuencia GPS

**Mockup del dashboard (derecha):**
Réplica fiel del dashboard de `TracKing-frontend` con:
- Chrome de browser (dots rojo/amarillo/verde + URL bar)
- Sidebar con logo TK y 4 iconos de navegación (Package activo)
- Header: "Dashboard General" + botón "+ Nuevo Pedido"
- 4 KPI cards: Total Activos / Completados / Mensajeros / Ingresos Hoy
- Fila 2: gráfico de barras semanales (izq) + `Diagrama-Img.png` donut (der, 38%)
- Fila 3: tabla de servicios activos con StatusBadge (izq) + `Mapa-img.png` (der, 38%)

**Imágenes del mockup:**
- `public/Diagrama-Img.png` — screenshot del gráfico donut de servicios por estado
- `public/Mapa-img.png` — screenshot del mapa de tracking con Leaflet

### 3. Problem
3 tarjetas con layout problema (fondo rojo) / solución (fondo blanco):
- Sin visibilidad de mensajeros → GPS en tiempo real
- Asignaciones caóticas → Ciclo de vida completo
- Liquidaciones manuales → Liquidaciones automáticas

### 4. Features
Grid 4 columnas (desktop) / 2 columnas (tablet) / 1 columna (mobile).
8 features con icono Lucide, título y descripción. Animación stagger al entrar en viewport.

### 5. HowItWorks
Timeline horizontal de 4 pasos con línea conectora en desktop:
01 Crea tu empresa → 02 Registra mensajeros → 03 Crea servicios → 04 Monitorea

### 6. Roles
Tabs interactivos con AnimatePresence:
- ADMIN: gestión completa, reportes financieros, liquidaciones
- AUX: operaciones diarias, reportes operativos
- COURIER: app móvil, jornadas, GPS, evidencias

### 7. CTA
Sección de cierre con fondo `#2563EB`, headline y dos botones.

### 8. Footer
Logo, links de navegación, stack tecnológico, copyright.

---

## Identidad visual

### Paleta de colores
Extraída de `TracKing-Mobile-/src/shared/ui/colors.ts` para consistencia en todo el ecosistema.

| Token | Hex | Uso |
|-------|-----|-----|
| `primary` | `#2563EB` | Botones CTA, links, highlights, sidebar activo |
| `primaryLight` | `#3B82F6` | Hover states, badges |
| `primaryDark` | `#1D4ED8` | Active states, hover de botones |
| `primaryBg` | `#EFF6FF` | Fondos con tinte azul, sidebar item activo |
| `success` | `#22C55E` | DELIVERED, métricas positivas |
| `warning` | `#F59E0B` | PENDING, alertas |
| `danger` | `#EF4444` | CANCELLED, errores |
| `background` | `#F4F6FA` | Fondo base de la página |
| `surface` | `#FFFFFF` | Cards, modales |

### StatusBadge — colores exactos del frontend

| Estado | Fondo | Texto |
|--------|-------|-------|
| PENDING | `bg-amber-50` | `text-amber-700` |
| ASSIGNED | `bg-blue-50` | `text-blue-700` |
| ACCEPTED | `bg-indigo-50` | `text-indigo-700` |
| IN_TRANSIT | `bg-violet-50` | `text-violet-700` |
| DELIVERED | `bg-emerald-50` | `text-emerald-700` |
| CANCELLED | `bg-rose-50` | `text-rose-700` |

### Tipografía
- Headings y body: Geist Sans (cargada con `next/font/google`)
- Código: Geist Mono

### Border radius del mockup
- Cards KPI: `rounded-2xl`
- Contenedores de imagen: `rounded-2xl`
- Sidebar items: `rounded-xl`
- Botones: `rounded-lg`

---

## Animaciones (Framer Motion)

```tsx
// Entrada individual (Hero copy)
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.1 }}

// Entrada desde la derecha (mockup)
initial={{ opacity: 0, x: 40 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.3 }}

// Stagger en Features
const container = { animate: { transition: { staggerChildren: 0.08 } } }
const item = { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }

// Tabs de Roles con AnimatePresence
<AnimatePresence mode="wait">
  <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} />
</AnimatePresence>
```

---

## Configuración importante

### tsconfig.json — alias `@/`
El alias `@/*` debe apuntar a la raíz del proyecto para que los imports funcionen:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Sin esto Next.js no resuelve `@/components/...` ni `@/lib/...`.

### next/image con imágenes del mockup
Las imágenes del mockup usan dimensiones fijas + `object-contain` / `object-cover`:

```tsx
// Diagrama — muestra la imagen completa sin recortar
<Image src="/Diagrama-Img.png" width={200} height={110}
  className="w-full h-full object-contain object-top" priority />

// Mapa — llena el contenedor
<Image src="/Mapa-img.png" width={200} height={200}
  className="w-full h-full object-cover" priority />
```

Usar `fill` + `object-cover` causa que las imágenes se vean recortadas y ampliadas. Usar dimensiones fijas + `object-contain` muestra el dashboard completo a escala reducida.

---

## Comandos

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev          # http://localhost:3000

# Build de producción
npm run build
npm run start

# Lint
npm run lint
```

---

## Agregar screenshots al mockup

Para actualizar las imágenes del mockup:
1. Correr `TracKing-frontend` localmente
2. Tomar screenshot del gráfico donut → guardar como `public/Diagrama-Img.png`
3. Tomar screenshot del mapa de tracking → guardar como `public/Mapa-img.png`

Next.js sirve automáticamente cualquier archivo en `public/` desde la raíz (`/`).

---

## Checklist de implementación

- [x] Scaffold Next.js con Tailwind CSS v4
- [x] Configurar alias `@/*` en tsconfig.json
- [x] Navbar con scroll behavior y menú mobile
- [x] Hero con mockup del dashboard real (4 filas)
- [x] Sección Problema/Solución
- [x] Grid de Features (8 cards con stagger)
- [x] Timeline HowItWorks (4 pasos)
- [x] Tabs de Roles con AnimatePresence
- [x] Sección CTA final
- [x] Footer
- [x] Screenshots reales en public/ (Diagrama-Img.png, Mapa-img.png)
- [x] Metadata y Open Graph en layout.tsx
- [x] Optimización de imágenes con next/image
- [ ] og-image.png para redes sociales
- [ ] Verificar responsividad completa en mobile
- [ ] Deploy en Vercel

---

*TracKing SaaS © 2026*
