'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-[#2563EB] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
            Empieza hoy. Sin tarjeta de crédito.
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Configura tu empresa en menos de 2 minutos y empieza a gestionar tu flota.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2563EB] font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors text-sm"
            >
              Crear mi empresa
              <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-sm"
            >
              Ver funcionalidades
            </a>
          </div>

          <p className="text-blue-300 text-xs mt-6">
            Multi-tenant · JWT Auth · API REST · WebSocket GPS
          </p>
        </motion.div>
      </div>
    </section>
  )
}
