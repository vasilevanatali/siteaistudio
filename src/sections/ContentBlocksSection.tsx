import { CheckCircle2, ArrowRight, PlayCircle } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";

export default function ContentBlocksSection() {
  return (
    <SectionWrapper 
      title="Content Sections" 
      description="Pre-designed blocks for common page structures like features, about, and CTA."
    >
      <ComponentBlock title="Feature Split" className="p-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Real-time Sync
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Collaborate instantly with your entire team
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Stop waiting for files to upload or dealing with version conflicts. Our real-time engine ensures everyone is always looking at the latest version.
            </p>
            <ul className="space-y-4 mb-8">
              {['Live cursor tracking', 'Instant conflict resolution', 'Unlimited version history'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4">
              <Button variant="primary">Start Collaborating</Button>
              <Button variant="ghost" className="hidden sm:flex">
                <PlayCircle className="w-5 h-5 mr-2" />
                See how it works
              </Button>
            </div>
          </div>
          <div className="bg-slate-100 relative min-h-[300px] lg:min-h-full">
            <img 
              src="https://picsum.photos/seed/dashboard/800/800" 
              alt="Dashboard Preview" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            {/* Decorative UI overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <img src="https://picsum.photos/seed/u1/40/40" className="w-8 h-8 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/u2/40/40" className="w-8 h-8 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                  <img src="https://picsum.photos/seed/u3/40/40" className="w-8 h-8 rounded-full border-2 border-white" alt="User" referrerPolicy="no-referrer" />
                </div>
                <div className="text-sm font-medium text-slate-900">
                  3 team members editing now
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Stats & Metrics" className="bg-slate-900 text-white p-8 lg:p-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center divide-x divide-slate-800">
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-blue-400">
              99.9%
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Uptime SLA</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold font-display text-white">
              50M+
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">API Requests</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold font-display text-white">
              120k
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-bold font-display text-white">
              4.9/5
            </div>
            <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">User Rating</div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Call to Action (CTA)" className="p-0 overflow-hidden">
        <div className="bg-primary-600 px-8 py-16 lg:px-16 lg:py-20 text-center relative overflow-hidden w-full">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to transform your workflow?
            </h2>
            <p className="text-primary-100 text-lg mb-10">
              Join thousands of teams who are already building faster and better with our platform. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-slate-50 shadow-xl shadow-primary-900/20">
                Get Started for Free
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-primary-400 text-white hover:bg-primary-500 hover:text-white">
                Talk to Sales
              </Button>
            </div>
            <p className="text-primary-200 text-sm mt-6">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}
