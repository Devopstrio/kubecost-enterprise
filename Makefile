.PHONY: help build up down test lint migrate ingest-cost run-forecast optimize-resources

help:
	@echo "Kubecost Enterprise - Management Commands"
	@echo "----------------------------------------"
	@echo "build           : Build all containers"
	@echo "up              : Start all services"
	@echo "down            : Stop all services"
	@echo "test            : Run all tests"
	@echo "lint            : Run linting checks"
	@echo "migrate         : Run database migrations"
	@echo "ingest-cost     : Trigger multi-cloud cost data ingestion"
	@echo "run-forecast    : Execute time-series cost forecasting"
	@echo "optimize-resources: Generate rightsizing and idle resource recommendations"

build:
	docker-compose build

up:
	docker-compose up -d

down:
	docker-compose down

test:
	pytest tests/api
	npm test --prefix apps/web

lint:
	flake8 apps/api apps/worker
	npm run lint --prefix apps/web

migrate:
	docker-compose exec api alembic upgrade head

ingest-cost:
	docker-compose exec api python scripts/ingest/collect_cloud_billing.py

run-forecast:
	docker-compose exec api python scripts/analyze/predictive_trends.py

optimize-resources:
	docker-compose exec api python scripts/optimize/rightsizing_engine.py
