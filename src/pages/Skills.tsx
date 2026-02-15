import { motion } from 'framer-motion'
import { Cpu, Code, Database, Terminal, Globe, Award, Zap } from 'lucide-react'

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pb-20">
      
      {/* Header */}
      <div className="space-y-2">
         <motion.h6 variants={item} className="text-cyan-400 font-mono text-sm tracking-widest uppercase">My Arsenal</motion.h6>
         <motion.h2 variants={item} className="text-3xl md:text-5xl font-black text-white tracking-tight">Skills & Expertise</motion.h2>
         <motion.p variants={item} className="text-slate-400 max-w-2xl text-lg">
           A comprehensive look at my technical toolkit, creative software proficiency, and development capabilities.
         </motion.p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
         <StatCard value="3+" label="Years Exp." delay={0} />
         <StatCard value="4+" label="Projects" delay={0.1} />
         <StatCard value="100%" label="Commitment" delay={0.2} />
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Main Tech Stack - Large Card (Spans 2 cols on desktop) */}
        <motion.div 
          variants={item}
          className="md:col-span-2 glass-panel rounded-3xl p-8 relative overflow-hidden group"
        >
           <div className="absolute -right-10 -top-10 text-white/5 group-hover:text-white/10 transition-colors duration-500">
              <Code size={200} />
           </div>
           
           <h3 className="text-2xl font-bold text-white flex items-center gap-3 mb-8 relative z-10">
              <Zap className="text-cyan-400 fill-cyan-400" /> Core Technologies
           </h3>

           <div className="grid sm:grid-cols-2 gap-x-12 gap-y-8 relative z-10">
              <SkillBar name="React.js / Next.js" level={90} color="from-cyan-400 to-blue-500" />
              <SkillBar name="Node.js / Express" level={85} color="from-emerald-400 to-green-500" />
              <SkillBar name="TypeScript" level={85} color="from-blue-400 to-indigo-500" />
              <SkillBar name="Tailwind CSS" level={95} color="from-sky-300 to-cyan-400" />
              <SkillBar name="MongoDB / SQL" level={80} color="from-green-400 to-teal-500" />
              <SkillBar name="REST / GraphQL" level={75} color="from-purple-400 to-pink-500" />
           </div>
        </motion.div>

        {/* Tools & DevOps - Side Col */}
        <motion.div 
          variants={item}
          className="glass-panel rounded-3xl p-6 flex flex-col gap-6"
        >
           <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                 <Terminal className="text-rose-400" /> DevOps & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                 {['Git', 'Docker', 'AWS', 'GitHub Actions', 'CI/CD Pipelines', 'Vercel', 'Postman', 'Linux', 'VS Code', 'Figma'].map(tool => (
                    <span key={tool} className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium rounded-lg transition-colors border border-white/5 cursor-default hover:border-white/20">
                       {tool}
                    </span>
                 ))}
              </div>
           </div>

           <div className="mt-auto pt-6 border-t border-white/10">
               <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                  <Database className="text-amber-400" /> Stack Preference
               </h3> 
               <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                     <span className="text-slate-400">MERN Stack</span>
                     <span className="text-emerald-400 font-bold">Expert</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                     <div className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full w-[90%] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  </div>
               </div>
           </div>
        </motion.div>

        {/* Development - Bottom Left */}
        <motion.div 
            variants={item}
            className="glass-panel rounded-3xl p-6 hover:bg-slate-800/80 transition-colors"
        >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Cpu className="text-blue-400" /> Architecture 
            </h3>
            <ul className="space-y-3">
               <ListItem label="Frontend Architecture" />
               <ListItem label="Backend API Design" />
               <ListItem label="Database Optimization" />
               <ListItem label="Cloud Deployment" />
            </ul>
        </motion.div>

        {/* Languages - Bottom Middle */}
        <motion.div 
            variants={item}
            className="glass-panel rounded-3xl p-6 hover:bg-slate-800/80 transition-colors"
        >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Globe className="text-emerald-400" /> Languages 
            </h3>
            <ul className="space-y-4">
               <li className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-slate-200">English</span>
                     <span className="text-emerald-400 text-xs">Fluent</span>
                  </div>
                  <div className="flex gap-1 h-1.5">
                     {[1,2,3,4,5].map(i => <div key={i} className={`flex-1 rounded-full ${i <= 5 ? 'bg-emerald-500' : 'bg-slate-800'}`} />)}
                  </div>
               </li>
               <li className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-slate-200">Filipino</span>
                     <span className="text-emerald-400 text-xs">Native</span>
                  </div>
                  <div className="flex gap-1 h-1.5">
                     {[1,2,3,4,5].map(i => <div key={i} className={`flex-1 rounded-full ${i <= 5 ? 'bg-emerald-500' : 'bg-slate-800'}`} />)}
                  </div>
               </li>
            </ul>
        </motion.div>

         {/* Professional Skills - Bottom Right */}
         <motion.div 
            variants={item}
            className="md:col-span-1 glass-panel rounded-3xl p-6 hover:bg-slate-800/80 transition-colors"
        >
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Award className="text-amber-400" /> Professional 
            </h3>
            <div className="flex flex-wrap gap-2">
               {['Agile', 'Remote Work', 'Team Leadership', 'Problem Solving', 'Communication'].map(s => (
                  <span key={s} className="px-3 py-1.5 bg-amber-500/10 text-amber-200 text-xs font-medium rounded-lg border border-amber-500/20 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_5px_rgba(251,191,36,0.5)]" /> {s}
                  </span>
               ))}
            </div>
        </motion.div>

      </div>
    </motion.div>
  )
}

function StatCard({ value, label, delay }: any) {
   return (
      <motion.div 
         initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay }}
         className="glass-panel p-6 rounded-2xl text-center hover:bg-white/5 transition-colors group cursor-default"
      >
         <div className="text-2xl md:text-4xl font-black text-white mb-1 group-hover:scale-110 transition-transform duration-300">{value}</div>
         <div className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-widest group-hover:text-cyan-400 transition-colors">{label}</div>
      </motion.div>
   )
}

function SkillBar({ name, level, color }: any) {
   return (
      <div className="space-y-2 group">
         <div className="flex justify-between text-sm font-bold tracking-wide">
            <span className="text-slate-300 group-hover:text-white transition-colors">{name}</span>
            <span className="text-cyan-400">{level}%</span>
         </div>
         <div className="h-2.5 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
            <motion.div 
               initial={{ width: 0 }} 
               whileInView={{ width: `${level}%` }} 
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
            >
               <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
            </motion.div>
         </div>
      </div>
   )
}

function ListItem({ label }: any) {
   return (
      <li className="flex items-center gap-3 text-sm font-medium text-slate-300 bg-black/20 p-3 rounded-xl border border-white/5">
         <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" /> 
         {label}
      </li>
   )
}

