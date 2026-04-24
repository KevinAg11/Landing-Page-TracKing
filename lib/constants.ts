export const NAV_LINKS = [
  { label: 'Funcionalidades', href: '#features' },
  { label: 'Cómo funciona', href: '#how-it-works' },
  { label: 'Para quién', href: '#roles' },
]

export const FEATURES = [
  {
    icon: 'MapPin',
    title: 'Tracking en tiempo real',
    description: 'GPS + WebSocket. Visualiza la posición de tus mensajeros actualizada cada 15 segundos.',
  },
  {
    icon: 'Package',
    title: 'Gestión de servicios',
    description: 'Ciclo de vida completo: PENDING → ASSIGNED → IN_TRANSIT → DELIVERED con historial de estados.',
  },
  {
    icon: 'Smartphone',
    title: 'App móvil para mensajeros',
    description: 'React Native. Jornadas, servicios asignados, evidencias fotográficas y ubicación GPS.',
  },
  {
    icon: 'Calculator',
    title: 'Liquidaciones automáticas',
    description: 'Por porcentaje o monto fijo por servicio. Historial completo por mensajero y período.',
  },
  {
    icon: 'BarChart2',
    title: 'Reportes financieros',
    description: 'Reportes operativos y financieros por período, mensajero y estado de servicio.',
  },
  {
    icon: 'Building2',
    title: 'Multi-tenant',
    description: 'Cada empresa opera en un espacio completamente aislado. Sin cruce de datos entre tenants.',
  },
  {
    icon: 'Shield',
    title: 'Panel Super Admin',
    description: 'Supervisión centralizada de todos los tenants, usuarios y métricas globales del sistema.',
  },
  {
    icon: 'Camera',
    title: 'Evidencias de entrega',
    description: 'Foto obligatoria antes de marcar un servicio como entregado. Trazabilidad total.',
  },
]

export const STEPS = [
  {
    number: '01',
    title: 'Crea tu empresa',
    description: 'Registro en segundos. Sin tarjeta de crédito. Tu empresa queda aislada del resto.',
  },
  {
    number: '02',
    title: 'Registra tus mensajeros',
    description: 'Crea perfiles de mensajero, asigna roles y configura reglas de liquidación.',
  },
  {
    number: '03',
    title: 'Crea y asigna servicios',
    description: 'Desde el panel web o vía API. Asigna mensajeros disponibles con un clic.',
  },
  {
    number: '04',
    title: 'Monitorea en tiempo real',
    description: 'Dashboard con GPS en vivo, estados de servicios y métricas financieras del día.',
  },
]

export const ROLES = [
  {
    role: 'Admin',
    badge: 'ADMIN',
    description: 'Control total de la operación',
    perks: [
      'Gestión de usuarios y mensajeros',
      'Reportes financieros completos',
      'Configuración de liquidaciones',
      'Acceso a todos los servicios',
    ],
  },
  {
    role: 'Auxiliar',
    badge: 'AUX',
    description: 'Operaciones del día a día',
    perks: [
      'Creación y asignación de servicios',
      'Consulta de mensajeros disponibles',
      'Reportes operativos',
      'Gestión de clientes',
    ],
  },
  {
    role: 'Mensajero',
    badge: 'COURIER',
    description: 'App móvil dedicada',
    perks: [
      'Inicio y fin de jornada',
      'Servicios asignados en tiempo real',
      'Registro de ubicación GPS',
      'Subida de evidencias fotográficas',
    ],
  },
]

export const STATS = [
  { value: '4', label: 'Roles de usuario' },
  { value: '30+', label: 'Endpoints REST' },
  { value: '100%', label: 'Multi-tenant aislado' },
  { value: '15s', label: 'Frecuencia GPS' },
]
