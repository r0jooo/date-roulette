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

## 💻 1. Instalacja WSL i Ubuntu (Windows)

Jeśli nie masz jeszcze zainstalowanego środowiska Linux na Windowsie, otwórz **PowerShell** lub **Wiersz polecenia** jako administrator i wpisz:

```powershell
# Instaluje WSL oraz domyślną dystrybucję (zazwyczaj Ubuntu)
wsl --install
```

Jeśli masz już WSL, ale chcesz zainstalować konkretnie **Ubuntu**, użyj:
```powershell
wsl --install -d Ubuntu
```

Po zakończeniu instalacji zrestartuj komputer. Po restarcie otworzy się okno terminala Ubuntu – skonfiguruj w nim swoją nazwę użytkownika i hasło.

> [!TIP]
> Ubuntu możesz również zainstalować bezpośrednio z **Microsoft Store**, wyszukując frazę "Ubuntu".

---

## 🟢 2. Instalacja Node.js (Ubuntu / WSL)

Zalecamy użycie **nvm** (Node Version Manager), aby łatwo zarządzać wersjami Node.js bez problemów z uprawnieniami. W terminalu Ubuntu (WSL) wpisz:

### Instalacja nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
*(Po tej komendzie zamknij i otwórz terminal ponownie).*

### Instalacja Node.js:
```bash
nvm install --lts
```

---

## 🚀 3. Pobieranie i instalacja projektu

Gdy Twoje środowisko jest gotowe, wykonaj poniższe kroki w terminalu Ubuntu (WSL):

### Klonowanie repozytorium
```bash
git clone https://github.com/r0jooo/date-roulette.git
```

### Wejście do folderu projektu
```bash
cd date-roulette
```

### Instalacja bibliotek
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
