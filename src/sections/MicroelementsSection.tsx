import { Check, Info, AlertTriangle, X, Star, Heart, Share2, MoreHorizontal, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { cn } from "../lib/utils";

export default function MicroelementsSection() {
  return (
    <SectionWrapper 
      title="Microelements" 
      description="Small but essential UI components like badges, tags, tooltips, and avatars."
    >
      <ComponentBlock title="Badges & Labels" className="gap-8 justify-start items-start">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Solid Badges</h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-900 text-white">Default</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-600 text-white">Primary</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-600 text-white">Success</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500 text-white">Warning</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-600 text-white">Danger</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Subtle Badges</h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">Default</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-50 text-primary-700">Primary</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">Success</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">Warning</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">Danger</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Outline Badges</h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-slate-200 text-slate-800">Default</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-primary-200 text-primary-700">Primary</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-emerald-200 text-emerald-700">Success</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-amber-200 text-amber-700">Warning</span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-red-200 text-red-700">Danger</span>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">With Icons</h4>
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
              <Check className="w-3.5 h-3.5" /> Verified
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
              <AlertTriangle className="w-3.5 h-3.5" /> Pending
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              <Clock className="w-3.5 h-3.5" /> 2h ago
            </span>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Avatars & Groups" className="gap-8 justify-start items-start">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Sizes</h4>
          <div className="flex items-end gap-4">
            <img src="https://picsum.photos/seed/a1/100/100" alt="Avatar" className="w-16 h-16 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/a2/100/100" alt="Avatar" className="w-12 h-12 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/a3/100/100" alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/a4/100/100" alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/a5/100/100" alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Initials & Fallbacks</h4>
          <div className="flex items-end gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-lg">JD</div>
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">AS</div>
            <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center font-bold text-xs">MK</div>
            <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Avatar Groups</h4>
          <div className="flex -space-x-3 overflow-hidden p-1">
            <img src="https://picsum.photos/seed/g1/100/100" alt="Avatar" className="inline-block w-10 h-10 rounded-full ring-2 ring-white object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/g2/100/100" alt="Avatar" className="inline-block w-10 h-10 rounded-full ring-2 ring-white object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/g3/100/100" alt="Avatar" className="inline-block w-10 h-10 rounded-full ring-2 ring-white object-cover" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/g4/100/100" alt="Avatar" className="inline-block w-10 h-10 rounded-full ring-2 ring-white object-cover" referrerPolicy="no-referrer" />
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-full ring-2 ring-white bg-slate-100 text-slate-600 text-xs font-medium z-10">
              +5
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">With Status Indicators</h4>
          <div className="flex items-end gap-6">
            <div className="relative">
              <img src="https://picsum.photos/seed/s1/100/100" alt="Avatar" className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/s2/100/100" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-amber-500 border-2 border-white rounded-full" />
            </div>
            <div className="relative">
              <img src="https://picsum.photos/seed/s3/100/100" alt="Avatar" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300 border-2 border-white rounded-full" />
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Tooltips & Popovers" className="gap-8 justify-start items-start">
        <div className="space-y-4">
          <h4 className="text-sm font-medium text-slate-700">Tooltips (Hover)</h4>
          <div className="flex gap-4">
            <div className="relative group inline-block">
              <button className="p-2 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <Info className="w-5 h-5" />
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1.5 bg-slate-900 text-white text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                More information
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
              </div>
            </div>
            
            <div className="relative group inline-block">
              <button className="px-4 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                Hover me
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-2 bg-slate-900 text-white text-xs font-medium rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none w-48 text-center z-10">
                This is a longer tooltip that spans multiple lines to provide more context.
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-900" />
              </div>
            </div>
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}

// Need to import User
import { User } from "lucide-react";
