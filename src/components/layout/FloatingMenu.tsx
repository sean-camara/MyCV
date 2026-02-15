import { motion } from 'framer-motion'
import { User, Cpu, Briefcase, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '../../lib/utils'

type Tab = 'home' | 'skills' | 'experience'

interface FloatingMenuProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export function FloatingMenu({ activeTab, onTabChange }: FloatingMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: 'home', label: 'Profile', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'experience', label: 'Work', icon: Briefcase },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:bottom-12 md:right-12">
      {/* Expanded Menu Items */}
      <div className="flex flex-col gap-2 items-end">
        {menuItems.map((item, index) => (
          <motion.div
            key={item.id}
             initial={{ opacity: 0, x: 50, scale: 0.8 }}
             animate={
               isOpen
                 ? { opacity: 1, x: 0, scale: 1, transition: { delay: index * 0.05, type: 'spring' } }
                 : { opacity: 0, x: 50, scale: 0.8, pointerEvents: 'none' }
             }
          >
            <button
               onClick={() => {
                 onTabChange(item.id)
                 setIsOpen(false)
               }}
               className={cn(
                 "group flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl backdrop-blur-xl border transition-all duration-300 relative overflow-hidden",
                 activeTab === item.id
                   ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                   : "bg-slate-900/80 border-white/10 text-slate-400 hover:text-white hover:bg-slate-800"
               )}
            >
               <span className="font-semibold text-sm tracking-wide">{item.label}</span>
               <div className={cn("p-1 rounded-full transition-colors", activeTab === item.id ? "bg-cyan-500/20 text-cyan-400" : "bg-white/5 text-slate-400 group-hover:bg-white/10 group-hover:text-white")}>
                  <item.icon className="w-5 h-5" />
               </div>

               {/* Active Glow */}
               {activeTab === item.id && (
                  <div className="absolute inset-0 bg-cyan-500/10 blur-xl -z-10" />
               )}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Main FAB Toggle */}
      <div className="relative">
         {/* Animated Ping Ring */}
         {!isOpen && (
            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-20 animate-ping duration-1000" />
         )}

         <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
               "w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.3)] border backdrop-blur-xl transition-all relative z-20",
               isOpen
               ? "bg-slate-900 border-white/20 text-white rotate-90"
               : "bg-cyan-600 border-cyan-400 text-white hover:bg-cyan-500"
            )}
         >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
         </motion.button>
      </div>
    </div>
  )
}
