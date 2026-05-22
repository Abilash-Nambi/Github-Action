# 🚀 Portfolio Deployment using GitHub Actions + AWS S3

This project demonstrates a simple CI/CD pipeline using GitHub Actions to automatically deploy a frontend portfolio application to AWS S3 static website hosting.

---

# 📌 Project Overview

The goal of this project was to:

* Learn the basics of CI/CD workflows
* Understand GitHub Actions automation
* Explore AWS S3 static website hosting
* Automate frontend deployment
* Build a production-like deployment workflow

---

# 🛠️ Tech Stack

## Frontend

* React / Vite
* Tailwind CSS

## CI/CD

* GitHub Actions

## Cloud Hosting

* AWS S3 Static Website Hosting

---

# ⚙️ Workflow Architecture

```text
Developer Pushes Code
        ↓
GitHub Repository Updated
        ↓
GitHub Actions Triggered
        ↓
Dependencies Installed
        ↓
Project Build Generated
        ↓
Build Files Uploaded to AWS S3
        ↓
Portfolio Website Updated Automatically
```

---

# 📂 GitHub Actions Workflow

The workflow configuration is located inside:

```bash
.github/workflows/deploy.yml
```

This YAML file automates deployment whenever changes are pushed to the `main` branch.

---

# 📄 Example Workflow

```yaml
name: Build & Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    name: Build and Deploy
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: ${{ secrets.AWS_REGION }}

      - name: Deploy dist/ to S3
        run: |
          aws s3 sync dist/ s3://${{ secrets.S3_BUCKET_NAME }} \
            --delete \
            --cache-control "public, max-age=31536000, immutable" \
            --exclude "index.html"

          aws s3 cp dist/index.html s3://${{ secrets.S3_BUCKET_NAME }}/index.html \
            --cache-control "no-cache, no-store, must-revalidate"
```

---

# 🔐 GitHub Secrets Used

The following secrets were configured inside:

```text
GitHub Repository → Settings → Secrets and Variables → Actions
```

| Secret Name           | Purpose               |
| --------------------- | --------------------- |
| AWS_ACCESS_KEY_ID     | AWS authentication    |
| AWS_SECRET_ACCESS_KEY | AWS authentication    |
| AWS_S3_BUCKET         | Target S3 bucket name |
| AWS_REGION            | AWS deployment region |

---

# ☁️ AWS S3 Static Hosting Setup

Steps followed:

1. Created an S3 bucket
2. Enabled static website hosting
3. Configured bucket permissions
4. Uploaded build files automatically using GitHub Actions
5. Accessed deployed website through S3 website endpoint

---

# 📚 What I Learned

Through this project, I learned:

* Basics of CI/CD pipelines
* Writing GitHub Actions workflows using YAML
* Understanding workflow triggers
* Automating frontend deployments
* AWS S3 static hosting concepts
* Managing deployment secrets securely
* Production deployment flow basics

---

# 🧠 Key Concepts Explored

## GitHub Actions

GitHub Actions allows developers to automate workflows directly from GitHub repositories.

### Concepts explored:

* `on:` → workflow trigger
* `jobs:` → deployment tasks
* `runs-on:` → virtual machine environment
* `steps:` → sequential automation steps
* `uses:` → reusable GitHub Actions
* `run:` → shell commands executed during workflow

---

# 🌐 Live Deployment

Portfolio deployed using AWS S3 static website hosting.

---

# 📈 Future Improvements

Planned next steps:

* Deploy using AWS EC2
* Configure Nginx reverse proxy
* Explore PM2 process management
* Learn Docker containerization
* Add CloudFront CDN
* Configure custom domain + HTTPS
* Implement advanced CI/CD workflows

---

# 🤝 Connect With Me

## Developer

Abilash

Full Stack Developer focused on:

* Angular
* React
* Node.js
* PostgreSQL
* AWS
* CI/CD

---

# ⭐ Repository Purpose

This repository was created as part of my learning journey into:

* DevOps basics
* Cloud deployment
* Automation workflows
* Production deployment concepts

---

# 📬 Feedback

Suggestions and feedback are always w