'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check } from 'lucide-react'
import { ROLES } from '@/lib/constants'

const badgeColors: Record<string, string> = {
  ADMIN: 'bg-[#EFF6FF] text-[#2563EB]',
  AUX: 'bg-[#FEF3C7] text-[#92400E]',
  COURIER: 'bg-[#DCFCE7] text-[#15803D]',
}

export default function Roles() {
  const [active, setActive] = useState(0)

  return (
    <section id="roles" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Para quién
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
            Un rol para cada parte del equipo
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            TracKing adapta la experiencia según el perfil. Cada usuario ve y hace exactamente lo que necesita.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {ROLES.map((r, i) => (
            <button
              key={r.role}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB]'
              }`}
            >
              {r.role}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
          >
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-gray-900">{ROLES[active].role}</h3>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${badgeColors[ROLES[active].badge]}`}>
                {ROLES[active].badge}
              </span>
            </div>
            <p className="text-gray-500 text-sm mb-6">{ROLES[active].description}</p>
            <ul className="space-y-3">
              {ROLES[active].perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-5 h-5 rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                    <Check size={11} className="text-[#15803D]" />
                  </div>
                  {perk}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
