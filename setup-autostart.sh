#!/bin/bash

# Date Roulette - PM2 Autostart Setup

echo "🚀 Konfiguracja autostartu przez PM2..."

# 1. Sprawdzenie/Instalacja PM2
if ! command -v pm2 &> /dev/null
then
    echo "📦 PM2 nie jest zainstalowany. Instalowanie globalnie..."
    sudo npm install -g pm2
else
    echo "✅ PM2 jest już zainstalowany."
fi

# 2. Uruchomienie aplikacji przez PM2
echo "🏃‍♂️ Uruchamianie aplikacji w PM2..."
npm run serve

# 3. Konfiguracja startu przy bootowaniu
echo "💾 Zapisywanie listy procesów..."
pm2 save

echo "-------------------------------------------------------"
echo "⚙️  Aby aplikacja wstawała automatycznie po restarcie WSL,"
echo "   wyłącz i wykonaj poniższą komendę (jeśli jeszcze tego nie zrobiłeś):"
echo ""
pm2 startup
echo "-------------------------------------------------------"
echo "✅ Konfiguracja zakończona!"
