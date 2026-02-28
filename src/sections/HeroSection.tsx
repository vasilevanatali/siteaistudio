import { motion } from "motion/react";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";

export default function HeroSection() {
  return (
    <SectionWrapper 
      title="Главный экран (Hero)" 
      description="Первое впечатление. Создан быть смелым, понятным и призывать к действию."
    >
      <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 text-white p-8 lg:p-16 xl:p-24 border border-slate-800 shadow-2xl">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[1000px] h-[1000px] rounded-full bg-primary-500/10 blur-[120px]" />
          <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-sm font-medium text-primary-200 mb-8 backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4" />
            <span>Представляем платформу нового поколения</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]"
          >
            Создавайте быстрее с <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">современными инструментами</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Всё необходимое для создания, масштабирования и управления вашими приложениями. 
            Полный набор инструментов, разработанный для современных команд.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-400 text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-primary-500/25">
              Начать бесплатно
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm">
              <Play className="w-5 h-5" />
              Смотреть демо
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 items-center text-slate-500 text-sm font-medium"
          >
            <p>Нам доверяют инновационные команды по всему миру</p>
            <div className="flex gap-6 opacity-50 grayscale">
              {/* Fake logos */}
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded bg-current" />Acme Corp</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full bg-current" />Globex</div>
              <div className="flex items-center gap-2"><div className="w-6 h-6 rounded-sm bg-current rotate-45" />Soylent</div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
