'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Package, TrendingUp, CheckCircle, Users, Plus } from 'lucide-react'
import Image from 'next/image'
import { STATS } from '@/lib/constants'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-[#EFF6FF] via-white to-[#F4F6FA] pt-16">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#2563EB]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#3B82F6]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* ── Left: copy ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#EFF6FF] border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold px-3 py-1.5 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
            SaaS Multi-tenant · Tracking en tiempo real
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6"
          >
            Gestiona tu flota de mensajeros{' '}
            <span className="text-[#2563EB]">en tiempo real</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
          >
            TracKing centraliza tus operaciones de mensajería: asignación de servicios,
            seguimiento GPS, evidencias de entrega y liquidaciones automáticas. Todo en una sola plataforma.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#cta" className="inline-flex items-center justify-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Crear empresa gratis <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#2563EB] text-gray-700 hover:text-[#2563EB] font-semibold px-6 py-3 rounded-xl transition-colors text-sm">
              Ver cómo funciona
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-gray-200"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-extrabold text-[#2563EB]">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: dashboard mockup ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden lg:block"
        >
          {/* Outer browser frame */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

            {/* Browser chrome */}
            <div className="bg-gray-50 border-b border-gray-100 px-4 py-2.5 flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-white rounded-md px-3 py-1 text-[10px] text-gray-400 border border-gray-200 ml-2">
                app.tracking.com/dashboard
              </div>
            </div>

            {/* App layout: sidebar + main */}
            <div className="flex bg-[#F0F4FF]" style={{ height: '480px' }}>

              {/* Sidebar */}
              <div className="w-14 bg-white border-r border-gray-100 flex flex-col items-center py-4 gap-4 shrink-0">
                <div className="w-8 h-8 bg-[#2563EB] rounded-xl flex items-center justify-center shadow-sm">
                  <span className="text-white text-[9px] font-black">TK</span>
                </div>
                {[
                  { Icon: Package,   active: true  },
                  { Icon: MapPin,    active: false },
                  { Icon: Users,     active: false },
                  { Icon: TrendingUp,active: false },
                ].map(({ Icon, active }, i) => (
                  <div key={i} className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${active ? 'bg-[#EFF6FF]' : 'hover:bg-gray-50'}`}>
                    <Icon size={16} className={active ? 'text-[#2563EB]' : 'text-gray-300'} strokeWidth={2} />
                  </div>
                ))}
              </div>

              {/* Main content */}
              <div className="flex-1 flex flex-col p-4 gap-3 min-w-0 overflow-hidden">

                {/* Page header */}
                <div className="flex items-start justify-between shrink-0">
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">Dashboard General</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">Resumen de operaciones de hoy</p>
                  </div>
                  <button className="flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg shrink-0 shadow-sm">
                    <Plus size={10} />
                    Nuevo Pedido
                  </button>
                </div>

                {/* 4 KPI cards */}
                <div className="grid grid-cols-4 gap-2.5 shrink-0">
                  {[
                    { title: 'Total Activos', value: '12',    Icon: Package,     color: 'text-[#2563EB]' },
                    { title: 'Completados',   value: '34',    Icon: CheckCircle, color: 'text-blue-500'   },
                    { title: 'Mensajeros',    value: '6',     Icon: Users,       color: 'text-emerald-500'},
                    { title: 'Ingresos Hoy',  value: '$480k', Icon: TrendingUp,  color: 'text-violet-500' },
                  ].map(({ title, value, Icon, color }) => (
                    <div key={title} className="bg-white rounded-2xl p-3 shadow-sm border border-gray-50">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[9px] font-medium text-gray-500 leading-tight">{title}</span>
                        <Icon size={13} className={color} strokeWidth={2.5} />
                      </div>
                      <p className="text-base font-bold text-gray-900">{value}</p>
                    </div>
                  ))}
                </div>

                  {/* Fila 2: gráfico barras (izq) + diagrama donut (der) */}
                <div className="flex gap-2.5 shrink-0" style={{ height: '110px' }}>
                  {/* Gráfico de barras — placeholder */}
                  <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-50 p-2.5 overflow-hidden">
                    <p className="text-[8px] font-semibold text-gray-400 uppercase tracking-wide mb-1">Ingresos Semanales</p>
                    <p className="text-[11px] font-bold text-gray-800 mb-1.5">$182.000</p>
                    <div className="flex items-end gap-1 h-10">
                      {[20, 30, 25, 45, 60, 90, 40].map((h, i) => (
                        <div key={i} className="flex-1 rounded-sm" style={{ height: `${h}%`, backgroundColor: i === 5 ? '#2563EB' : '#E0E7FF' }} />
                      ))}
                    </div>
                    <div className="flex justify-between mt-1">
                      {['Sáb','Dom','Lun','Mar','Mié','Jue','Vie'].map(d => (
                        <span key={d} className="text-[6px] text-gray-300 flex-1 text-center">{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Diagrama donut (screenshot real) */}
                  <div className="w-[38%] bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden shrink-0">
                    <Image
                      src="/Diagrama-Img.png"
                      alt="Diagrama de servicios"
                      width={200}
                      height={110}
                      className="w-full h-full object-contain object-top"
                      priority
                    />
                  </div>
                </div>

                {/* Fila 3: tabla servicios (izq) + mapa (der) */}
                <div className="flex gap-2.5 flex-1 min-h-0">
                  {/* Tabla servicios activos — placeholder */}
                  <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-50 p-2.5 overflow-hidden">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-semibold text-gray-900">Servicios Activos</span>
                      <span className="text-[8px] text-[#2563EB] font-medium">Ver todos</span>
                    </div>
                    <div className="grid grid-cols-5 gap-1 pb-1 border-b border-gray-100 mb-1">
                      {['ID','Cliente','Destino','Estado','Total'].map(h => (
                        <span key={h} className="text-[7px] font-semibold text-gray-400 px-0.5">{h}</span>
                      ))}
                    </div>
                    {[
                      { id:'D5F7E2C1', c:'Newman',  d:'Calle 20',    s:'En Camino', sc:'bg-violet-50 text-violet-700', t:'$16.000' },
                      { id:'A1B2C3D4', c:'Pedro G.', d:'Cra 5 #15',  s:'Asignado',  sc:'bg-blue-50 text-blue-700',    t:'$12.000' },
                      { id:'E5F6G7H8', c:'María L.', d:'Cl 10 #20',  s:'Pendiente', sc:'bg-amber-50 text-amber-700',  t:'$8.000'  },
                    ].map(row => (
                      <div key={row.id} className="grid grid-cols-5 gap-1 py-1 border-b border-gray-50 last:border-0">
                        <span className="text-[7px] font-mono text-gray-400 px-0.5 truncate">{row.id.slice(0,6)}</span>
                        <span className="text-[7px] font-medium text-gray-700 px-0.5 truncate">{row.c}</span>
                        <span className="text-[7px] text-gray-500 px-0.5 truncate">{row.d}</span>
                        <span className={`text-[6px] font-semibold px-1 py-0.5 rounded-full self-center ${row.sc}`}>{row.s}</span>
                        <span className="text-[7px] font-semibold text-emerald-600 px-0.5">{row.t}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mapa (screenshot real) */}
                  <div className="w-[38%] bg-white rounded-2xl shadow-sm border border-gray-50 overflow-hidden shrink-0">
                    <Image
                      src="/Mapa-img.png"
                      alt="Mapa de tracking"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
