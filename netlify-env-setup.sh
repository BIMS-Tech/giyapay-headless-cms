#!/bin/bash
# Run this script to set up environment variables in Netlify
# Replace the values with your actual Contentful credentials

netlify env:set CONTENTFUL_SPACE_ID "your-space-id-here"
netlify env:set CONTENTFUL_ACCESS_TOKEN "your-delivery-token-here"
netlify env:set CONTENTFUL_PREVIEW_ACCESS_TOKEN "your-preview-token-here"
netlify env:set CONTENTFUL_SPACE_ENVIRONMENT "master"

echo "Environment variables set! Now trigger a new deploy."
