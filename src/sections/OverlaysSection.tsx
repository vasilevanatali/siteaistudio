import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, AlertTriangle, CheckCircle, Info } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

export default function OverlaysSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info', message: string } | null>(null);

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <SectionWrapper 
      title="Всплывающие окна и Оверлеи" 
      description="Модальные окна, боковые панели, уведомления и баннеры для контекстной информации и действий."
    >
      <ComponentBlock title="Модальные окна и Боковые панели" className="gap-6 justify-start">
        <Button onClick={() => setIsModalOpen(true)}>Открыть модальное окно</Button>
        <Button variant="secondary" onClick={() => setIsDrawerOpen(true)}>Открыть боковую панель</Button>
      </ComponentBlock>

      <ComponentBlock title="Всплывающие уведомления (Toast)" className="gap-6 justify-start">
        <Button variant="success" onClick={() => showToast('success', 'Изменения успешно сохранены!')}>Уведомление об успехе</Button>
        <Button variant="danger" onClick={() => showToast('error', 'Не удалось удалить элемент.')}>Уведомление об ошибке</Button>
        <Button variant="outline" onClick={() => showToast('info', 'Доступно новое обновление.')}>Информационное уведомление</Button>
      </ComponentBlock>

      <ComponentBlock title="Баннеры с предупреждениями" className="flex-col items-stretch gap-4">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-amber-800">Срок действия способа оплаты скоро истекает</h4>
            <p className="text-sm text-amber-700 mt-1">Срок действия вашей кредитной карты, оканчивающейся на 4242, истекает в следующем месяце. Пожалуйста, обновите ваши платежные данные, чтобы избежать прерывания обслуживания.</p>
          </div>
          <Button variant="ghost" size="sm" className="text-amber-700 hover:bg-amber-100 shrink-0">Обновить</Button>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-emerald-800">Система полностью работоспособна</h4>
            <p className="text-sm text-emerald-700 mt-1">Все сервисы работают в штатном режиме. За последние 24 часа проблем не зафиксировано.</p>
          </div>
        </div>
      </ComponentBlock>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Подтвердите действие</h3>
                <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Вы уверены, что хотите навсегда удалить этот проект? Это действие нельзя отменить, и все связанные данные будут потеряны.
                </p>
                <div className="flex justify-end gap-3">
                  <Button variant="ghost" onClick={() => setIsModalOpen(false)}>Отмена</Button>
                  <Button variant="danger" onClick={() => setIsModalOpen(false)}>Удалить проект</Button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Side Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-50 flex justify-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setIsDrawerOpen(false)}
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full max-w-sm bg-white h-full shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-semibold text-slate-900">Настройки</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 flex-1 overflow-y-auto">
                <p className="text-slate-600 text-sm">Здесь располагается содержимое боковой панели. Вы можете поместить в эту панель формы, настройки или подробную информацию.</p>
              </div>
              <div className="p-6 border-t border-slate-100 bg-slate-50">
                <Button className="w-full" onClick={() => setIsDrawerOpen(false)}>Сохранить изменения</Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Toast Container */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className={cn(
                "px-4 py-3 rounded-xl shadow-lg border flex items-center gap-3 min-w-[300px] pointer-events-auto",
                toast.type === 'success' && "bg-emerald-50 border-emerald-200 text-emerald-800",
                toast.type === 'error' && "bg-red-50 border-red-200 text-red-800",
                toast.type === 'info' && "bg-blue-50 border-blue-200 text-blue-800"
              )}
            >
              {toast.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" />}
              {toast.type === 'error' && <AlertTriangle className="w-5 h-5 shrink-0" />}
              {toast.type === 'info' && <Info className="w-5 h-5 shrink-0" />}
              <p className="text-sm font-medium">{toast.message}</p>
              <button onClick={() => setToast(null)} className="ml-auto opacity-50 hover:opacity-100 transition-opacity">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
