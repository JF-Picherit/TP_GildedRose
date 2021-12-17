# Smells code

Problème n°1:
Le test attendait un nom différent de celui qui était affecté à notre shop.

Résolution n°1 (commit "pb 1: fixme to foo in test"):
Modification de fixme par foo dans le rendu test.

---

Problème n°2:
Dupplication de condition "this.items[i]".

Résolution n°2 (commit "Fix dupplication 'this.items[i]' with the const 'myItem'"):
Création d'une variable a appeler.

---

Problème n°3:
Dupplication des noms des items.

Résolution n°3 (commit"fix dupplication of the items names by variables"):
Création d'une varibale pour chaque nom + création d'un tableau pour l'appel groupé des noms.

---

Problème n°4:
Trop de conditions if imbriquée.

Résolution n°4:
(commit "redesign condition code: if to and")

- Regroupement de tous les nombres dans de nouvelles variables.
- Factorisation des conditions 'if' par '&&'.

(commit "fix for to map")

- Remplacement de la boucle for par map.
- Refacto code classique.

---

Problème n°5:
Condition pas facile à maintenire.

Résolution n°5 (commit "Open/Close"):

- Utilisation de l'Open/Close.
- Répartition des types de conditions par classe.

---

Problème n°6:
Identification de code au résultat similaire qui pourrait être une seule et même fonction.

Résolution n°6 (commit "Début de répartition du code en différentes méthodes."):

---

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
