import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Loader2, RefreshCw, CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

export default function DynamicElementsSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const [count, setCount] = useState(0);

  // Simulate loading
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  // Simulate progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + Math.floor(Math.random() * 10) + 1;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Simulate counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper 
      title="Dynamic Elements" 
      description="Interactive components that respond to user actions or data changes."
    >
      <ComponentBlock title="Loading States & Skeletons" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Button Loading</h4>
          <div className="flex gap-4">
            <Button variant="primary" isLoading={isLoading} onClick={() => setIsLoading(true)}>
              {isLoading ? "Processing..." : "Click to Load"}
            </Button>
            <Button variant="outline" isLoading={isLoading} onClick={() => setIsLoading(true)}>
              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Skeleton Loader</h4>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-4 w-full max-w-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-200 animate-pulse" />
              <div className="space-y-2 flex-1">
                <div className="h-4 bg-slate-200 rounded animate-pulse w-3/4" />
                <div className="h-3 bg-slate-200 rounded animate-pulse w-1/2" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-3 bg-slate-200 rounded animate-pulse w-full" />
              <div className="h-3 bg-slate-200 rounded animate-pulse w-full" />
              <div className="h-3 bg-slate-200 rounded animate-pulse w-4/5" />
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Progress Indicators" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 w-full max-w-md">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium text-slate-700">
              <span>Uploading file...</span>
              <span>{Math.min(progress, 100)}%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium text-slate-700">
              <span>Storage used</span>
              <span className="text-amber-600">85%</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-amber-500 rounded-full w-[85%]" />
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-8">
          {/* Circular Progress */}
          <div className="relative w-24 h-24 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" className="stroke-slate-100" strokeWidth="8" fill="none" />
              <motion.circle 
                cx="50" cy="50" r="40" 
                className="stroke-primary-500" 
                strokeWidth="8" 
                fill="none" 
                strokeLinecap="round"
                strokeDasharray="251.2"
                initial={{ strokeDashoffset: 251.2 }}
                animate={{ strokeDashoffset: 251.2 - (251.2 * Math.min(progress, 100)) / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </svg>
            <div className="absolute text-lg font-bold text-slate-900">
              {Math.min(progress, 100)}%
            </div>
          </div>

          {/* Spinner */}
          <div className="w-24 h-24 flex items-center justify-center bg-slate-50 rounded-full border border-slate-200">
            <RefreshCw className="w-8 h-8 text-primary-500 animate-spin" />
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Accordions & Disclosures" className="max-w-2xl mx-auto w-full">
        <div className="space-y-3 w-full">
          {[
            { id: 1, title: "How does the pricing work?", content: "Our pricing is based on the number of active users per month. You only pay for what you use, and you can cancel anytime." },
            { id: 2, title: "Can I upgrade my plan later?", content: "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will be prorated." },
            { id: 3, title: "Do you offer custom enterprise solutions?", content: "Absolutely. For large organizations with specific needs, we offer custom enterprise plans with dedicated support and SLAs. Contact our sales team for more information." }
          ].map((item) => (
            <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset"
              >
                <span className="font-medium text-slate-900">{item.title}</span>
                {expanded === item.id ? (
                  <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {expanded === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </ComponentBlock>

      <ComponentBlock title="Animated Counters & Badges" className="flex-col items-center gap-8">
        <div className="flex gap-12 text-center">
          <div>
            <div className="text-4xl font-bold font-display text-slate-900 mb-1">
              <motion.span
                key={count}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block"
              >
                {count.toLocaleString()}
              </motion.span>
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Live Updates</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-display text-primary-600 mb-1">
              $12.4k
            </div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Revenue</div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            System Online
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
            <AlertCircle className="w-3.5 h-3.5" />
            Update Available
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Verified Account
          </span>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
