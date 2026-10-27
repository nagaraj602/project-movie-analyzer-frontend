# Project Movie Analyzer - React Frontend Microservice

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-24%20LTS-green.svg)](https://nodejs.org/)
[![Port](https://img.shields.io/badge/Service%20Port-7180-green.svg)](#port-configuration)
[![GitHub Repository](https://img.shields.io/badge/GitHub-nagaraj602%2Fproject--movie--analyzer--frontend-blue?logo=github)](https://github.com/nagaraj602/project-movie-analyzer-frontend.git)

This repository contains the interactive user interface and Express reverse-proxy gateway for the **Movie Analyzer Platform**, developed and maintained by **nagaraj602**. Built with React 19 and served by Express on Node.js 24 LTS.

---

## 🔗 Platform Ecosystem & Repositories

| Component | Repository Link | Tech Stack & Role |
| :--- | :--- | :--- |
| **Main Orchestration & IaC** | [movie-analyzer-project](https://github.com/nagaraj602/movie-analyzer-project.git) | Terraform (AWS EKS 1.37, RDS PostgreSQL 17, VPC, Jenkins), Docker Compose |
| **Backend API Service** | [project-movie-analyzer-backend](https://github.com/nagaraj602/project-movie-analyzer-backend.git) | Java 21/25 LTS, Spring Boot 3.5, Hibernate/JPA, Actuator (Port `7280`) |
| **Frontend Portal** | [project-movie-analyzer-frontend](https://github.com/nagaraj602/project-movie-analyzer-frontend.git) | React 19, Express 4, Node 24 LTS (Port `7180`) |
| **AI/ML Model Service** | [project-movie-analyzer-model](https://github.com/nagaraj602/project-movie-analyzer-model.git) | Python 3.13/3.15, Flask 3.1, TextBlob, NLTK (Port `7380`) |
| **Jenkins Shared Libraries** | [jenkins-sharedlibraries](https://github.com/nagaraj602/jenkins-sharedlibraries.git) | Reusable Jenkins Groovy pipelines (Trivy, SonarQube, Helm, ECR) |

---

## 🚀 Port & Networking Architecture

This service is configured to run on port **`7180`**:

| Setting | Value | Description |
| :--- | :--- | :--- |
| **`PORT`** | `7180` | Express frontend server listening port |
| **`BACKEND_API_URL`** | `http://backend:7280` | Target URL for Express API reverse-proxy |
| **Docker Host Mapping** | `7180:7180` | Container external-to-internal port binding |
| **Kubernetes Service Port** | `7180` | Service NodePort / ClusterIP target port |
| **Health Check Path** | `http://localhost:7180/health` | Container liveness and readiness probe endpoint |

---

## 💻 Key Features

1. **Movie Catalog Grid**: Displays curated cinema classics (*Inception*, *The Dark Knight*, *Gladiator*, *Interstellar*, *Fight Club*, *The Shawshank Redemption*) with movie metadata and ratings.
2. **Review Submission & NLP Feedback**: Submits user reviews to the backend, displaying real-time sentiment evaluation (`positive`, `negative`, `neutral`), confidence score percentage, and generated star rating.
3. **Latest Community Reviews Feed**: Dynamic feed presenting the 5 most recent reviews across all films.
4. **Bottom System Health Status Bar**: Fixed footer indicating the operational health of Frontend, Backend API, PostgreSQL Database, and AI Model service.
5. **Floating DevOps Chaos Admin Panel**:
   * **Simulate Crash**: Initiates graceful shutdown and process termination for Kubernetes auto-healing verification.
   * **Toggle Health**: Flips health status to simulate 503 degraded states.
   * **Simulate Overload**: Triggers intensive CPU & memory cycles to evaluate Horizontal Pod Autoscaler (HPA).
   * **Dependency Chaos**: Remotely controls backend, database, and model server health states.

---

## 📦 Running Locally & Container Execution

### 1. Run with Node.js 24 LTS
```bash
# Clone the repository
git clone https://github.com/nagaraj602/project-movie-analyzer-frontend.git
cd project-movie-analyzer-frontend

# Install dependencies
npm install

# Build static React bundle
npm run build

# Start Express server on port 7180
export PORT=7180
export BACKEND_API_URL=http://localhost:7280
npm start
```

### 2. Run with Docker
```bash
# Build the container image using Node 24 Alpine
docker build -t nagaraj602/movie-analyzer-frontend:latest .

# Run container on port 7180
docker run -d --name movie-frontend \
  -p 7180:7180 \
  -e PORT=7180 \
  -e BACKEND_API_URL=http://host.docker.internal:7280 \
  nagaraj602/movie-analyzer-frontend:latest
```

---

## ☸️ Kubernetes & Helm Deployment

Helm configurations are maintained in the `helm/` directory:
```bash
# Deploy to Dev namespace
helm upgrade --install frontend-service helm/ \
  --namespace dev --create-namespace \
  -f helm/values/DEV.yaml

# Deploy to Production namespace
helm upgrade --install frontend-service helm/ \
  --namespace prod --create-namespace \
  -f helm/values/PROD.yaml
```

---

## 🔄 CI/CD Pipeline

* `Jenkinsfile.pr`: Pull Request gate executing dependency vulnerability scans (`trivy fs`), configuration linting, and build validation.
* `Jenkinsfile`: Multibranch production delivery pipeline building container images with Node 24 Alpine, pushing to Amazon ECR, and deploying via Helm to Amazon EKS 1.37.
