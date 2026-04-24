'use client'

import { motion } from 'framer-motion'
import { STEPS } from '@/lib/constants'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold text-[#2563EB] uppercase tracking-widest">
            Cómo funciona
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2 mb-4">
            Operativo en minutos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Sin configuraciones complejas. Crea tu empresa y empieza a gestionar servicios de inmediato.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-5">
                  <div className="w-20 h-20 rounded-2xl bg-[#EFF6FF] border-2 border-[#2563EB]/20 flex items-center justify-center">
                    <span className="text-2xl font-black text-[#2563EB]">{step.number}</span>
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
