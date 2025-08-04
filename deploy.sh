#!/bin/bash

# Angular SSR Production Deployment Script
# Run this script to build and deploy your Angular SSR application

echo "🚀 Starting Angular SSR Production Deployment..."

# Build the application
echo "📦 Building application for production..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build completed successfully!"

# Check which deployment method to use
if [ "$1" == "vercel" ]; then
    echo "🌐 Deploying to Vercel..."
    vercel --prod
elif [ "$1" == "netlify" ]; then
    echo "🌐 Deploying to Netlify..."
    netlify deploy --prod --dir=dist/angular-seo-site/browser
elif [ "$1" == "firebase" ]; then
    echo "🌐 Deploying to Firebase..."
    firebase deploy
else
    echo "📋 Available deployment options:"
    echo "  ./deploy.sh vercel    - Deploy to Vercel"
    echo "  ./deploy.sh netlify   - Deploy to Netlify"
    echo "  ./deploy.sh firebase  - Deploy to Firebase"
    echo ""
    echo "💡 For manual deployment, copy the contents of dist/ to your server"
    echo "   and run: PORT=3000 node dist/server/server.js"
fi

echo "✨ Deployment process completed!"
