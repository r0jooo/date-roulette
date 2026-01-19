#!/bin/bash

# Date Roulette - Local Setup Script

echo "🚀 Starting setup for Date Roulette..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed. Please install it first."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Setup complete!"
    echo "💡 To start the app, run: npm run dev"
else
    echo "❌ Setup failed. Please check the errors above."
    exit 1
fi
