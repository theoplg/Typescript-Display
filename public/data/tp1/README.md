# 01_hello_world_typescript

:memo: [éditer cette page](https://gitlab.com/-/ide/project/webdev101/webdev101.gitlab.io/edit/main/-/public/01_hello_world_typescript/README.md)

## installer les prérequis

vous devez installer

- l'IDE [VSCode](https://code.visualstudio.com/download)
- git [Git](https://git-scm.com/downloads)
- le runtime JavaScript [Bun](https://bun.sh/)
- le runtime NodeJs [NodeJs](https://nodejs.org/en/download/)
- le backend Astro [Astro](https://astro.build/) que vous n'avez pas besoin d'installer, mais que vous initialiserez avec `bun create astro@latest` dans chaque répertoire (TP/projet). Pour le moment vous n'avez pas besoin de créer un projet Astro pour ce premier TP mais à partir du second TP. Attention pour certains avec une architecture processeur ARM il faudra utiliser la commande `npm create astro@latest`.
- l'extension Astro de VSCode [Astro Extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) : directement dans VSCode, cliquez sur l'icône des extensions dans la barre latérale gauche, recherchez "Astro" et cliquez sur "Installer"
- les extensions Github copilot et Gihub copilot chat dans VSCode. Vous pouvez les installer en cliquant sur l'icône des extensions dans la barre latérale gauche de VSCode, en recherchant "copilot" et en cliquant sur "Installer".
- le gestionnaire de base de données PocketBase [PocketBase](https://pocketbase.io/) - il suffit de télécharger un exécutable, pas besoin de l'installer.
- le langage [typescript](https://www.typescriptlang.org/download) globalement sur votre ordinateur en utilisant (en mode superutilisateur) `bun install -g typescript` qui fournira la commande `tsc` (typescript compiler)

  > sur les machines de l'école, VSCode est installé, mais pas typescript et vous n'avez pas le droit d'installer globalement typescript. Vous pouvez cependant l'installer localement avec `npm install typescript --save-dev` (attention, il s'agit bien de npm au lieu de bun) et utiliser la commande `npx tsc` (au lieu de `tsc`)

## vérifier l'installation

```terminal
bun --version
|success|1.2.2
tsc -v
|success|5.5.4
```

## Prettier Formatter for Visual Studio Code

Pour formater automatiquement votre code, vous devez installer l'extension "Prettier Formatter for Visual Studio Code". Vous pouvez le faire en cliquant sur l'icône des extensions dans la barre latérale gauche de VSCode, en recherchant "Prettier" et en cliquant sur "Installer". L'utilisation est assez simple, vous pouvez soit cliquer sur l'icône de la barre d'outils en bas "Prettier", soit utiliser le raccourci clavier `Alt` + `Shift` + `F` pour formater votre code.

## cloner le dépôt

dans VSCode, clonez le dépôt <https://gitlab.com/webdev101/webdev101.gitlab.io.git> puis allez dans le dossier `public/01_hello_world_typescript`

## lire et comprendre

vous devez lire et comprendre le code source de `hello.ts` que voici

[hello.ts](hello.ts ":include :type=code typescript")

## transpiler et exécuter

transpilez dans un terminal avec

```terminal
tsc hello.ts
```

le fichier `hello.js` est créé, vous pouvez l'exécuter sans navigateur avec bun

```terminal
bun hello.js
```

en comparant les fichiers `hello.ts` et `hello.js`, vous pouvez comprendre l'étape de transpilation (la transpilation, contrairement à la compilation, est une transformation de code source en code source et non en code binaire)

bun est aussi capable de transpiler et exécuter en une seule commande, dans ce cas vous pouvez directement exécuter le fichier `hello.ts` avec:

```terminal
bun hello.ts
```

## comprendre l'utilité du typage dans typescript

lisez https://www.typescriptlang.org/fr/docs/handbook/typescript-from-scratch.html pour comprendre pourquoi le typage permet de gagner du temps

lisez sur le site pédagogique (ecampus) les parties théoriques sont disponibles sur des PDF à votre dispositions, lisez ceux-ci:

07 Environnement de developpement.pdf

02 Un peu d'histoire.pdf

03 ECMAScript.pdf

04 Pourquoi TypeScript .pdf

# exercice : le typage dans typescript

comparez le fichier `hello.js` et `hello.ts` et déduisez l'étape de transpilation. A quoi sert le typage fort dans typescript qui n'existe pas dans javascript ? Répondez dans un fichier texte au format markdown.
