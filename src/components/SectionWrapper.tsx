import { ReactNode } from "react";

interface SectionWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export default function SectionWrapper({ title, description, children }: SectionWrapperProps) {
  return (
    <div className="py-16 px-6 lg:px-12 lg:py-24">
      <div className="max-w-4xl mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-slate-600 leading-relaxed">
            {description}
          </p>
        )}
      </div>
      <div className="space-y-16">
        {children}
      </div>
    </div>
  );
}
