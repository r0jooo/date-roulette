# Date Roulette

Aplikacja "Date Roulette" została zaprojektowana do pracy w **100% lokalnie i offline**. GitHub służy wyłącznie do udostępniania kodu źródłowego.

## Opis projektu

"Date Roulette" to interaktywna aplikacja webowa w języku polskim, która pomaga losować pomysły na randkę z lokalnej bazy danych. Wszystkie dane są przechowywane wewnątrz projektu, co zapewnia pełną prywatność i szybkość działania bez dostępu do Internetu.

## Szybki start (Lokalnie)

### 1. Automatyczny Setup (Linux/macOS)
Uruchom skrypt, aby automatycznie zainstalować zależności:
```bash
./setup.sh
```

### 2. Uruchomienie deweloperskie
```bash
npm run dev
```
Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

---

## Docker (Zalecane)

Jeśli masz zainstalowanego Dockera, możesz uruchomić aplikację jedną komendą, nie martwiąc się o środowisko Node.js:

```bash
docker-compose up
```
Aplikacja będzie dostępna pod adresem `localhost:3000`.

---

## Rozwiązywanie problemów

### Błąd: Port 3000 jest już w użyciu
Jeśli zobaczysz błąd informujący, że port 3000 jest zajęty, możesz uruchomić aplikację na innym porcie:

**NPM:**
```bash
PORT=3001 npm run dev
```

**Docker:**
Zmień mapowanie portów w `docker-compose.yml`:
```yaml
ports:
  - "3001:3000"
```

### Problemy z instalacją modułów
Upewnij się, że masz zainstalowaną wersję Node.js 18 lub nowszą. Jeśli błędy nadal występują, spróbuj usunąć folder `node_modules` i uruchomić `./setup.sh` ponownie.

---

## Stos technologiczny lokalny

- **Next.js**: Framework React.
- **Tailwind CSS**: Stylowanie.
- **Local JSON/Data**: Brak zewnętrznych baz danych czy API.
