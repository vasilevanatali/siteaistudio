import { Star, Quote } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Алекс Ривера",
    role: "CEO в TechFlow",
    content: "Эта платформа полностью изменила то, как наша команда сотрудничает. Интуитивно понятный интерфейс и мощные функции повысили нашу производительность на 40%.",
    avatar: "https://picsum.photos/seed/alex/100/100",
    rating: 5
  },
  {
    id: 2,
    name: "Джейми Чен",
    role: "Ведущий дизайнер",
    content: "Как дизайнер, я ценю внимание к деталям. Пользовательский интерфейс невероятно отполирован, а пользовательский опыт безупречен. Это удовольствие использовать каждый день.",
    avatar: "https://picsum.photos/seed/jamie/100/100",
    rating: 5
  },
  {
    id: 3,
    name: "Тейлор Смит",
    role: "Менеджер продукта",
    content: "Мы оценили несколько инструментов, прежде чем выбрать этот. Он предлагает лучший баланс простоты и расширенных возможностей. Настоятельно рекомендуется для растущих команд.",
    avatar: "https://picsum.photos/seed/taylor/100/100",
    rating: 4
  }
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper 
      title="Отзывы и Социальное доказательство" 
      description="Укрепляйте доверие с помощью отзывов пользователей, рейтингов и логотипов клиентов."
    >
      <ComponentBlock title="Карточки отзывов" className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch bg-slate-50">
        {TESTIMONIALS.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200'}`} 
                />
              ))}
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
              "{testimonial.content}"
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div>
                <h4 className="text-sm font-semibold text-slate-900">{testimonial.name}</h4>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </ComponentBlock>

      <ComponentBlock title="Логотипы клиентов" className="flex-col items-center py-12">
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-8 text-center">
          Нам доверяют инновационные компании по всему миру
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder logos using text for demo */}
          <div className="flex items-center gap-2 text-xl font-bold font-display"><div className="w-8 h-8 rounded bg-current" />Acme Corp</div>
          <div className="flex items-center gap-2 text-xl font-bold font-display"><div className="w-8 h-8 rounded-full bg-current" />Globex</div>
          <div className="flex items-center gap-2 text-xl font-bold font-display"><div className="w-8 h-8 rounded-sm bg-current rotate-45" />Soylent</div>
          <div className="flex items-center gap-2 text-xl font-bold font-display"><div className="w-8 h-8 rounded-tl-xl rounded-br-xl bg-current" />Initech</div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
