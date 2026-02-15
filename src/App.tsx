import { useState, useEffect } from 'react'
import { FloatingMenu } from './components/layout/FloatingMenu'
import { Home } from './pages/Home'
import { Skills } from './pages/Skills'
import { Experience } from './pages/Experience'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'skills' | 'experience'>('home')

  // Smooth scroll to top on tab change for mobile
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 font-sans selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse" />
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse delay-1000" />
         <div className="absolute top-[40%] left-[30%] w-[40%] h-[40%] bg-cyan-900/10 rounded-full blur-[150px]" />
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <main className="container mx-auto max-w-6xl px-4 py-6 md:py-12 pb-32 md:pb-12 relative z-10 min-h-screen flex flex-col">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div key="home" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} transition={{duration:0.4}} className="h-full">
              <Home />
            </motion.div>
          )}
          {activeTab === 'skills' && (
            <motion.div key="skills" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:1.05}} transition={{duration:0.4}}>
               <Skills />
            </motion.div>
          )}
          {activeTab === 'experience' && (
             <motion.div key="experience" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} transition={{duration:0.4}}>
               <Experience />
             </motion.div>
          )}
        </AnimatePresence>
      </main>

      <FloatingMenu activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App

