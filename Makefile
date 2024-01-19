# Executables (local)
DOCKER_COMP = docker-compose

# Docker containers
FRONTEND_RUN = $(DOCKER_COMP) run --rm frontend

help: ## Outputs this help screen
	@grep -E '(^[a-zA-Z0-9_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}{printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

# General commands

up: ## Launch docker services
	@$(DOCKER_COMP) up

install: ## Install packages for the frontend
	@$(FRONTEND_RUN) npm install

# Lint commands

lint: ## Lint the frontend
	@$(FRONTEND_RUN) npm run lint

# Test commands

test: ## Unit tests for the frontend
	@$(FRONTEND_RUN) npm run test

test-e2e: ## E2E tests for the frontend
	@$(FRONTEND_RUN) npm run test:e2e

# Build commands

build: ## Build the frontend
	@$(FRONTEND_RUN) npm run build
