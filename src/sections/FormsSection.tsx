import { useState } from "react";
import { Mail, Lock, Search, Calendar, UploadCloud, Check, AlertCircle } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

export default function FormsSection() {
  const [toggle, setToggle] = useState(false);
  const [range, setRange] = useState(50);

  return (
    <SectionWrapper 
      title="Формы и Поля ввода" 
      description="Основные элементы управления формами для сбора данных пользователя. Разработаны для ясности и доступности."
    >
      <ComponentBlock title="Текстовые поля" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Стандартное поле</label>
          <Input placeholder="Введите ваше имя" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Поле Email</label>
          <Input type="email" placeholder="you@example.com" icon={<Mail className="w-4 h-4" />} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Поле пароля</label>
          <Input type="password" placeholder="••••••••" icon={<Lock className="w-4 h-4" />} />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Поиск</label>
          <Input type="search" placeholder="Искать что-нибудь..." icon={<Search className="w-4 h-4" />} className="rounded-full" />
        </div>
      </ComponentBlock>

      <ComponentBlock title="Текстовая область и Выбор" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-2 col-span-1 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Сообщение</label>
          <textarea 
            className="flex min-h-[120px] w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-transparent resize-y"
            placeholder="Напишите ваше сообщение здесь..."
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Страна</label>
          <select className="flex h-10 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:border-transparent appearance-none">
            <option value="" disabled selected>Выберите страну</option>
            <option value="us">США</option>
            <option value="uk">Великобритания</option>
            <option value="ca">Канада</option>
            <option value="au">Австралия</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Дата</label>
          <Input type="date" icon={<Calendar className="w-4 h-4" />} />
        </div>
      </ComponentBlock>

      <ComponentBlock title="Чекбоксы, Радио и Переключатели" className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Чекбоксы</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 rounded border border-slate-300 bg-white group-hover:border-primary-500 transition-colors">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="absolute inset-0 bg-primary-600 rounded opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
              </div>
              <span className="text-sm text-slate-700">Подписаться на рассылку</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 rounded border border-slate-300 bg-white group-hover:border-primary-500 transition-colors">
                <input type="checkbox" className="peer sr-only" />
                <div className="absolute inset-0 bg-primary-600 rounded opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
              </div>
              <span className="text-sm text-slate-700">Принять условия</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Радио кнопки</h4>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-slate-300 bg-white group-hover:border-primary-500 transition-colors">
                <input type="radio" name="plan" className="peer sr-only" defaultChecked />
                <div className="w-2.5 h-2.5 rounded-full bg-primary-600 opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm text-slate-700">Базовый план ($9/мес)</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative flex items-center justify-center w-5 h-5 rounded-full border border-slate-300 bg-white group-hover:border-primary-500 transition-colors">
                <input type="radio" name="plan" className="peer sr-only" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary-600 opacity-0 peer-checked:opacity-100 transition-opacity" />
              </div>
              <span className="text-sm text-slate-700">Про план ($29/мес)</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Переключатель</h4>
          <label className="flex items-center justify-between cursor-pointer">
            <span className="text-sm text-slate-700">Включить уведомления</span>
            <div 
              className={`relative w-11 h-6 rounded-full transition-colors duration-200 ease-in-out ${toggle ? 'bg-primary-600' : 'bg-slate-200'}`}
              onClick={() => setToggle(!toggle)}
            >
              <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out shadow-sm ${toggle ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
          </label>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Продвинутые элементы ввода" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <label className="text-sm font-medium text-slate-700 flex justify-between">
            <span>Громкость</span>
            <span className="text-slate-500">{range}%</span>
          </label>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={range}
            onChange={(e) => setRange(parseInt(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Загрузка файла</label>
          <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center gap-2 hover:bg-slate-50 hover:border-primary-300 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600 group-hover:scale-110 transition-transform">
              <UploadCloud className="w-5 h-5" />
            </div>
            <div className="text-sm text-slate-600 text-center">
              <span className="text-primary-600 font-medium">Нажмите для загрузки</span> или перетащите сюда
              <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG или GIF (макс. 800x400px)</p>
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Состояния валидации" className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Имя пользователя</label>
          <Input defaultValue="johndoe" className="border-emerald-500 focus-visible:ring-emerald-500 pr-10" />
          <div className="absolute right-3 top-[34px] text-emerald-500 pointer-events-none">
            <Check className="w-4 h-4" />
          </div>
          <p className="text-xs text-emerald-600 font-medium">Имя пользователя доступно!</p>
        </div>
        
        <div className="space-y-2 relative">
          <label className="text-sm font-medium text-slate-700">Пароль</label>
          <Input type="password" defaultValue="123" error className="pr-10" />
          <div className="absolute right-3 top-[34px] text-red-500 pointer-events-none">
            <AlertCircle className="w-4 h-4" />
          </div>
          <p className="text-xs text-red-500 font-medium">Пароль должен содержать не менее 8 символов.</p>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
