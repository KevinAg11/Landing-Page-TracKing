export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center text-white text-sm font-black">
              TK
            </span>
            <span className="font-bold text-white text-lg">TracKing</span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#features" className="hover:text-white transition-colors">Funcionalidades</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Cómo funciona</a>
            <a href="#roles" className="hover:text-white transition-colors">Para quién</a>
            <a href="#" className="hover:text-white transition-colors">Documentación API</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </nav>

          {/* Copyright */}
          <p className="text-xs text-gray-600">
            TracKing SaaS © 2026
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          Construido con NestJS · Prisma · PostgreSQL · React Native · Next.js
        </div>
      </div>
    </footer>
  )
}
