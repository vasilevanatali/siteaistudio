import { ArrowRight, CheckCircle2, Heart, MoreHorizontal, Star, TrendingUp, Users } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";

export default function CardsSection() {
  return (
    <SectionWrapper 
      title="Карточки" 
      description="Универсальные контейнеры для группировки связанной информации и действий."
    >
      <ComponentBlock title="Карточки сервисов и функций" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center text-primary-600 mb-4">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Аналитический дашборд</h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Получайте информацию о показателях вашего бизнеса в реальном времени с помощью продвинутой аналитики.
          </p>
          <a href="#" className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center gap-1 group">
            Узнать больше
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 shadow-lg text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl group-hover:bg-primary-500/30 transition-colors" />
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-4 backdrop-blur-sm">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Командная работа</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Работайте бесшовно с членами вашей команды в реальном времени по всему миру.
            </p>
            <Button variant="primary" className="w-full bg-white text-slate-900 hover:bg-slate-100">
              Начать
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden group hover:border-primary-200 transition-colors">
          <div className="h-32 bg-slate-100 relative overflow-hidden">
            <img src="https://picsum.photos/seed/design/400/200" alt="Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-1 rounded bg-emerald-100 text-emerald-700 text-xs font-medium">Новая функция</span>
              <span className="text-xs text-slate-500">2 мин чтения</span>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">Визуальный редактор</h3>
            <p className="text-slate-600 text-sm line-clamp-2">
              Создавайте красивые интерфейсы, не написав ни строчки кода, с помощью нашего нового визуального редактора.
            </p>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Карточки цен и продуктов" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="bg-white rounded-3xl p-8 border-2 border-primary-500 shadow-xl relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Самый популярный
          </div>
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Про план</h3>
            <div className="flex items-end justify-center gap-1">
              <span className="text-4xl font-bold text-slate-900">$29</span>
              <span className="text-slate-500 mb-1">/месяц</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Оплата за год</p>
          </div>
          <ul className="space-y-3 mb-8">
            {['Неограниченно проектов', 'Продвинутая аналитика', 'Свой домен', 'Приоритетная поддержка 24/7'].map((feature, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button variant="primary" className="w-full h-12 text-base">Подписаться сейчас</Button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden group">
          <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
            <img src="https://picsum.photos/seed/headphones/600/400" alt="Product" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
            <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur flex items-center justify-center text-slate-600 hover:text-red-500 hover:bg-white transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-4 flex gap-2">
              <span className="px-2 py-1 rounded bg-white text-slate-900 text-xs font-bold shadow-sm">СКИДКА 20%</span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">Премиум беспроводные наушники</h3>
                <p className="text-sm text-slate-500">Шумоподавление, Накладные</p>
              </div>
              <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-medium text-slate-700">4.9</span>
              </div>
            </div>
            <div className="flex items-center gap-3 mt-4 mb-6">
              <span className="text-2xl font-bold text-slate-900">$249</span>
              <span className="text-sm text-slate-400 line-through">$299</span>
            </div>
            <Button variant="primary" className="w-full">В корзину</Button>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Профили и Карточки команды" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 text-center group hover:border-primary-200 transition-colors">
          <div className="relative w-24 h-24 mx-auto mb-4">
            <img src="https://picsum.photos/seed/avatar1/200/200" alt="Avatar" className="w-full h-full rounded-full object-cover border-4 border-white shadow-md" referrerPolicy="no-referrer" />
            <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">Сара Дженкинс</h3>
          <p className="text-sm text-slate-500 mb-4">Ведущий дизайнер продукта</p>
          <div className="flex justify-center gap-2">
            <Button variant="outline" size="sm" className="w-full">Сообщение</Button>
            <Button variant="secondary" size="icon" className="shrink-0"><MoreHorizontal className="w-4 h-4" /></Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 flex items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer">
          <img src="https://picsum.photos/seed/avatar2/100/100" alt="Avatar" className="w-16 h-16 rounded-full object-cover" referrerPolicy="no-referrer" />
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-slate-900 truncate">Майкл Чен</h3>
            <p className="text-sm text-slate-500 truncate">Frontend Инженер</p>
          </div>
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-primary-600 shrink-0">
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
