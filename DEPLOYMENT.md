# Deployment Guide - GiyaPay Headless CMS

This project automatically deploys to Google Cloud Run via GitHub Actions.

## Prerequisites

1. Google Cloud Project: `giyapay-qr-test`
2. Service Account with Cloud Run permissions
3. GitHub repository with secrets configured

## GitHub Secrets Setup

You need to add these secrets to your GitHub repository:

### Go to: `Settings` → `Secrets and variables` → `Actions` → `New repository secret`

### Required Secrets:

1. **`GCP_SA_KEY`** - Google Cloud Service Account JSON key
   - Create a service account in Google Cloud Console
   - Grant it these roles:
     - Cloud Run Admin
     - Storage Admin
     - Service Account User
   - Create a JSON key and paste the entire contents

2. **`CONTENTFUL_SPACE_ID`** - Your Contentful Space ID
   - Get from: Contentful → Settings → General settings

3. **`CONTENTFUL_ACCESS_TOKEN`** - Contentful Delivery API Token
   - Get from: Contentful → Settings → API keys → Content Delivery API

4. **`CONTENTFUL_PREVIEW_ACCESS_TOKEN`** - Contentful Preview API Token
   - Get from: Contentful → Settings → API keys → Content Preview API

5. **`CONTENTFUL_SPACE_ENVIRONMENT`** - Contentful Environment (usually `master`)

6. **`NEXT_PUBLIC_BASE_URL`** - Your Cloud Run URL
   - Example: `https://giyapay-headless-cms-xxxxx-ew.a.run.app`
   - You can update this after first deployment

## How It Works

1. **Push to main branch** → Triggers deployment
2. **GitHub Actions** builds Docker image
3. **Pushes** to Google Container Registry
4. **Deploys** to Cloud Run with environment variables

## Manual Deployment

If you need to deploy manually:

```bash
./deploy-cloud-run.sh
```

## View Deployment Status

- GitHub Actions: https://github.com/BIMS-Tech/giyapay-headless-cms/actions
- Cloud Run: https://console.cloud.google.com/run?project=giyapay-qr-test

## Troubleshooting

### Build fails with cache errors
✅ Fixed - Now uses Dockerfile instead of buildpacks

### Missing environment variables
- Check GitHub Secrets are set correctly
- Verify service account has proper permissions

### Deployment successful but 404 errors
- Ensure `NEXT_PUBLIC_BASE_URL` is set to your Cloud Run URL
- Check Contentful credentials are valid

## Architecture

- **Framework**: Next.js 14 (App Router)
- **CMS**: Contentful
- **Hosting**: Google Cloud Run
- **CI/CD**: GitHub Actions
- **Container**: Docker (Node 18 Alpine)

