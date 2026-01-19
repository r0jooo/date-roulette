# Date Roulette 🎲

**Date Roulette** to interaktywny generator pomysłów na randki, zaprojektowany do szybkiego i lokalnego działania na Twoim komputerze.

---

## ⚡ Szybki Start (Automatyczny)

Dzięki pełnej automatyzacji, uruchomienie projektu sprowadza się do dwóch prostych kroków:

### 1. Klonowanie repozytorium
Otwórz terminal WSL (Ubuntu) i wpisz:
```bash
git clone https://github.com/r0jooo/date-roulette.git && cd date-roulette
```

### 2. Instalacja i Automatyczna Konfiguracja
Uruchom poniższą komendę. **npm install** automatycznie zainstaluje zależności, skonfiguruje autostart (PM2) oraz utworzy komendę `date-start` w Twoim systemie:
```bash
npm install
```

---

## 🌍 Komendy Globalne

Po zakończeniu instalacji możesz zarządzać projektem z dowolnego miejsca w terminalu:

*   `date-start` – ręczne uruchomienie serwera.
*   `date-stop` – zatrzymanie serwera i zwolnienie portu 3000.

---

## 🛠 Rozwiązywanie problemów (Troubleshooting)

| Problem | Rozwiązanie |
| :--- | :--- |
| **Brak Node.js** | Zainstaluj przez NVM: `nvm install --lts` |
| **Błąd uprawnień** | Skrypt setup może poprosić o hasło `sudo` do utworzenia komend globalnych. |
| **Port 3000 zajęty** | Użyj komendy `date-stop` lub `sudo fuser -k 3000/tcp`. |

---

## 📁 Struktura projektu
*   `src/app/` – Strona główna i layouty.
*   `src/components/` – Moduły interfejsu.
*   `scripts/` – Skrypty automatyzacji instalacji.
