'use client'

import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const problems = [
  {
    problem: 'Sin visibilidad de dónde están tus mensajeros',
    solution: 'Tracking GPS en tiempo real vía WebSocket. Actualización cada 15 segundos.',
  },
  {
    problem: 'Asignaciones manuales, caóticas y sin trazabilidad',
    solution: 'Ciclo de vida completo con historial de estados y asignación en un clic.',
  },
  {
    problem: 'Liquidaciones calculadas a mano, propensas a errores',
    solution: 'Liquidaciones automáticas por porcentaje o monto fijo. Historial completo.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            ¿Te suena familiar?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Estos son los problemas más comunes en operaciones de mensajería sin una plataforma centralizada.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              {/* Problem */}
              <div className="bg-red-50 p-5 flex gap-3">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                  <X size={12} className="text-red-500" />
                </div>
                <p className="text-sm text-red-700 font-medium leading-snug">{item.problem}</p>
              </div>
              {/* Solution */}
              <div className="bg-white p-5 flex gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-green-600" />
                </div>
                <p className="text-sm text-gray-700 leading-snug">{item.solution}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
