import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, Cell, PieChart, Pie, LineChart, Line
} from 'recharts';
import { 
  BarChart3, 
  Activity, 
  Clock,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  Layers,
  Cloud,
  Zap,
  Target
} from 'lucide-react';

const costTrends = [
  { month: 'Jan', compute: 4500, storage: 1200, network: 800 },
  { month: 'Feb', compute: 4800, storage: 1300, network: 850 },
  { month: 'Mar', compute: 5200, storage: 1500, network: 900 },
  { month: 'Apr', compute: 4900, storage: 1400, network: 850 },
  { month: 'May', compute: 4200, storage: 1100, network: 700 },
  { month: 'Jun', compute: 3800, storage: 1000, network: 650 },
];

const allocationByNamespace = [
  { name: 'prod-api', value: 45, color: '#10b981' },
  { name: 'data-pipeline', value: 25, color: '#059669' },
  { name: 'staging', value: 15, color: '#eab308' },
  { name: 'dev-sandbox', value: 10, color: '#64748b' },
  { name: 'monitoring', value: 5, color: '#1e293b' },
];

const KPI_CARDS = [
  { title: 'Total Monthly Spend', value: '$24.5k', trend: '-12% MoM', color: 'emerald', icon: BarChart3 },
  { title: 'Optimization Savings', value: '$8.2k', trend: 'Projected', color: 'emerald', icon: Zap },
  { title: 'Cluster Efficiency', value: '78.4%', trend: '+5.2% QoQ', color: 'emerald', icon: Activity },
  { title: 'Budget Status', value: 'Healthy', trend: 'Under Plan', color: 'emerald', icon: Target },
];

const CostDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-white">Cloud-Native Cost Intelligence</h1>
          <p className="text-slate-400">Institutional FinOps visibility and multi-cloud Kubernetes cost allocation.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Export Chargeback Report
          </button>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
            Apply Rightsizing Recommendations
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {KPI_CARDS.map((card) => (
          <div key={card.title} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative group hover:border-slate-700 transition-all">
            <div className="flex justify-between items-start">
              <div className={`p-2 bg-emerald-600/10 rounded-lg`}>
                <card.icon className={`w-6 h-6 text-emerald-400`} />
              </div>
              <div className="text-xs font-medium text-emerald-400">
                {card.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-slate-500 font-medium">{card.title}</p>
              <p className="text-3xl font-bold text-white mt-1">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cost Trends */}
        <div className="lg:col-span-2 bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Historical & Projected Spend</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={costTrends}>
                <defs>
                  <linearGradient id="colorCompute" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
                <Area type="monotone" dataKey="compute" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCompute)" name="Compute" />
                <Area type="monotone" dataKey="storage" stroke="#eab308" strokeWidth={2} fillOpacity={0} name="Storage" />
                <Area type="monotone" dataKey="network" stroke="#64748b" strokeWidth={2} fillOpacity={0} name="Network" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Allocation Breakdown */}
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
          <h3 className="text-lg font-bold text-white mb-6">Spend by Namespace</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={allocationByNamespace}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {allocationByNamespace.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '8px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            {allocationByNamespace.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm text-slate-400">{item.name}</span>
                </div>
                <span className="text-sm font-bold text-white">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Optimization Recommendations Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <h3 className="text-lg font-bold text-white">Actionable Rightsizing Recommendations</h3>
          <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View Savings History</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800/50 text-slate-400 text-xs uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4 font-semibold">Workload / Cluster</th>
                <th className="px-6 py-4 font-semibold">Current Resources</th>
                <th className="px-6 py-4 font-semibold">Recommended</th>
                <th className="px-6 py-4 font-semibold">Estimated Monthly Savings</th>
                <th className="px-6 py-4 font-semibold">Confidence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {[
                { name: 'payment-service (EKS-01)', current: '4 vCPU / 8 GB', recommended: '2 vCPU / 4 GB', savings: '$420', confidence: 'High' },
                { name: 'report-worker (AKS-Prod)', current: '8 vCPU / 16 GB', recommended: '4 vCPU / 8 GB', savings: '$840', confidence: 'Medium' },
                { name: 'dev-sandbox (GKE-Core)', current: 'Idle Node Group', recommended: 'Scale to Zero', savings: '$1,200', confidence: 'High' },
              ].map((rec) => (
                <tr key={rec.name} className="hover:bg-slate-800/50 transition-all group">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">{rec.name}</span>
                      <span className="text-xs text-slate-500 font-mono">Namespace: production</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-300">{rec.current}</td>
                  <td className="px-6 py-4 text-sm text-emerald-400 font-bold">{rec.recommended}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-emerald-500">{rec.savings}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      rec.confidence === 'High' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-amber-500/10 text-amber-500'
                    }`}>
                      {rec.confidence}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CostDashboard;
