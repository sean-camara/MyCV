import { motion } from 'framer-motion'
import { Briefcase, School, ExternalLink, GraduationCap, Code, Rocket } from 'lucide-react'

// Timeline Data (Mixed Education & Experience)
const TIMELINE = [
  {
    id: 1,
    type: 'work',
    role: 'Freelance Web Developer',
    org: 'Upwork / Direct Clients',
    year: '2026 - Present',
    description: 'Developing custom web solutions using MERN stack. Optimizing performance and deploying to cloud platforms.',
    icon: Briefcase,
    align: 'left',
    color: 'text-amber-400'
  },
  {
    id: 2,
    type: 'education',
    role: 'BS Computer Science',
    org: 'STI College Fairview',
    year: '2022 - 2026',
    description: 'Currently 3rd year. Focusing on Software Engineering and Data Structures.',
    icon: GraduationCap,
    align: 'right',
    color: 'text-emerald-400'
  }
]

const PROJECTS = [
  {
    id: 'money-flow',
    title: 'Money Flow',
    desc: 'Financial tracking application helping users manage income and expenses effectively.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    link: 'https://money-flow-six.vercel.app/',
    color: 'from-emerald-500 to-teal-600',
    icon: Code
  },
  {
    id: 'academia-zen',
    title: 'AcademiaZen',
    desc: 'Educational platform for streamlined school management and learning resources.',
    tech: ['Next.js', 'Typescript', 'Supabase', 'Tailwind'],
    link: 'https://academia-zen-rust.vercel.app/',
    color: 'from-violet-500 to-purple-600',
    icon: School
  }
]

export function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-16 pb-20">
      
      {/* 1. Projects Showcase Section */}
      <section className="space-y-8">
        <motion.div variants={item} className="space-y-2 text-center md:text-left">
           <h6 className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Portfolio</h6>
           <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Featured Works</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <motion.a
              key={project.id}
              variants={item}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl glass-panel border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Image Area */}
              <div className={`h-56 w-full bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
                
                {/* Decorative Icon */}
                <project.icon className="text-white/10 w-64 h-64 absolute -bottom-12 -right-12 rotate-12 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out" />
                
                {/* Floating Badge */}
                <div className="backdrop-blur-md bg-white/10 p-5 rounded-2xl border border-white/20 shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                   <project.icon className="text-white w-12 h-12 drop-shadow-lg" />
                </div>
              </div>
              
              {/* Content Area */}
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                     <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-2">
                        {project.title} <ExternalLink size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400" />
                     </h3>
                     <p className="text-slate-400 text-sm leading-relaxed h-[40px] line-clamp-2">
                       {project.desc}
                     </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-xs font-bold text-slate-300 rounded-lg border border-white/5 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* 2. Timeline Section */}
      <section className="relative">
         <motion.div variants={item} className="text-center mb-16 space-y-2">
            <h6 className="text-amber-400 font-mono text-sm tracking-widest uppercase">My Journey</h6>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">Career Path</h2>
         </motion.div>
         
         <div className="space-y-12 relative">
            {/* Thread Line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent md:-translate-x-1/2 opacity-30" />

            {TIMELINE.map((item, index) => (
                <TimelineItem key={item.id} data={item} index={index} />
            ))}
         </div>

      </section>
    </motion.div>
  )
}

function TimelineItem({ data, index }: any) {
    const isEven = index % 2 === 0

    return (
        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-50px" }}
           transition={{ duration: 0.5, delay: index * 0.1 }}
           className={`relative pl-12 md:pl-0 flex items-center justify-between md:gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
        >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-slate-950 border-4 border-cyan-500 z-10 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center">
               <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
            
            {/* Spacer */}
            <div className="hidden md:block w-1/2" />
            
            {/* Card */}
            <div className="w-full md:w-1/2 group">
                <div className={`glass-panel p-8 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all hover:-translate-y-1 duration-300 relative overflow-hidden ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    
                    {/* Glow Effect */}
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-colors" />

                    <div className={`flex flex-col gap-2 mb-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        <span className="px-4 py-1 bg-cyan-500/10 text-cyan-300 text-xs font-bold rounded-full border border-cyan-500/20 inline-block w-fit">
                            {data.year}
                        </span>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                             {/* Icon inline for mobile, hidden for desktop if needed, or keep for style */}
                            <data.icon className={`w-5 h-5 ${data.color} md:hidden`} />
                            {data.role}
                        </h3>
                        <div className="text-slate-400 font-medium text-sm tracking-wide flex items-center gap-2">
                           <span className={data.color}>{data.org}</span>
                        </div>
                    </div>
                    
                    <p className="text-slate-400 text-sm leading-relaxed relative z-10">
                        {data.description}
                    </p>
                </div>
            </div>
        </motion.div>
    )
}
