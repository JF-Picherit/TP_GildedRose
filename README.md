# Smells code

Problème n°1:
  Le test attendait un nom différent de celui qui était affecté à notre shop.

Résolution n°1:
  Modification de fixme par foo dans le rendu test.

-----------------------------------------------------------------------

Problème n°2:
  Dupplication de condition "this.items[i]".

Résolution n°2:
  Création d'une variable a appeler.

-----------------------------------------------------------------------

Problème n°3:
  Dupplication des noms des items.

Résolution n°3:
  Création d'une varibale pour chaque nom + création d'un tableau pour l'appel groupé des noms.

-----------------------------------------------------------------------

Problème n°4:
  Trop de conditions if imbriquée.

Résolution n°4:
  - Regroupement de tous les nombres dans de nouvelles variables.
  - Factorisation des conditions 'if' par '&&'.

-----------------------------------------------------------------------

# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```
