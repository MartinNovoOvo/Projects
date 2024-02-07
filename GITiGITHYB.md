# GIT
SCM - Source Code Menagment 
## Proces
1. Okreslamy operatora: imię i adres emial
2. Wybieramy ścieżkę do projketu/folderu
3. Inicjujemy
4. Dodajemy pliki do śledzenia
5. Aby rozpcząć proces zapamiętywania wersji musimy jeszcze wydac polecenie commit
6. Ignorowanie - aby komletnie ignorawać foleder, pliki przed rejestrowaniem.
    + należy stworzyć dokument tekstowy i zmienić jego nazwę na: ".gitignored". Potwierdzić stworzenei pliku.
    + W pliku tekstowym dodajemy komentarze po #, dzięki temu łatwiej będzie nam zrozumieć co autor miał na mysli
    + wpisując konkretną nazwę wykluczymy ten konkretny element
    + wpisująć *.txt wykluczymy wszystkie pliki tekstowe
    + [link](https://github.com/github/gitignore) do pozostałych możliwości ignorowania

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



# Przydatne linki
1. https://github.com/github/gitignore
