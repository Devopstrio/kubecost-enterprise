export enum CostCategory {
  COMPUTE = "COMPUTE",
  STORAGE = "STORAGE",
  NETWORK = "NETWORK",
  MANAGEMENT = "MANAGEMENT",
  OTHER = "OTHER"
}

export enum ClusterProvider {
  AWS = "AWS",
  AZURE = "AZURE",
  GCP = "GCP",
  ON_PREM = "ON_PREM"
}

export interface CostAllocation {
  id: string;
  namespace: string;
  clusterId: string;
  provider: ClusterProvider;
  cpuCost: number;
  memoryCost: number;
  storageCost: number;
  networkCost: number;
  totalCost: number;
  timestamp: string;
}

export interface OptimizationRecommendation {
  id: string;
  resourceId: string;
  type: "RIGHTSIZING" | "IDLE_CLEANUP" | "SPOT_MIGRATION";
  currentCost: number;
  estimatedSavings: number;
  description: string;
  actionable: boolean;
}

export interface BudgetStatus {
  id: string;
  name: string;
  allocatedAmount: number;
  actualSpend: number;
  forecastSpend: number;
  variancePercentage: number;
  status: "OK" | "WARNING" | "CRITICAL";
}
