import { Mail, Phone, MapPin, Facebook, Instagram, ShieldCheck, User, Globe, Code } from 'lucide-react'
import { Map } from '../components/Map'
import { motion } from 'framer-motion'

export function Home() {
  return (
    <div className="grid lg:grid-cols-[1fr_2fr] gap-6 md:gap-8 h-full">
      
      {/* LEFT COLUMN: Profile Card */}
      <motion.aside 
        initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="glass-panel rounded-3xl p-8 flex flex-col items-center text-center relative overflow-hidden h-full min-h-[500px] border-t border-white/10">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-900/30 to-transparent pointer-events-none" />
          
          {/* Status Indicator */}
          <div className="absolute top-6 right-6 flex items-center gap-2 bg-black/40 px-3 py-1 rounded-full border border-white/5 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Online</span>
          </div>

          {/* Profile Image */}
          <div className="w-48 h-48 mb-6 mt-8 relative z-10 group cursor-pointer">
            <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="w-full h-full bg-slate-900 rounded-full border-4 border-slate-800 flex items-center justify-center shadow-2xl relative overflow-hidden group-hover:scale-105 transition-transform duration-300">
               <img src="/Profile Picture.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/* Floating Icons */}
            <div className="absolute -bottom-2 -right-2 bg-slate-900 p-2 rounded-full border border-slate-700 shadow-xl animate-bounce">
              <Code className="text-cyan-400 w-5 h-5" />
            </div>
          </div>

          <div className="space-y-3 z-10 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              Sean John Camara
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-950/50 to-blue-950/50 border border-cyan-500/20">
              <span className="text-cyan-300 font-medium text-sm">Senior Full-Stack Developer</span>
            </div>
          </div>

          {/* Tech Stack Pills - Marquee Effect on Hover? or just grid */}
          <div className="flex flex-wrap justify-center gap-2 mb-8 z-10 max-w-[80%]">
            {['React', 'Node.js', 'Typescript', 'DevOps', 'AWS', 'Next.js'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 rounded-lg border border-white/5 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4 mb-auto z-10">
            <SocialBtn href="https://www.facebook.com/sean.camara.13" icon={Facebook} color="hover:text-blue-500 hover:border-blue-500/50" />
            <SocialBtn href="https://www.instagram.com/seannyyzzyy/" icon={Instagram} color="hover:text-pink-500 hover:border-pink-500/50" />
            <SocialBtn href="mailto:camara.sean13@gmail.com" icon={Mail} color="hover:text-emerald-500 hover:border-emerald-500/50" />
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 w-full pt-8 border-t border-white/5 mt-8">
             <div className="text-center group">
                <div className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">3+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Years Exp.</div>
             </div>
             <div className="text-center group">
                <div className="text-3xl font-black text-white group-hover:text-purple-400 transition-colors">4+</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Projects</div>
             </div>
          </div>
        </div>
      </motion.aside>


      {/* RIGHT COLUMN: Content */}
      <div className="space-y-6 flex flex-col h-full">
        
        {/* About Me Card */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
          className="glass-panel rounded-3xl p-6 md:p-10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex items-center gap-4 mb-6 relative z-10">
             <div className="p-3 bg-cyan-500/10 rounded-2xl text-cyan-400">
                <User size={24} />
             </div>
             <div>
                <h2 className="text-2xl font-bold text-white">About Me</h2>
                <div className="h-1 w-12 bg-cyan-500 rounded-full mt-1" />
             </div>
          </div>
          
          <p className="text-slate-300 leading-relaxed text-lg relative z-10 font-light">
            I am a passionate <span className="text-cyan-300 font-medium">Full-Stack Developer</span> with experience in designing and building scalable web applications. 
            My journey began with a curiosity for how things work on the internet, which quickly evolved into a career crafting efficient, user-centric digital solutions.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4 relative z-10">
             <a href="/Resume.pdf" download className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-900/20 flex items-center gap-3 transition-all transform hover:scale-105 active:scale-95 group">
                <ShieldCheck size={20} />
                <span>Download Resume</span>
                <div className="w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <div className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 flex items-center gap-3 text-slate-300">
                 <Globe size={18} className="text-emerald-400" />
                 <span>Based in <span className="text-white font-medium">Quezon City</span></span>
              </div>
          </div>
        </motion.section>

        {/* Contact Grid */}
        <motion.div 
           initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
           className="grid sm:grid-cols-2 gap-4"
        >
           <ContactItem icon={Mail} label="Email Address" value="camara.sean13@gmail.com" delay={0.1} />
           <ContactItem icon={Phone} label="Phone Number" value="0991 024 8649" delay={0.2} />
           <ContactItem icon={MapPin} label="Location" value="Quezon City" delay={0.3} />
           <ContactItem icon={Globe} label="Availability" value="Open to freelance" active delay={0.4} />
        </motion.div>

        {/* Map Section */}
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
           className="glass-panel rounded-3xl p-2 h-64 sm:h-auto sm:flex-grow relative overflow-hidden min-h-[250px] border border-white/5"
        >
           <div className="absolute inset-0 z-0 hover:grayscale-0 transition-all duration-700">
               <Map />
           </div>
           
           {/* Overlay overlay for title */}
           <div className="absolute bottom-4 left-4 z-[400] bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
             <MapPin size={14} className="text-rose-400" />
             <span className="text-xs font-bold text-white uppercase tracking-wider">West Fairview, QC</span>
           </div>
        </motion.div>

      </div>
    </div>
  )
}

function SocialBtn({ href, icon: Icon, color }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" 
       className={`p-4 glass-panel rounded-2xl transition-all text-slate-400 border border-transparent ${color} hover:scale-110 active:scale-95`}>
      <Icon size={20} />
    </a>
  )
}

function ContactItem({ icon: Icon, label, value, active, delay }: any) {
    return (
        <motion.div 
           whileHover={{ y: -5 }}
           className="glass-panel p-5 rounded-2xl flex items-start gap-4 group cursor-default"
        >
            <div className={`p-3 rounded-xl transition-colors ${active ? 'bg-emerald-500/10 text-emerald-400' : 'bg-white/5 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300'}`}>
                <Icon size={20} />
            </div>
            <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">{label}</div>
                <div className={`font-medium ${active ? 'text-emerald-400' : 'text-slate-200 group-hover:text-white'} transition-colors text-sm break-all`}>{value}</div>
            </div>
        </motion.div>
    )
}


