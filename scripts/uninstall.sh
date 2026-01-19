#!/bin/bash

# Date Roulette - Uninstaller
# Usuwanie globalnych komend i procesów w tle

echo "🗑️ Rozpoczynanie dezinstalacji projektu Date Roulette..."

# 1. Usunięcie procesu z PM2
if command -v pm2 &> /dev/null
then
    echo "🛑 Zatrzymywanie i usuwanie procesu PM2..."
    pm2 delete date-roulette 2>/dev/null
    pm2 save
else
    echo "⏩ PM2 nie jest zainstalowany, pomijam..."
fi

# 2. Usunięcie komend globalnych
START_COMMAND="/usr/local/bin/date-start"
STOP_COMMAND="/usr/local/bin/date-stop"

echo "⚙️ Usuwanie komend z /usr/local/bin/..."

if [ -f "$START_COMMAND" ]; then
    sudo rm "$START_COMMAND"
    echo "✅ Usunięto $START_COMMAND"
fi

if [ -f "$STOP_COMMAND" ]; then
    sudo rm "$STOP_COMMAND"
    echo "✅ Usunięto $STOP_COMMAND"
fi

# 3. Podsumowanie
echo ""
echo "✨ Gotowe! Komendy systemowe i procesy w tle zostały usunięte."
echo "💡 Jeśli chcesz całkowicie usunąć kod źródłowy, możesz teraz bezpiecznie skasować ten folder komendą:"
echo "   cd .. && rm -rf $(basename $(pwd))"
echo ""
