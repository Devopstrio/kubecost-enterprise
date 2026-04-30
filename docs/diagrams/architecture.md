# Architecture & FinOps Diagrams

## 11. Multi-Cloud Billing Topology (Detailed)
*How the platform standardizes disparate billing data.*

```mermaid
graph TD
    subgraph "Kubecost Control Plane"
        Portal[FinOps UI]
        Engine[Standardization Engine]
    end
    subgraph "Cloud Providers"
        AWS[AWS CUR / S3]
        Azure[Azure Billing / API]
        GCP[GCP BigQuery / Export]
    end
    subgraph "Telemetry"
        Prom[Global Prometheus]
    end
    AWS --> Engine
    Azure --> Engine
    GCP --> Engine
    Prom --> Engine
    Engine --> Portal
```

## 13. "Unit Economics" Calculation Model
```mermaid
graph LR
    Cost[Namespace Total Cost] --> Ops[Total Successful Operations]
    Ops --> Unit[Cost Per Transaction]
    Unit --> Business[Business Value Insight]
```

## 20. Automated Optimization Lifecycle
```mermaid
stateDiagram-v2
    Observe --> Analyze: Detect Waste
    Analyze --> Recommend: Rightsizing Logic
    Recommend --> Review: Platform Team Review
    Review --> Apply: Update Manifests
    Apply --> Validate: Savings Verification
```
