#!/bin/bash

echo "🚀 Starting Portfolio Site with Chat Widget"
echo "============================================"
echo ""

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "✅ .env.local created"
fi

# Clear Next.js cache
echo "🧹 Clearing Next.js cache..."
rm -rf .next

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo ""
echo "🌐 Starting development server..."
echo "📍 Local: http://localhost:3000"
echo "💬 Chat widget should appear in bottom-right"
echo ""
echo "Press Ctrl+C to stop"
echo ""

npm run dev
