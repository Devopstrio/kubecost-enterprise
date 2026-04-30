resource "helm_release" "prometheus" {
  name       = "prometheus"
  repository = "https://prometheus-community.github.io/helm-charts"
  chart      = "prometheus"
  namespace  = "monitoring"

  set {
    name  = "server.persistentVolume.size"
    value = "50Gi"
  }

  set {
    name  = "server.retention"
    value = "90d"
  }
}

resource "helm_release" "grafana" {
  name       = "grafana"
  repository = "https://grafana.github.io/helm-charts"
  chart      = "grafana"
  namespace  = "monitoring"

  set {
    name  = "adminPassword"
    value = var.grafana_password
  }
}
