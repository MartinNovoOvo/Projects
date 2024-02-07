# GIT
SCM - Source Code Menagment 
## Proces
1. Okreslamy operatora: imię i adres emial
2. Wybieramy ścieżkę do projketu/folderu
3. Inicjujemy
4. Dodajemy pliki do śledzenia
5. Aby rozpcząć proces zapamiętywania wersji musimy jeszcze wydac polecenie commit. Funkcja "oddania/powierzenia/popełnienia"
6. Ignorowanie - aby komletnie ignorawać foleder, pliki przed rejestrowaniem.
    + należy stworzyć dokument tekstowy i zmienić jego nazwę na: ".gitignored". Potwierdzić stworzenei pliku.
    + W pliku tekstowym dodajemy komentarze po #, dzięki temu łatwiej będzie nam zrozumieć co autor miał na mysli
    + wpisując konkretną nazwę wykluczymy ten konkretny element
    + wpisująć *.txt wykluczymy wszystkie pliki tekstowe
    + [link](https://github.com/github/gitignore) do pozostałych możliwości ignorowania
7. Aby zapisać pliki należy najpierw dodać sie do git staging komendą: git add...
8. w gicie są 3 etapy:
    + pliki edytowalne - edytowanie plików
    + staging - trzymanie ich w pogotowiu, aż będzieez gotowy do zapisu (commit)
    + commit - ostatni etap, czyli zapisanie zmian


## Komendy
1. git config --global user.name "Marcin" - ustawia imię operatora
2. git config --global user.email przykład@abc.com - bez cudzysłowu, ustawia adres email
3. git config --global init.default branch main  - ustawia nazwę branch
4. -h   - dodając uzyskamy pomoc odnośnie danej komendy np: "config -h" pokaże pomoc dla configa 
5. cd "scieżka do folderu projektu". Np: c:/users/...
6. git init - inicjacja
7. git status - pokazuje status 
8. git add "nazwa pliku" - dodaje konkretny plik do sledzenia
9. git rm --cached "nazwa pliku" - usuwa plik z śledzenia
10. rm -rf .git  - usuwa git z projektu
11. git commit -m "dowolny opis" - zapisuje aktualną wersję plików do histroii rejestru wraz z dodanym opisem. 
12. git diff - poazuje co się zmieniło
13. git restore --staged - usuwa pliki z staging. 
14. git commit -a -m "opis dowolny" - omija etap stagingu i odrazu zapisuje zmiany



# Przydatne linki
1. https://github.com/github/gitignore
