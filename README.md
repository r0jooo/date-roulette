# Date Roulette 🎲

**Date Roulette** to interaktywny generator pomysłów na randki, zaprojektowany do szybkiego i lokalnego działania na Twoim komputerze.

---

## 💻 Instalacja WSL i Ubuntu (Windows)

Jeśli nie masz jeszcze przygotowanego środowiska Linux, wykonaj te kroki:

1.  **Uruchom PowerShell** jako administrator.
2.  **Wpisz komendę instalacji**:
    ```powershell
    wsl --install
    ```
3.  **Zrestartuj komputer** po zakończeniu procesu.
4.  **Skonfiguruj Ubuntu**: Po restarcie otworzy się okno terminala. Podaj swoją nazwę użytkownika i hasło (hasło nie będzie widoczne podczas wpisywania).

> [!TIP]
> Jeśli masz już WSL, ale potrzebujesz dystrybucji Ubuntu, wpisz: `wsl --install -d Ubuntu`.

---

## 🟢 Instalacja Node.js i NVM (Ubuntu/WSL)

Aby zainstalować Node.js w najlepszy możliwy sposób, użyj menedżera wersji **NVM**:

1.  **Zainstaluj NVM** komendą w terminalu Ubuntu:
    ```bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
    ```
2.  **Odśwież terminal**: Zamknij i otwórz ponownie okno Ubuntu lub wpisz `source ~/.bashrc`.
3.  **Zainstaluj Node.js (LTS)**:
    ```bash
    nvm install --lts
    ```
4.  **Sprawdź poprawność**:
    ```bash
    node -v
    ```

---

## ⚡ Szybki Start (Automatyczny)

Dzięki pełnej automatyzacji, uruchomienie projektu sprowadza się do dwóch prostych kroków:

    git clone https://github.com/r0jooo/date-roulette.git && cd date-roulette && npm install
    ```
2.  **Uruchomienie**: Po zakończeniu instalacji możesz w dowolnym momencie uruchomić aplikację komendą:
    ```bash
    date-start
    

---

## 🔄 Aktualizacja projektu

Aby pobrać najnowsze zmiany i zaktualizować projekt, wykonaj wewnątrz folderu `date-roulette`:

```bash
git pull && npm install
```
*(npm install upewni się, że wszystkie nowe biblioteki i skrypty systemowe są zaktualizowane).*

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
*   `scripts/` – Skrypty automatyzacji (instalacja, odinstalowanie).

---

## 🗑️ Odinstalowanie

Jeśli chcesz całkowicie usunąć projekt wraz z komendami systemowymi:

1.  Uruchom skrypt odinstalowujący:
    ```bash
    sh scripts/uninstall.sh
    ```
2.  (Opcjonalnie) Usuń folder projektu:
    ```bash
    cd .. && rm -rf date-roulette
    ```
