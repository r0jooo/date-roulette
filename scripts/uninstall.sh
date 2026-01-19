#!/bin/bash

# Date Roulette - Uninstaller
# Usuwanie globalnych komend

echo "🗑️ Rozpoczynanie dezinstalacji projektu Date Roulette..."

# 1. Usunięcie komend globalnych
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

# 2. Podsumowanie
echo ""
echo "✨ Gotowe! Komendy systemowe zostały usunięte."
echo "💡 Jeśli chcesz całkowicie usunąć kod źródłowy, możesz teraz bezpiecznie skasować ten folder komendą:"
echo "   cd .. && rm -rf $(basename $(pwd))"
echo ""
