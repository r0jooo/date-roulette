# Date Roulette 🎲

**Date Roulette** to interaktywny generator pomysłów na randki, zaprojektowany do szybkiego i lokalnego działania na Twoim komputerze.

---

## ⚡ Szybki Start (TL;DR)

Skopiuj i wklej poniższą komendę w terminalu WSL (Ubuntu), aby uruchomić projekt w kilka sekund:

```bash
git clone https://github.com/r0jooo/date-roulette.git && cd date-roulette && npm install && npm run dev
```

---

## 🐧 Pełna Instrukcja WSL Ubuntu

### Krok 1: Środowisko
Upewnij się, że masz zainstalowany Node.js (wersja 18 lub nowsza). Jeśli nie masz środowiska Node, wykonaj poniższe komendy w terminalu Ubuntu (WSL):

#### Instalacja NVM (Node Version Manager):
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
*(Po tej komendzie zamknij i otwórz terminal ponownie).*

#### Instalacja Node.js:
```bash
nvm install --lts
```

Sprawdź wersję:
```bash
node -v
```

### Krok 2: Instalacja
Jeśli nie użyłeś Szybkiego Startu, wykonaj standardową instalację:
```bash
git clone https://github.com/r0jooo/date-roulette.git
cd date-roulette
npm install
```

### Krok 3: Uruchomienie
Wystartuj serwer deweloperski:
```bash
npm run dev
```
🌐 Aplikacja jest dostępna pod adresem: **[http://localhost:3000](http://localhost:3000)**

---

## 🔄 Aktualizacja projektu

Aby pobrać najnowsze funkcje i poprawki, wykonaj wewnątrz folderu projektu:

```bash
git pull && npm install
```

---

## 🛠 Centrum Pomocy (Troubleshooting)

| Problem | Rozwiązanie (Komenda) |
| :--- | :--- |
| **Brak Node.js** | Zainstaluj przez NVM: `nvm install --lts` |
| **Port 3000 zajęty** | Zwolnij port: `sudo fuser -k 3000/tcp` |
| **Błąd grid.svg (404)** | Upewnij się, że plik istnieje w `public/grid.svg` |

---

## 📁 Struktura src/
*   `app/` – Strumień stron i layoutów (Next.js).
*   `components/` – Moduły interfejsu użytkownika.
*   `data/` – Baza pomysłów na randki.
