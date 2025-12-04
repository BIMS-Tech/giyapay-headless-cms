#!/bin/bash

# Deploy to Google Cloud Run using Dockerfile
# This script bypasses the problematic buildpacks

set -e

echo "🚀 Deploying GiyaPay Headless CMS to Google Cloud Run..."

# Configuration
PROJECT_ID="giyapay-qr-test"
REGION="europe-west1"
SERVICE_NAME="giyapay-headless-cms"
IMAGE_NAME="gcr.io/${PROJECT_ID}/${SERVICE_NAME}"

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "❌ gcloud CLI is not installed. Please install it first:"
    echo "   https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Set the project
echo "📦 Setting project to ${PROJECT_ID}..."
gcloud config set project ${PROJECT_ID}

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t ${IMAGE_NAME}:latest .

# Push to Google Container Registry
echo "📤 Pushing image to GCR..."
docker push ${IMAGE_NAME}:latest

# Deploy to Cloud Run
echo "🌐 Deploying to Cloud Run..."
gcloud run deploy ${SERVICE_NAME} \
  --image=${IMAGE_NAME}:latest \
  --platform=managed \
  --region=${REGION} \
  --allow-unauthenticated \
  --memory=2Gi \
  --cpu=2 \
  --max-instances=10 \
  --set-env-vars="NODE_ENV=production,NEXT_TELEMETRY_DISABLED=1"

echo "✅ Deployment complete!"
echo ""
echo "🌍 Your app should be available at:"
gcloud run services describe ${SERVICE_NAME} --region=${REGION} --format='value(status.url)'
echo ""
echo "⚠️  Don't forget to set your environment variables in the Cloud Run console:"
echo "   - CONTENTFUL_SPACE_ID"
echo "   - CONTENTFUL_ACCESS_TOKEN"
echo "   - CONTENTFUL_PREVIEW_ACCESS_TOKEN"
echo "   - CONTENTFUL_SPACE_ENVIRONMENT"
echo "   - NEXT_PUBLIC_BASE_URL"

