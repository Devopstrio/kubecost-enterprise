import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import CostDashboard from './pages/CostDashboard';

const Placeholder = ({ name }: { name: string }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl">
    <h2 className="text-xl font-bold text-white mb-2">{name}</h2>
    <p className="text-slate-400">The cloud-native cost intelligence engine is currently aggregating multi-cluster telemetry and provider billing exports. Deep-dive allocation and optimization insights will be operational following the completion of the current fiscal data cycle.</p>
  </div>
);

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<CostDashboard />} />
          <Route path="/allocation" element={<Placeholder name="Cost Allocation & Attribution" />} />
          <Route path="/workloads" element={<Placeholder name="Workload Efficiency Analysis" />} />
          <Route path="/forecast" element={<Placeholder name="Predictive Spend Forecasting" />} />
          <Route path="/optimization" element={<Placeholder name="Resource Optimization Hub" />} />
          <Route path="/budget" element={<Placeholder name="Governance & Budget Guardrails" />} />
          <Route path="/chargeback" element={<Placeholder name="Automated Chargeback Portal" />} />
          <Route path="/economics" element={<Placeholder name="Cloud Unit Economics" />} />
          <Route path="/cloud" element={<Placeholder name="Multi-Cloud Billing Sync" />} />
          <Route path="/settings" element={<Placeholder name="FinOps & RBAC Settings" />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
