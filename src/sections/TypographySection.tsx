import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";

export default function TypographySection() {
  return (
    <SectionWrapper 
      title="Типографика" 
      description="Надежная типографическая система, использующая Inter для основного текста и Space Grotesk для заголовков."
    >
      <ComponentBlock title="Заголовки" className="flex-col items-start gap-8">
        <div className="space-y-2 w-full">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">H1 / Space Grotesk / 72px / Bold</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900">
            Съешь ещё этих мягких
          </h1>
        </div>
        
        <div className="space-y-2 w-full">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">H2 / Space Grotesk / 48px / Semibold</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">
            Французских булок, да выпей же чаю
          </h2>
        </div>

        <div className="space-y-2 w-full">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">H3 / Space Grotesk / 36px / Medium</span>
          </div>
          <h3 className="text-3xl lg:text-4xl font-medium tracking-tight text-slate-900">
            Широкая электрификация южных губерний
          </h3>
        </div>

        <div className="space-y-2 w-full">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">H4 / Space Grotesk / 24px / Medium</span>
          </div>
          <h4 className="text-2xl font-medium tracking-tight text-slate-900">
            В чащах юга жил бы цитрус? Да, но фальшивый экземпляр!
          </h4>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Основной текст" className="flex-col items-start gap-8">
        <div className="space-y-2 w-full max-w-3xl">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">Paragraph Large / Inter / 20px / Regular</span>
          </div>
          <p className="text-xl text-slate-600 leading-relaxed">
            Типографика — это искусство и техника оформления текста, делающая письменный язык разборчивым, читаемым и привлекательным при отображении. Оформление текста включает выбор гарнитур, кегля, длины строк, межстрочного интервала и межбуквенного расстояния.
          </p>
        </div>

        <div className="space-y-2 w-full max-w-3xl">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">Paragraph Default / Inter / 16px / Regular</span>
          </div>
          <p className="text-base text-slate-600 leading-relaxed">
            Хорошая типографика устанавливает сильную визуальную иерархию, обеспечивает графический баланс сайта и задает общий тон продукта. Она должна направлять и информировать ваших пользователей, оптимизировать читабельность и доступность, а также обеспечивать отличный пользовательский опыт.
          </p>
        </div>

        <div className="space-y-2 w-full max-w-3xl">
          <div className="flex items-baseline justify-between border-b border-slate-100 pb-2 mb-4">
            <span className="text-sm font-mono text-slate-400">Small Text / Inter / 14px / Regular</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">
            Это мелкий текст, часто используемый для вторичной информации, метаданных или вспомогательного текста в формах. Он остается читаемым, занимая при этом меньше визуального веса.
          </p>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Встроенные элементы и форматирование" className="flex-col items-start gap-8">
        <div className="space-y-4 w-full max-w-3xl">
          <p className="text-base text-slate-600 leading-relaxed">
            Вот абзац, демонстрирующий различные встроенные стили. Вы можете использовать <strong>жирный текст</strong> для акцента, <em>курсив</em> для тонкого выделения или <u className="underline-offset-4 decoration-slate-300">подчеркнутый текст</u>. Иногда нужно <mark className="bg-primary-100 text-primary-900 px-1 rounded">выделить</mark> конкретные слова. Вы также можете включать <a href="#" className="text-primary-600 hover:text-primary-700 font-medium underline underline-offset-4 decoration-primary-200 hover:decoration-primary-500 transition-colors">встроенные ссылки</a> на другие ресурсы.
          </p>
          
          <blockquote className="border-l-4 border-primary-500 pl-6 py-2 my-8 italic text-lg text-slate-700 bg-slate-50 rounded-r-xl">
            "Дизайн — это не только то, как это выглядит и ощущается. Дизайн — это то, как это работает."
            <footer className="text-sm text-slate-500 mt-2 font-medium not-italic">— Стив Джобс</footer>
          </blockquote>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Маркированный список</h5>
              <ul className="space-y-2 text-slate-600 list-disc list-inside marker:text-primary-500">
                <li>Первый элемент в списке</li>
                <li>Второй элемент с большим количеством текста для демонстрации переноса</li>
                <li>Третий элемент в списке</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-slate-900 mb-4">Нумерованный список</h5>
              <ol className="space-y-2 text-slate-600 list-decimal list-inside marker:text-slate-400 marker:font-medium">
                <li>Первый шаг процесса</li>
                <li>Второй шаг процесса</li>
                <li>Последний шаг процесса</li>
              </ol>
            </div>
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
