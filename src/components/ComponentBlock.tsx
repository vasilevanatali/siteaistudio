import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ComponentBlockProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function ComponentBlock({ title, description, children, className, dark }: ComponentBlockProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
        {description && <p className="text-slate-500 text-sm">{description}</p>}
      </div>
      <div className={cn(
        "rounded-2xl border border-slate-200 overflow-hidden",
        dark ? "bg-slate-900" : "bg-white"
      )}>
        <div className={cn("p-8 lg:p-12 flex flex-wrap gap-8 items-center justify-center", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
