import { ArrowRight, Download, Heart, Plus, Settings, Trash2 } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";

export default function ButtonsSection() {
  return (
    <SectionWrapper 
      title="Кнопки" 
      description="Интерактивные элементы для запуска действий. Разработаны с четкими состояниями и иерархией."
    >
      <ComponentBlock title="Варианты" className="gap-6 justify-start">
        <Button variant="primary">Первичная</Button>
        <Button variant="secondary">Вторичная</Button>
        <Button variant="outline">Контурная</Button>
        <Button variant="ghost">Прозрачная</Button>
        <Button variant="link">Кнопка-ссылка</Button>
        <Button variant="danger">Опасность</Button>
        <Button variant="success">Успех</Button>
      </ComponentBlock>

      <ComponentBlock title="Размеры" className="gap-6 justify-start items-end">
        <Button size="sm">Маленькая</Button>
        <Button size="md">Средняя</Button>
        <Button size="lg">Большая</Button>
      </ComponentBlock>

      <ComponentBlock title="С иконками" className="gap-6 justify-start">
        <Button variant="primary">
          <Plus className="w-4 h-4 mr-2" />
          Добавить
        </Button>
        <Button variant="secondary">
          Скачать
          <Download className="w-4 h-4 ml-2" />
        </Button>
        <Button variant="outline">
          <Settings className="w-4 h-4 mr-2 text-slate-500" />
          Настройки
        </Button>
        <Button variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50">
          <Trash2 className="w-4 h-4 mr-2" />
          Удалить
        </Button>
      </ComponentBlock>

      <ComponentBlock title="Только иконка и Плавающая кнопка (FAB)" className="gap-6 justify-start">
        <Button variant="outline" size="icon" aria-label="Settings">
          <Settings className="w-4 h-4 text-slate-600" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Like">
          <Heart className="w-4 h-4 text-slate-600" />
        </Button>
        
        {/* Floating Action Button (FAB) style */}
        <button className="w-14 h-14 rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 flex items-center justify-center hover:bg-primary-700 hover:scale-105 active:scale-95 transition-all ml-8">
          <Plus className="w-6 h-6" />
        </button>
      </ComponentBlock>

      <ComponentBlock title="Состояния" className="gap-6 justify-start">
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-slate-400 font-mono">Обычное</span>
          <Button variant="primary">Отправить</Button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-slate-400 font-mono">Наведение</span>
          <Button variant="primary" className="bg-primary-700">Отправить</Button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-slate-400 font-mono">Нажатие</span>
          <Button variant="primary" className="bg-primary-800 scale-95">Отправить</Button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-slate-400 font-mono">Неактивно</span>
          <Button variant="primary" disabled>Отправить</Button>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="text-xs text-slate-400 font-mono">Загрузка</span>
          <Button variant="primary" isLoading>Сохранение...</Button>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
