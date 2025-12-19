Le projet PUNTO se décompose en 3 programmes :

1. index.astro pour l'interface web
2. style.css uniquement pour le style du jeu
3. punto.js contenant toutes les règles du jeu et la fonction clickedoncell qui gère le jeu tour à tour

Dans un premier temps il suffit d'ouvrir le terminal, aller dans le dossier **helpless-hubble**, qui est le serveur astro. Ensuite on tape la commande bun dev. Le jeu se lance. Le premier tour est automatique, le premier joueur est aléatoire, c'est normalement le plus jeune qui commence. Ensuite il faut piocher la carte puis la placer.  
**Attention**, punto.js doit être dans src, indexe.astro dans src/pages et style.css dans public
