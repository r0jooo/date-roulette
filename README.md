# 🎡 Date Roulette

**Date Roulette** to prosty i estetyczny generator pomysłów na randki, stworzony z myślą o użytkownikach, którzy chcą urozmaicić swój czas wolny bez zbędnego planowania.

---

## 🛠 Wymagania wstępne (Prerequisites)

Zanim zaczniesz, upewnij się, że masz przygotowane środowisko:
*   **WSL Ubuntu** (zainstalowane i skonfigurowane).
*   **Node.js** (zalecana wersja **18 lub nowsza**).

Aby sprawdzić, czy masz zainstalowany Node.js, wpisz w terminalu:
```bash
node -v
```

---

## 🚀 Instrukcja instalacji krok po kroku

Wykonaj poniższe kroki w terminalu Twojego Ubuntu (WSL):

### 1. Klonowanie repozytorium
```bash
git clone https://github.com/r0jooo/date-roulette.git
```

### 2. Wejście do folderu projektu
```bash
cd date-roulette
```

### 3. Instalacja bibliotek
```bash
npm install
```

---

## 🏃‍♂️ Uruchamianie aplikacji

Aby wystartować serwer deweloperski, użyj komendy:
```bash
npm run dev
```

🌐 **Dostęp z Windowsa:**
Po uruchomieniu komendy w WSL, Twoja aplikacja będzie dostępna bezpośrednio w przeglądarce pod adresem:
**[http://localhost:3000](http://localhost:3000)**

---

## 📁 Struktura plików

Oto krótka legenda dotycząca tego, co znajdziesz w folderze `src/`:

*   `src/app/` – Główne strony i layouty aplikacji (Next.js App Router).
*   `src/components/` – Podzielone na mniejsze części elementy interfejsu (np. przyciski, karty).
*   `src/data/` – Pliki JSON lub stałe z bazą pomysłów na randki.

---

## 🔧 Rozwiązywanie problemów (Troubleshooting)

### Błąd portu (EADDRINUSE)
Jeśli zobaczysz błąd mówiący, że port 3000 jest już zajęty, możesz go szybko zwolnić komendą:

```bash
sudo fuser -k 3000/tcp
```

Następnie spróbuj ponownie uruchomić `npm run dev`.

---

## 🐳 Alternatywa: Docker

Jeśli wolisz Docker, możesz uruchomić projekt jedną komendą:
```bash
docker-compose up
```
*(Wymaga zainstalowanego Docker Desktop z włączoną integracją WSL).*
