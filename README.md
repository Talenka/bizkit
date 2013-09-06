## [Jouer en ligne](http://bizkit.boudah.pl)

**But du projet** : faire une version jouable en ligne du BizKit!, le célèbre 
jeu à boire. Objectif atteint en moins de 7 Ko dans un unique fichier HTML 
(jouable hors-ligne). L’accent a été mis sur la simplicité et la légèreté du 
projet, et on peut compléter facilement le jeu ou en faire des variantes.

### Licence

Projet démarré par [Boudah Talenka](http://boudah.pl) et publié librement sous
la [Licence Publique Générale GNU](https://www.gnu.org/licenses/gpl.html).

### Sous le capot

Un script shell utilise le modèle 
[`/html/index.htm`](https://github.com/Talenka/bizkit/blob/master/html/index.htm) 
pour construire la page 
[`/index.htm`](https://github.com/Talenka/bizkit/blob/master/index.htm). 
Le style [`/css/style.css`](https://github.com/Talenka/bizkit/blob/master/css/style.css) 
est minifié avant d'être incorporé à l'index. Pour le javascript nous utilisons 
le [Google Closure compiler](https://developers.google.com/closure/compiler/) 
qui regroupe, minifie et optimise les fichiers du dossier 
[`/js`](https://github.com/Talenka/bizkit/tree/master/js).