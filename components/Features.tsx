'use client'

import { motion } from 'framer-motion'
import {
  MapPin, Package, Smartphone, Calculator,
  BarChart2, Building2, Shield, Camera,
} from 'lucide-react'
import { FEATURES } from '@/lib/constants'

const iconMap: Record<string, React.ElementType> = {
  MapPin, Package, Smartphone, Calculator,
  BarChart2, Building2, Shield, Camera,
}

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Funcionalidades
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
            Todo lo que necesitas en una sola plataforma
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Desde el primer servicio hasta la liquidación final, TracKing cubre cada etapa de tu operación.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                variants={item}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#2563EB]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{feature.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
