import { ArrowDown, ArrowUp, MoreVertical, Check, X, Edit2, Trash2, Download } from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import ComponentBlock from "../components/ComponentBlock";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const USERS = [
  { id: 1, name: "Olivia Martin", email: "olivia.martin@email.com", role: "Admin", status: "Active", lastActive: "2 mins ago" },
  { id: 2, name: "Jackson Lee", email: "jackson.lee@email.com", role: "Member", status: "Offline", lastActive: "1 hour ago" },
  { id: 3, name: "Isabella Nguyen", email: "isabella.nguyen@email.com", role: "Member", status: "Active", lastActive: "Just now" },
  { id: 4, name: "William Kim", email: "william.kim@email.com", role: "Guest", status: "Invited", lastActive: "Never" },
  { id: 5, name: "Sophia Garcia", email: "sophia.garcia@email.com", role: "Admin", status: "Offline", lastActive: "Yesterday" },
];

export default function TablesSection() {
  return (
    <SectionWrapper 
      title="Tables & Lists" 
      description="Structured data presentation with sorting, actions, and status indicators."
    >
      <ComponentBlock title="Data Table" className="p-0 overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-4 font-semibold">
                  <div className="flex items-center gap-1 cursor-pointer hover:text-primary-600">
                    User
                    <ArrowDown className="w-3 h-3" />
                  </div>
                </th>
                <th scope="col" className="px-6 py-4 font-semibold">Role</th>
                <th scope="col" className="px-6 py-4 font-semibold">Status</th>
                <th scope="col" className="px-6 py-4 font-semibold">Last Active</th>
                <th scope="col" className="px-6 py-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((user, index) => (
                <tr key={user.id} className={cn(
                  "bg-white hover:bg-slate-50 transition-colors group",
                  index !== USERS.length - 1 && "border-b border-slate-100"
                )}>
                  <td className="px-6 py-4 font-medium text-slate-900 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-xs text-slate-500 font-normal">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-2.5 py-1 rounded-md text-xs font-medium",
                      user.role === 'Admin' ? "bg-purple-100 text-purple-700" :
                      user.role === 'Member' ? "bg-blue-100 text-blue-700" :
                      "bg-slate-100 text-slate-700"
                    )}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        user.status === 'Active' ? "bg-emerald-500" :
                        user.status === 'Offline' ? "bg-slate-300" :
                        "bg-amber-500"
                      )} />
                      {user.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-400">
                    {user.lastActive}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary-600">
                        <Edit2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
            <span className="text-sm text-slate-500">Showing <span className="font-semibold text-slate-900">1</span> to <span className="font-semibold text-slate-900">5</span> of <span className="font-semibold text-slate-900">50</span> entries</span>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Comparison Table" className="p-0 overflow-hidden">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-sm text-center text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th scope="col" className="px-6 py-6 font-semibold text-left w-1/3">Features</th>
                <th scope="col" className="px-6 py-6 font-semibold border-l border-slate-200">
                  <div className="text-lg font-bold text-slate-900 mb-1">Basic</div>
                  <div className="text-slate-500 font-normal normal-case">$9/mo</div>
                </th>
                <th scope="col" className="px-6 py-6 font-semibold border-l border-slate-200 bg-primary-50">
                  <div className="text-lg font-bold text-primary-700 mb-1">Pro</div>
                  <div className="text-primary-600 font-normal normal-case">$29/mo</div>
                </th>
                <th scope="col" className="px-6 py-6 font-semibold border-l border-slate-200">
                  <div className="text-lg font-bold text-slate-900 mb-1">Enterprise</div>
                  <div className="text-slate-500 font-normal normal-case">Custom</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { feature: "Users", basic: "Up to 5", pro: "Up to 50", ent: "Unlimited" },
                { feature: "Storage", basic: "10 GB", pro: "100 GB", ent: "Unlimited" },
                { feature: "Support", basic: "Email", pro: "Priority Email", ent: "24/7 Phone" },
                { feature: "Custom Domain", basic: false, pro: true, ent: true },
                { feature: "Advanced Analytics", basic: false, pro: true, ent: true },
                { feature: "SSO Integration", basic: false, pro: false, ent: true },
              ].map((row, i) => (
                <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-900 text-left">{row.feature}</td>
                  <td className="px-6 py-4 border-l border-slate-100">
                    {typeof row.basic === 'boolean' 
                      ? (row.basic ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />)
                      : <span className="text-slate-600">{row.basic}</span>
                    }
                  </td>
                  <td className="px-6 py-4 border-l border-slate-100 bg-primary-50/30">
                    {typeof row.pro === 'boolean' 
                      ? (row.pro ? <Check className="w-5 h-5 text-primary-600 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />)
                      : <span className="text-primary-700 font-medium">{row.pro}</span>
                    }
                  </td>
                  <td className="px-6 py-4 border-l border-slate-100">
                    {typeof row.ent === 'boolean' 
                      ? (row.ent ? <Check className="w-5 h-5 text-emerald-500 mx-auto" /> : <X className="w-5 h-5 text-slate-300 mx-auto" />)
                      : <span className="text-slate-600">{row.ent}</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentBlock>

      <ComponentBlock title="Action Lists" className="max-w-2xl mx-auto">
        <ul className="w-full divide-y divide-slate-100">
          {[
            { title: "Monthly Report - Q3", date: "Oct 12, 2026", size: "2.4 MB" },
            { title: "Design Assets v2", date: "Oct 10, 2026", size: "14.1 MB" },
            { title: "Q4 Marketing Plan", date: "Oct 08, 2026", size: "1.2 MB" },
          ].map((item, i) => (
            <li key={i} className="py-4 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.date} • {item.size}</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                Download
              </Button>
            </li>
          ))}
        </ul>
      </ComponentBlock>
    </SectionWrapper>
  );
}
