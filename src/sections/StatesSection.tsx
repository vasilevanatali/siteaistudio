import { Search, Inbox, AlertTriangle, CheckCircle2, Loader2, RefreshCw } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";

export default function StatesSection() {
  return (
    <SectionWrapper 
      title="Interface States" 
      description="Empty states, error messages, and loading placeholders to handle all scenarios gracefully."
    >
      <ComponentBlock title="Empty States" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-slate-50">
        <div className="bg-white rounded-2xl border border-slate-200 p-12 flex flex-col items-center justify-center text-center shadow-sm h-full">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-6">
            <Inbox className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No projects found</h3>
          <p className="text-slate-500 text-sm max-w-[250px] mb-8">
            Get started by creating a new project or importing an existing one.
          </p>
          <Button variant="primary">Create Project</Button>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-12 flex flex-col items-center justify-center text-center shadow-sm h-full">
          <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mb-6 relative">
            <Search className="w-8 h-8" />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-slate-400">?</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">No results for "dashboard"</h3>
          <p className="text-slate-500 text-sm max-w-[250px] mb-8">
            Check your spelling or try searching for something else.
          </p>
          <Button variant="outline">Clear Search</Button>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Error & Success States" className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start bg-slate-50">
        <div className="bg-white rounded-2xl border border-red-200 p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-red-500" />
          <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Connection Lost</h3>
          <p className="text-slate-500 text-sm mb-6">
            We couldn't connect to the server. Please check your internet connection and try again.
          </p>
          <div className="flex gap-3">
            <Button variant="outline">Cancel</Button>
            <Button variant="danger" className="bg-red-600 hover:bg-red-700">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-emerald-200 p-8 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500" />
          <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Payment Successful</h3>
          <p className="text-slate-500 text-sm mb-6">
            Your payment of $29.00 has been processed successfully. A receipt has been sent to your email.
          </p>
          <Button variant="outline" className="border-emerald-200 text-emerald-700 hover:bg-emerald-50">
            View Receipt
          </Button>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Loading & Processing" className="flex-col items-center gap-8 bg-slate-50">
        <div className="bg-white rounded-2xl border border-slate-200 p-12 flex flex-col items-center justify-center text-center shadow-sm w-full max-w-md">
          <div className="relative w-16 h-16 mb-6">
            <div className="absolute inset-0 rounded-full border-4 border-slate-100" />
            <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-primary-600">42%</span>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-slate-900 mb-2">Processing Data</h3>
          <p className="text-slate-500 text-sm">
            Please wait while we analyze your files. This might take a few moments depending on the size.
          </p>
        </div>

        <div className="w-full max-w-2xl bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse" />
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-slate-200 rounded animate-pulse w-1/4" />
              <div className="h-3 bg-slate-200 rounded animate-pulse w-1/3" />
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded animate-pulse w-full" />
            <div className="h-4 bg-slate-200 rounded animate-pulse w-5/6" />
            <div className="h-4 bg-slate-200 rounded animate-pulse w-4/6" />
          </div>
          <div className="flex gap-3 mt-6">
            <div className="h-10 bg-slate-200 rounded-xl animate-pulse w-24" />
            <div className="h-10 bg-slate-200 rounded-xl animate-pulse w-32" />
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
