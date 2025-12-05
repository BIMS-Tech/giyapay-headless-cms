#!/bin/bash

# This script creates a Google Cloud service account for GitHub Actions

PROJECT_ID="giyapay-qr-test"
SA_NAME="github-actions"
SA_EMAIL="${SA_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"
KEY_FILE="$HOME/gcp-github-actions-key.json"

echo "🔧 Setting up Google Cloud Service Account for GitHub Actions..."
echo ""

# Set the project
echo "1️⃣ Setting project to ${PROJECT_ID}..."
gcloud config set project ${PROJECT_ID}

# Create service account
echo ""
echo "2️⃣ Creating service account: ${SA_NAME}..."
gcloud iam service-accounts create ${SA_NAME} \
  --display-name="GitHub Actions Deployer" \
  --project=${PROJECT_ID} || echo "Service account may already exist"

# Grant necessary permissions
echo ""
echo "3️⃣ Granting permissions..."
gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/run.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/storage.admin"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding ${PROJECT_ID} \
  --member="serviceAccount:${SA_EMAIL}" \
  --role="roles/artifactregistry.writer"

# Create and download JSON key
echo ""
echo "4️⃣ Creating JSON key..."
gcloud iam service-accounts keys create ${KEY_FILE} \
  --iam-account=${SA_EMAIL}

echo ""
echo "✅ Service account created successfully!"
echo ""
echo "📄 JSON key saved to: ${KEY_FILE}"
echo ""
echo "📋 Next steps:"
echo "   1. Copy the contents of ${KEY_FILE}"
echo "   2. Go to: https://github.com/BIMS-Tech/giyapay-headless-cms/settings/secrets/actions"
echo "   3. Create a new secret called: GCP_SA_KEY"
echo "   4. Paste the entire JSON contents"
echo ""
echo "To view the key file contents, run:"
echo "   cat ${KEY_FILE}"
echo ""

