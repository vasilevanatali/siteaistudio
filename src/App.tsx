import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, LayoutTemplate, Type, MousePointerClick, FormInput, LayoutGrid, SlidersHorizontal, MessageSquareQuote, Layers, Compass, LayoutList, Table, Zap, ShoppingCart, LayoutDashboard, ToggleLeft, Sparkles } from "lucide-react";
import { cn } from "./lib/utils";

// Import sections (we will create these next)
import HeroSection from "./sections/HeroSection";
import TypographySection from "./sections/TypographySection";
import ButtonsSection from "./sections/ButtonsSection";
import FormsSection from "./sections/FormsSection";
import CardsSection from "./sections/CardsSection";
import SlidersSection from "./sections/SlidersSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import OverlaysSection from "./sections/OverlaysSection";
import NavigationSection from "./sections/NavigationSection";
import ContentBlocksSection from "./sections/ContentBlocksSection";
import TablesSection from "./sections/TablesSection";
import DynamicElementsSection from "./sections/DynamicElementsSection";
import EcommerceSection from "./sections/EcommerceSection";
import DashboardSection from "./sections/DashboardSection";
import StatesSection from "./sections/StatesSection";
import MicroelementsSection from "./sections/MicroelementsSection";

const SECTIONS = [
  { id: "hero", label: "Главный экран", icon: LayoutTemplate, component: HeroSection },
  { id: "typography", label: "Типографика", icon: Type, component: TypographySection },
  { id: "buttons", label: "Кнопки", icon: MousePointerClick, component: ButtonsSection },
  { id: "forms", label: "Формы", icon: FormInput, component: FormsSection },
  { id: "cards", label: "Карточки", icon: LayoutGrid, component: CardsSection },
  { id: "sliders", label: "Слайдеры и Карусели", icon: SlidersHorizontal, component: SlidersSection },
  { id: "testimonials", label: "Отзывы", icon: MessageSquareQuote, component: TestimonialsSection },
  { id: "overlays", label: "Поп-апы и Оверлеи", icon: Layers, component: OverlaysSection },
  { id: "navigation", label: "Навигация", icon: Compass, component: NavigationSection },
  { id: "content", label: "Контентные блоки", icon: LayoutList, component: ContentBlocksSection },
  { id: "tables", label: "Таблицы и Списки", icon: Table, component: TablesSection },
  { id: "dynamic", label: "Динамические элементы", icon: Zap, component: DynamicElementsSection },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart, component: EcommerceSection },
  { id: "dashboard", label: "Дашборд", icon: LayoutDashboard, component: DashboardSection },
  { id: "states", label: "Состояния интерфейса", icon: ToggleLeft, component: StatesSection },
  { id: "micro", label: "Микроэлементы", icon: Sparkles, component: MicroelementsSection },
];

export default function App() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <header className={cn(
        "lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-16 transition-all duration-200",
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent"
      )}>
        <div className="flex items-center gap-2 font-display font-bold text-lg text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white">
            <Sparkles className="w-4 h-4" />
          </div>
          UI Витрина
        </div>
        <button 
          onClick={() => setIsSidebarOpen(true)}
          className="p-2 -mr-2 text-slate-600 hover:text-slate-900"
        >
          <Menu className="w-6 h-6" />
        </button>
      </header>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex items-center justify-between px-6 h-16 border-b border-slate-100 lg:h-20">
          <div className="flex items-center gap-3 font-display font-bold text-xl text-slate-900">
            <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-sm shadow-primary-600/20">
              <Sparkles className="w-4 h-4" />
            </div>
            UI Витрина
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 -mr-2 text-slate-400 hover:text-slate-600 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <div className="px-2 mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Компоненты и Паттерны
          </div>
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-primary-50 text-primary-700" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <Icon className={cn("w-4 h-4", isActive ? "text-primary-600" : "text-slate-400")} />
                {section.label}
              </button>
            );
          })}
        </div>
        
        <div className="p-6 border-t border-slate-100">
          <div className="text-xs text-slate-500 text-center">
            Создано на React & Tailwind CSS
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 pt-16 lg:pt-0">
        <div className="max-w-6xl mx-auto">
          {SECTIONS.map((section, index) => {
            const Component = section.component;
            return (
              <section 
                key={section.id} 
                id={section.id}
                className={cn(
                  "scroll-mt-24 lg:scroll-mt-12",
                  index !== 0 && "border-t border-slate-200/60"
                )}
              >
                <Component />
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
