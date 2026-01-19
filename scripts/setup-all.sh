#!/bin/bash

# Date Roulette - Automated Setup
# Konfiguracja globalnych komend i autostartu

echo "🚀 Konfigurowanie globalnych komend i autostartu (może wymagać hasła sudo)..."

# 1. Sprawdzenie środowiska (Linux/WSL)
IS_LINUX=false
if [ "$(uname)" = "Linux" ]; then
    IS_LINUX=true
fi

if [ "$IS_LINUX" = false ]; then
    echo "⚠️  OSTRZEŻENIE: Wykryto system inny niż Linux. Automatyczna konfiguracja komend i autostartu (PM2/CLI) jest wspierana tylko na Linux/WSL Ubuntu."
    echo "Aplikacja została poprawnie zainstalowana, ale musisz ją uruchamiać ręcznie przez 'npm run dev'."
    exit 0
fi

# 2. Pobranie absolutnej ścieżki do projektu
PROJECT_DIR=$(pwd)
START_COMMAND="/usr/local/bin/date-start"
STOP_COMMAND="/usr/local/bin/date-stop"

# 3. Tworzenie komend globalnych (date-start, date-stop)
echo "⚙️  Tworzenie komend globalnych w /usr/local/bin/..."

# Tworzenie date-start
sudo bash -c "cat > $START_COMMAND" <<EOF
#!/bin/bash
cd $PROJECT_DIR
npm run dev
EOF

# Tworzenie date-stop
sudo bash -c "cat > $STOP_COMMAND" <<EOF
#!/bin/bash
echo "🛑 Zatrzymywanie serwera na porcie 3000..."
sudo fuser -k 3000/tcp
EOF

# Uprawnienia dla komend
sudo chmod +x $START_COMMAND
sudo chmod +x $STOP_COMMAND

# 4. Konfiguracja PM2 dla autostartu
echo "📦 Konfigurowanie PM2 dla autostartu..."

if ! command -v pm2 &> /dev/null
then
    echo "💡 PM2 nie jest zainstalowany. Instaluję PM2 globalnie..."
    sudo npm install -g pm2
fi

# Uruchomienie projektu przez PM2
pm2 start npm --name "date-roulette" -- run dev --cwd "$PROJECT_DIR"
pm2 save

echo "✅ Gotowe! Możesz teraz używać komend:"
echo "👉 'date-start' - aby uruchomić projekt ręcznie"
echo "👉 'date-stop'  - aby zwolnić port 3000"
echo "👉 PM2 automatycznie zadba o działanie aplikacji w tle."
