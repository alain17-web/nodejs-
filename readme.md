# NodeJS

## Présentation et installation
Aller sur le site https://nodejs.org/en et télécharger la dernière version LTS (dernière version stable)

Pour voir sa version de node, taper dans n'importe quelle console
```
    node -v
    ou
    node --version
```

## Créer un projet node
### Initialiser le projet
Depuis le dossier qui deviendra notre projet node :
```
    npm init
```
Il va demander :
* package name : laisser la valeur par défaut
* version : laisser la valeur par défaut (v1)
* description : contiendra la description du projet
* entry point : le fichier js qui sera le point d'entrée de l'application (souvent ils s'appellent soit index.js qui est la valeur par défaut, soit app.js)
* test command : la commande pour lancer les tests : laisser vide
* git repository : pour directement mettre le lien vers le repo associé
* keywords : mots clef en rapport avec le projet
* author : mettez votre nom
* licence : laisser celle de base (ISC)

Une confirmation est ensuite demandée -> Enter pour confirmer

### Le fichier package.json
Un fichier vient d'être créé, le package.json. Il va contenir toutes les informaions du projet, les commandes pour le lancer (en dev, en test, en prod etc) et surtout, les dépendances (les modules/librairies dont le projet a besoin pour fonctionner)

### Pour installer un module/lib
Pour installer en global sur la machine mais pas ajouté dans les dependances du projet
```
    npm i -g nomModule
    ou
    npm install -global nomModule
```
Pour installer et que ça apparaisse dans les dépendance du projet
```
    npm i nomModule
    npm i --save nomModule (le save se fait maintenant par défaut et n'est plus obligatoire)
```
Pour installer spécifiquement en dépendance de Dev
```
    npm i -D nomModule
    ou
    npm install --save-dev nomModule
```

<br/>
<hr>
<br/>

# Les Tips
## Extension pour créer un gitignore en fonction du projet
* gitignore de CodeZombie
* Pour créer un fichier .gitignore :
```
    F1 ou Ctrl+Maj+P
```
Ouvre une petite fenêtre, selectionnez (si vous commencez à taper il sera proposé dans la liste)
```
    -> add gitignore
```
Vous demande pour quel type de projet (s'il n'apparait pas commencez à écrire node)
```
    -> node
```
Et tadam !