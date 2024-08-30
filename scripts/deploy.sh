#!/bin/bash

# Exit script if any command fails
set -e

echo "Deploying application..."

# Build the application
echo "Building application..."
# Example: npm run build
# Customize according to your build process

# Deploy the application
echo "Deploying to server..."
# Example: rsync -avz build/ user@server:/path/to/deploy
# Customize according to your deployment process

echo "Deployment completed successfully."
