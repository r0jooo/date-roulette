# Instrukcja instalacji dla WSL Ubuntu

Ta instrukcja przeprowadzi Cię krok po kroku przez proces uruchomienia projektu "Date Roulette" w środowisku WSL (Windows Subsystem for Linux) na Ubuntu.

---

## Krok 1: Przygotowanie środowiska

Zacznij od aktualizacji listy pakietów:

```bash
sudo apt update
```

Zalecamy instalację Node.js poprzez **nvm** (Node Version Manager), aby uniknąć problemów z uprawnieniami `sudo`. Uruchom poniższą komendę, aby zainstalować nvm:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

Po instalacji nvm, zamknij i otwórz terminal ponownie lub wpisz `source ~/.bashrc`. Następnie zainstaluj najnowszą wersję Node.js LTS:

```bash
nvm install --lts
```

---

## Krok 2: Pobieranie projektu

Sklonuj repozytorium na swój dysk wewnątrz WSL i wejdź do folderu projektu:

```bash
git clone https://github.com/r0jooo/date-roulette.git && cd date-roulette
```

---

## Krok 3: Instalacja zależności

Zainstaluj wszystkie biblioteki niezbędne do działania aplikacji:

```bash
npm install
```

---

## Krok 4: Uruchamianie

Uruchom serwer deweloperski:

```bash
npm run dev
```

Po uruchomieniu, Twoja strona będzie dostępna w przeglądarce na Windowsie pod adresem:
**[http://localhost:3000](http://localhost:3000)**

---

## Dostęp z Windowsa

WSL współdzieli sieć `localhost` z Twoim Windowsem. Oznacza to, że po uruchomieniu aplikacji w terminalu Ubuntu, możesz ją otworzyć w dowolnej przeglądarce (Chrome, Edge, Firefox) bezpośrednio na Windowsie, korzystając z adresu `localhost:3000`. Nie musisz sprawdzać adresu IP WSL.

---

## Rozwiązywanie problemów

### Błąd: Port 3000 jest zajęty
Jeśli otrzymasz informację, że port 3000 jest już używany przez inny proces, możesz go zwolnić komendą:

```bash
sudo fuser -k 3000/tcp
```

Następnie ponownie uruchom `npm run dev`.
