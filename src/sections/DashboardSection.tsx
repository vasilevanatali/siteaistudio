import { useState } from "react";
import { Activity, ArrowUpRight, ArrowDownRight, Users, DollarSign, CreditCard, MoreHorizontal, Calendar, Filter, X } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const METRICS = [
  { title: "Total Revenue", value: "$45,231.89", change: "+20.1%", isPositive: true, icon: DollarSign },
  { title: "Subscriptions", value: "+2350", change: "+180.1%", isPositive: true, icon: Users },
  { title: "Sales", value: "+12,234", change: "+19%", isPositive: true, icon: CreditCard },
  { title: "Active Now", value: "+573", change: "-2.4%", isPositive: false, icon: Activity },
];

const RECENT_SALES = [
  { name: "Olivia Martin", email: "olivia.martin@email.com", amount: "+$1,999.00", avatar: "https://picsum.photos/seed/olivia/100/100" },
  { name: "Jackson Lee", email: "jackson.lee@email.com", amount: "+$39.00", avatar: "https://picsum.photos/seed/jackson/100/100" },
  { name: "Isabella Nguyen", email: "isabella.nguyen@email.com", amount: "+$299.00", avatar: "https://picsum.photos/seed/isabella/100/100" },
  { name: "William Kim", email: "william@email.com", amount: "+$99.00", avatar: "https://picsum.photos/seed/william/100/100" },
  { name: "Sofia Davis", email: "sofia.davis@email.com", amount: "+$39.00", avatar: "https://picsum.photos/seed/sofia/100/100" },
];

export default function DashboardSection() {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <SectionWrapper 
      title="Dashboard Elements" 
      description="Components for data visualization, metrics, and administrative interfaces."
    >
      <ComponentBlock title="Metrics Overview" className="p-0 overflow-hidden bg-slate-50">
        <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white">
          <h3 className="text-lg font-semibold text-slate-900">Overview</h3>
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-lg">
              {['24h', '7d', '30d', '1y'].map((range) => (
                <button
                  key={range}
                  onClick={() => setTimeRange(range)}
                  className={cn(
                    "px-3 py-1 text-xs font-medium rounded-md transition-all",
                    timeRange === range ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {range}
                </button>
              ))}
            </div>
            <Button variant="outline" size="sm" className="hidden sm:flex">
              <Calendar className="w-4 h-4 mr-2" />
              Custom Date
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          {METRICS.map((metric, i) => {
            const Icon = metric.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-sm font-medium text-slate-500">{metric.title}</h4>
                  <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl font-bold font-display text-slate-900 mb-1">
                  {metric.value}
                </div>
                <div className="flex items-center gap-1 text-sm font-medium">
                  {metric.isPositive ? (
                    <ArrowUpRight className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4 text-red-500" />
                  )}
                  <span className={metric.isPositive ? "text-emerald-600" : "text-red-600"}>
                    {metric.change}
                  </span>
                  <span className="text-slate-400 font-normal ml-1">from last month</span>
                </div>
              </div>
            );
          })}
        </div>
      </ComponentBlock>

      <ComponentBlock title="Charts & Activity" className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch bg-slate-50 p-6">
        {/* Main Chart Area (Mocked) */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Revenue Overview</h3>
              <p className="text-sm text-slate-500">Monthly revenue for the current year</p>
            </div>
            <Button variant="ghost" size="icon"><MoreHorizontal className="w-5 h-5 text-slate-400" /></Button>
          </div>
          
          <div className="flex-1 min-h-[300px] flex items-end gap-2 pt-4">
            {/* Fake Bar Chart */}
            {[40, 60, 30, 80, 50, 90, 70, 100, 60, 85, 45, 75].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full relative flex-1 flex items-end rounded-t-sm overflow-hidden bg-slate-50">
                  <div 
                    className="w-full bg-primary-200 group-hover:bg-primary-300 transition-colors rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-full bg-primary-500 group-hover:bg-primary-600 transition-colors rounded-t-sm"
                    style={{ height: `${height * 0.7}%` }}
                  />
                  {/* Tooltip */}
                  <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    ${(height * 120).toLocaleString()}
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Sales List */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Recent Sales</h3>
              <p className="text-sm text-slate-500">You made 265 sales this month.</p>
            </div>
          </div>
          
          <div className="flex-1 space-y-6 overflow-y-auto pr-2">
            {RECENT_SALES.map((sale, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img src={sale.avatar} alt={sale.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" referrerPolicy="no-referrer" />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900 group-hover:text-primary-600 transition-colors cursor-pointer">{sale.name}</p>
                    <p className="text-xs text-slate-500 truncate max-w-[120px] sm:max-w-[150px]">{sale.email}</p>
                  </div>
                </div>
                <div className="text-sm font-bold text-slate-900">
                  {sale.amount}
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-6">View All Activity</Button>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Filters & Controls" className="flex-col items-stretch gap-4 bg-slate-50 p-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <Button variant="outline" size="sm" className="bg-slate-50">
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
            <div className="h-6 w-px bg-slate-200 hidden sm:block mx-2" />
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-primary-50 text-primary-700 border border-primary-100">
              Status: Active
              <button className="ml-1 hover:text-primary-900"><X className="w-3 h-3" /></button>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
              Role: Admin
              <button className="ml-1 hover:text-slate-900"><X className="w-3 h-3" /></button>
            </span>
            <button className="text-xs text-slate-500 hover:text-slate-900 font-medium ml-2">Clear all</button>
          </div>
          
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <span className="text-sm text-slate-500 mr-2">Sort by:</span>
            <select className="h-9 rounded-lg border border-slate-200 bg-white px-3 py-1 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500">
              <option>Newest first</option>
              <option>Oldest first</option>
              <option>Amount (High to Low)</option>
              <option>Amount (Low to High)</option>
            </select>
          </div>
        </div>
      </ComponentBlock>
    </SectionWrapper>
  );
}


